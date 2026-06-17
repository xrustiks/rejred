'use client';

import { useEffect, useState } from 'react';
import type { EventItem, EventsPageContent } from '@/lib/content';

type Props = {
  initialContent: EventsPageContent;
};

export function EventsSection({ initialContent }: Props) {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    let isMounted = true;

    async function loadEvents() {
      try {
        const response = await fetch('/admin/data/events.json', { cache: 'no-store' });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as EventsPageContent;
        if (isMounted && data && Array.isArray(data.events)) {
          setContent({
            ...initialContent,
            ...data,
            events: data.events.filter((event): event is EventItem => Boolean(event && event.title)),
          });
        }
      } catch {
        // Keep the initial build-time content if the runtime fetch fails.
      }
    }

    loadEvents();

    return () => {
      isMounted = false;
    };
  }, [initialContent]);

  const { title, intro, emptyState, events } = content;

  return (
    <div className="container mx-auto px-8 sm:px-12 lg:px-16 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">{intro}</p>

      {events.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <div key={`${event.title}-${event.date ?? 'date'}`} className="bg-white rounded-xl p-6 shadow-md border border-sky-100">
              {event.date ? <p className="text-sm font-medium text-sky-700 mb-2">{event.date}</p> : null}
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h2>
              {event.location ? <p className="text-gray-600 mb-3">{event.location}</p> : null}
              {event.description ? <p className="text-gray-700">{event.description}</p> : null}
              {event.link ? (
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium underline">
                  Learn more
                </a>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 bg-white rounded-xl p-6 shadow-md border border-sky-100">
          <p className="text-gray-500">{emptyState}</p>
        </div>
      )}
    </div>
  );
}