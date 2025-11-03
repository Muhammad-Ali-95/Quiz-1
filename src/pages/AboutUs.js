 import React from "react";
import { FaHeart, FaLeaf, FaUsers, FaSmile, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-24 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">About ShelfShare</h1>
        <p className="text-gray-500">Our journey and what makes us unique</p>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="flex-1 rounded-xl overflow-hidden shadow-md">
          <img
            src="https://media.gettyimages.com/id/938684198/photo/france-books-finance-public-debt.jpg?s=2048x2048&w=gi&k=20&c=q1FeiOgMmsZbz-yMpxV-bks6LI8I_q34TeacTx_8qKo="
            alt="ShelfShare"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ShelfShare was founded in 2025 with a vision to build a global community of book lovers. 
            What began as a small idea to connect readers has now evolved into a dynamic book-sharing platform
            where anyone can discover, swap, and discuss books effortlessly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our founder, <span className="text-green-600 font-semibold">Muhammad Ali</span>, 
            imagined a space where technology enhances the joy of reading — 
            bringing together people who share stories, ideas, and learning experiences.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            From personalized recommendations and digital shelves to social reading groups and library integration, 
            ShelfShare encourages meaningful book discovery and community-driven reading.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe reading is not just an individual act — it’s a shared experience. 
            That’s why we’re dedicated to building bridges between readers everywhere.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
          <p className="text-gray-500">The principles that guide our mission</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaHeart />, title: "Quality Experience", text: "We ensure smooth, reliable, and enjoyable interactions across all our reading and sharing features." },
            { icon: <FaLeaf />, title: "Sustainability", text: "By promoting book sharing and digital reading, we help reduce waste and encourage green literacy." },
            { icon: <FaUsers />, title: "Community", text: "ShelfShare thrives on the spirit of sharing, discussion, and connecting readers globally." },
            { icon: <FaSmile />, title: "Satisfaction", text: "Your experience matters most — we constantly improve to make reading more rewarding and personal." },
          ].map((val, i) => (
            <div key={i} className="bg-white shadow-sm p-6 rounded-xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
                {val.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
              <p className="text-gray-600 text-sm">{val.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="text-gray-500">The people who make ShelfShare possible</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Muhammad Ali", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a", socials: [FaTwitter, FaLinkedin, FaInstagram] },
            { name: "Ayesha Kanwal", role: "Chief Librarian", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2", socials: [FaTwitter, FaLinkedin, FaInstagram] },
            { name: "Mukarram Ijaz", role: "Operations Manager", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7", socials: [FaTwitter, FaLinkedin, FaInstagram] },
          ].map((member, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden hover:-translate-y-1 transition">
              <img src={member.img} alt={member.name} className="h-64 w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.role}</p>
                <div className="flex justify-center gap-4 mt-3 text-gray-500">
                  {member.socials.map((Icon, j) => (
                    <a key={j} href="#" className="hover:text-green-600"><Icon /></a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">What Readers Say</h2>
          <p className="text-gray-500">Stories from our happy community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "ShelfShare made reading social again! I’ve found amazing friends and rare books through swaps.",
              name: "Emily Davis",
              role: "Regular Reader",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            },
            {
              text: "As a professional, I love the personalized recommendations — it saves me time and helps me grow.",
              name: "David Wilson",
              role: "Business Executive",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            },
            {
              text: "My kids love ShelfShare! We share and read stories together. It’s like a digital library for our family.",
              name: "Jennifer Martinez",
              role: "Mother of Two",
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="italic text-gray-600 mb-4">{t.text}</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
