"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VideosRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Client-side redirect to the unified Photos and Videos page
    router.replace("/media");
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Videos moved</h1>
      <p className="text-gray-600">
        This page has moved. You can find photos and videos on the
        {" "}
        <a href="/media" className="text-blue-600 hover:text-blue-700 underline">
          Photos and Videos
        </a>{" "}
        page.
      </p>
    </div>
  );
}
