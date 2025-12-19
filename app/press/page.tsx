export const metadata = {
  title: "Press and Interviews",
  description: "Press coverage and guest interviews.",
};

export default function PressPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Press & Interviews</h1>
      <p className="text-gray-600 mb-6 max-w-2xl">
        A curated list of press coverage, guest appearances and interviews. You can also find many mentions on our Instagram page.
      </p>

      <p className="text-gray-500">For the latest mentions and clips, see{' '}
        <a href="https://www.instagram.com/the_rejectedpremed_podcast/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">@the_rejectedpremed_podcast</a>.
      </p>
    </div>
  );
}
