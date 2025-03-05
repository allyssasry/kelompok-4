import React from "react";
import "./App.css";

import anasImage from "./assets/anas.jpeg";
import alisaImage from "./assets/alisa.png";
import reyImage from "./assets/rey.png";
import haikalImage from "./assets/haikal.png";
import snow from "./assets/salju.mp4";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const profiles = [
  {
    name: "Anas Khalif",
    nim: "2331407007111105",
    image: anasImage,
  },
  {
    name: "Allyssa Nur Ayu Soraya",
    nim: "233140707111108",
    image: alisaImage,
  },
  {
    name: "Putri Zamzami Rizkiani",
    nim: "233140707111119",
    image: reyImage,
  },
  {
    name: "Mochammad Haykal W.Y",
    nim: "233140707111125",
    image: haikalImage,
  },
];

function App() {
  return (
    <div className=" min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <video
        src={snow}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <h1 className="text-white text-4xl font-bold mb-6 z-10">
        Kelompok 4 - Kelas T4J
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 z-10">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-gray-200 z-10"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-100 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {profile.name}
              </h2>
              <p className="text-gray-600">{profile.nim}</p>
              <div className="mt-4 flex space-x-4 justify-center">
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="text-pink-500 hover:text-pink-700" />
                </a>
                <a href="#" aria-label="Github">
                  <FaGithub className="text-gray-800 hover:text-black" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin className="text-blue-700 hover:text-blue-900" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
