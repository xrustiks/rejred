
export const metadata = {
  title: "Reviews",
  description: "What listeners say about The Rejected Pre-Med Podcast",
};

const reviews = [
  {
    id: 1,
    name: "Dr. Qing Yin Wang",
    role: "Medical Resident - Internal Medicine, University of Montreal",
    text: "In her podcast Rejected Premed, Valeria explores what it means to find resilience in the face of setbacks. Each episode is heartfelt, insightful, and pragmatic. Highly relevant for any student or young professional seeking a career path in these uncertain times.",
  },
  {
    id: 2,
    name: "Michelle Martinez",
    role: "Therapist, Canada",
    text: "As an occupational therapist, I value helping people find meaning in their daily activities to promote well-being. Rejection is a universal experience, and this podcast—through its diverse guests and the kind, honest approach of the host—offers a deeply introspective journey into that experience. It shares practical, constructive ways to respond to the experience, so it is something that we learn from and no longer disabling. The Rejected Pre-Med is truly a re-injection of life!",
  },
  {
    id: 3,
    name: "Thomas Ambrozaitis",
    role: "MSW, RSW - Counsellor (Instructor), University of Calgary Student Wellness Services",
    text: "Based on my work with students, they really value and needed to hear what Valeria shared. Valeria helped make the world a bit kinder, a bit more compassionate, and led by example. Everything Valeria talks about—overcoming rejection and building resilience—is backed by science.",
  },
  {
    id: 4,
    name: "Tina Li",
    role: "North Trail High School Student, Calgary Area",
    text: "As for your presentation, I loved it! It was incredibly inspiring and felt very authentic. Your message was a refreshing reminder that rejection isn't the end, but is often a form of redirection. I loved how you shared strategies for navigating rejection and building resilience through it.",
  },
  {
    id: 5,
    name: "Debobani Biswas",
    role: "General Mills",
    text: "I believe this talk could help so many more feel less alone in their struggles and more hopeful about what's ahead.",
  },
  {
    id: 6,
    name: "Michael Cook",
    role: "Chair of The United Way / Okotoks Partnership Committee 2025",
    text: "I had the pleasure of attending a presentation put on by Valeria. The delivery was exceptional and her ability to engage the room was phenomenal.",
  },
  {
    id: 7,
    name: "Tomi Ogeye",
    role: "MA - Specialist, new student programs, University of Calgary",
    text: "It was great having Valeria! Valeria was flexible with the planning and clearly liked engaging with students. Her message is important and I hope more students get the opportunity to hear from her. People in general would learn to embrace their feelings of disappointment after rejection and then take action in exploring other avenues for connection and advancement, after hearing from Valeria.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-8 sm:px-12 lg:px-16 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Reviews</h1>
      <p className="text-gray-600 mb-8">
        What people say about Valeria's presentations and podcast.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <article key={r.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-2 text-gray-900">{r.name}</h3>
            <div className="text-sm text-gray-500 mb-3">{r.role}</div>
            <p className="text-gray-700">{r.text}</p>
          </article>
        ))}
      </div>

      {/* CTA removed by request: send review button omitted */}
    </div>
  );
}
