import React from "react";

export default function Cart() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Main Section */}
      <main className="flex-grow mt-32">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
          <p className="text-gray-600 mb-6">
            Your cart is empty. Please add some books to proceed.
          </p>
          <a
            href="/"
            id="Explore"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Browse Home
          </a>
        </div>
      </main>

       
    </div>
  );
}
