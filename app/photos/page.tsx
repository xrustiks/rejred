export default function PhotosPage() {
  // Example photo data - Replace with your actual photos
  const photos = [
    { id: 1, title: "Studio Setup", url: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Studio" },
    { id: 2, title: "Recording Session", url: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Recording" },
    { id: 3, title: "Live Event", url: "https://via.placeholder.com/400x300/ec4899/ffffff?text=Live+Event" },
    { id: 4, title: "Behind the Scenes", url: "https://via.placeholder.com/400x300/10b981/ffffff?text=BTS" },
    { id: 5, title: "Guest Interview", url: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Interview" },
    { id: 6, title: "Team Photo", url: "https://via.placeholder.com/400x300/ef4444/ffffff?text=Team" },
  ];

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Photo Gallery</h1>
      <p className="text-gray-600 mb-8 sm:mb-12">
        Take a look behind the scenes and moments from our podcast journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg p-8 text-center" style={{ background: 'color-mix(in oklab, var(--primary) 10%, white)' }}>
        <h2 className="text-2xl font-bold mb-4">Share Your Photos</h2>
        <p className="text-gray-700 mb-4">
          Been to one of our events? Tag us on social media with your photos!
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="[color:var(--primary)] hover:brightness-110 font-semibold">
            #The Rejected Pre-MedPodcast
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Note: Replace placeholder images with your actual photos from Cloudinary or your image hosting service.</p>
      </div>
    </div>
  );
}
