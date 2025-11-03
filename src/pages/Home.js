 import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20230527/original/pngtree-an-old-bookcase-in-a-library-picture-image_2760144.jpg')",
        }}
      >
        <div className="bg-black/50 p-8 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">One Dream, One Book, One New Story.</h1>
          <a
            href="/genres"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full text-lg"
          >
            Explore More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Welcome to ShelfShare</h2>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          A space where readers and book lovers connect — share your shelf,
          discover hidden gems, and find stories worth passing on. Whether you
          love fiction, research, or poetry — your next favorite book is waiting.
        </p>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-green-100 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-3">Join Our Reading Community</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-6">
          Create or join reading groups, share reviews, swap books, and make new
          literary friends.
        </p>
        <a
          href="/signup"
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full"
        >
          Get Started
        </a>
      </section>
    </main>
  );
};

export default Home;
