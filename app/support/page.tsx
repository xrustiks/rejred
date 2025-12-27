export const metadata = {
  title: "Support and Resources",
  description: "Recommended books and mental health resources.",
};

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Support & Resources</h1>
      <p className="text-gray-600 mb-6">
        Here you'll find recommended books, articles and practical resources on mental health, dealing with rejection, and personal growth.
      </p>

      <section className="mt-6 grid gap-6">
        <div>
          <h2 className="font-semibold">Recommended Books</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>"The Gifts of Imperfection" — Brené Brown</li>
            <li>"Mindset: The New Psychology of Success" — Carol S. Dweck</li>
            <li>"Rising Strong" — Brené Brown</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Support Links</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li><a href="#" className="text-blue-600 underline">Local mental health services</a></li>
            <li><a href="#" className="text-blue-600 underline">Crisis hotlines by country</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
