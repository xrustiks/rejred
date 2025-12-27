"use client";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState({ links: false, connect: false });

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">The Rejected Pre-Med Podcast</h3>
            <p className="text-gray-400">
              Your source for inspiring conversations and stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <button
              className="flex justify-between items-center w-full text-lg font-semibold mb-2 md:mb-4 md:cursor-default"
              onClick={() =>
                setOpen((p) => ({ ...p, links: !p.links }))
              }
            >
              Quick Links
              <span className="md:hidden">{open.links ? "−" : "+"}</span>
            </button>
            <ul
              className={`space-y-2 ${
                open.links ? "block" : "hidden md:block"
              }`}
            >
              <li><a href="/" className="text-gray-400 hover:[color:var(--primary)]">Home</a></li>
              <li><a href="/podcasts" className="text-gray-400 hover:[color:var(--primary)]">Podcasts</a></li>
              <li><a href="/media" className="text-gray-400 hover:[color:var(--primary)]">Photos and Videos</a></li>
              <li><a href="/events" className="text-gray-400 hover:[color:var(--primary)]">Events</a></li>
              <li><a href="/press" className="text-gray-400 hover:[color:var(--primary)]">Press & Interviews</a></li>
              <li><a href="/support" className="text-gray-400 hover:[color:var(--primary)]">Support & Resources</a></li>
              <li><a href="/about" className="text-gray-400 hover:[color:var(--primary)]">Author</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <button
              className="flex justify-between items-center w-full text-lg font-semibold mb-2 md:mb-4 md:cursor-default"
              onClick={() =>
                setOpen((p) => ({ ...p, connect: !p.connect }))
              }
            >
              Connect
              <span className="md:hidden">{open.connect ? "−" : "+"}</span>
            </button>
            <ul
              className={`space-y-2 ${
                open.connect ? "block" : "hidden md:block"
              }`}
            >
              <li><a href="mailto:valerusu55@gmail.com" className="text-gray-400 hover:text-white">Email</a></li>
              <li><a href="https://instagram.com/the_rejectedpremed_podcast" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/valeria-rusnak" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="https://www.buymeacoffee.com/valeriarusnak" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="https://calendly.com/valerusu55" className="text-gray-400 hover:text-white">Calendly</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Rejected Pre-Med Podcast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}