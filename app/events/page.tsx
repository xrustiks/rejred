export const metadata = {
  title: "Events",
  description: "Upcoming events and appearances.",
};

import { getEventsPageContent } from '@/lib/content';
import { EventsSection } from '@/components/EventsSection';

export default function EventsPage() {
  return <EventsSection initialContent={getEventsPageContent()} />;
}
