export const metadata = {
  title: "Events",
  description: "Upcoming events and appearances.",
};

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Events</h1>
      <p className="text-gray-600 mb-6">
        This page will list upcoming events, meetups, live recordings and public appearances. 
        If you want to invite the host to speak or collaborate, please contact us via the Contact link on the About page.
      </p>

      <div className="mt-6">
        <p className="text-gray-500">No events scheduled yet. Check back soon or follow us on Instagram for updates.</p>
      </div>
    </div>
  );
}
