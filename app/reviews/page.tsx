
export const metadata = {
  title: "Reviews",
  description: "What listeners say about The Rejected Pre-Med Podcast",
};

const sampleReviews = [
  { id: 1, name: "Alex", text: "Incredibly honest and helpful — the episodes changed how I approach setbacks.", date: "2025-11-01" },
  { id: 2, name: "Priya", text: "Great conversations and practical tips. Highly recommend to students.", date: "2025-11-10" },
  { id: 3, name: "Jon", text: "Valeria's interviews are warm, insightful and very real.", date: "2025-12-05" },
];

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-8 sm:px-12 lg:px-16 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Reviews</h1>
      <p className="text-gray-600 mb-8">
        Honest feedback from listeners who joined conversations on the podcast.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleReviews.map((r) => (
          <article key={r.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="text-sm text-gray-500 mb-2">{new Date(r.date).toLocaleDateString()}</div>
            <h3 className="font-semibold mb-2 text-gray-900">{r.name}</h3>
            <p className="text-gray-700">{r.text}</p>
          </article>
        ))}
      </div>

      {/* CTA removed by request: send review button omitted */}
    </div>
  );
}
