"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UploadModal from "@/components/UploadModal";

import { Brain, Bone, Activity, HeartPulse } from "lucide-react";

export default function Home() {

  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const bodyParts = [
    { name: "Brain", icon: Brain },
    { name: "Spine", icon: Activity },
    { name: "Chest", icon: HeartPulse },
    { name: "Bone", icon: Bone },
  ];

  return (
    <main className="min-h-screen">

      <Navbar />

      {/* HERO SECTION */}

      <section className="flex flex-col items-center text-center py-24 px-6">

        <h1 className="text-5xl font-bold text-[#3d4127] max-w-3xl">
          AI Powered Radiology Screening Tool
        </h1>

        <p className="mt-6 text-lg text-[#3d4127] max-w-2xl">
          Upload radiology images and allow our multi-agent AI system to analyze
          possible abnormalities. Designed for research and educational use.
        </p>

        <button className="mt-8 px-8 py-4 bg-[#636b2f] text-[#d4de95] rounded-xl shadow-lg hover:scale-105 transition">

          Start Screening

        </button>

      </section>

      {/* BODY PART NAVIGATOR */}

      <section className="px-10 pb-20">

        <h2 className="text-3xl font-semibold text-center mb-12 text-[#3d4127]">
          Select Body Area
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

          {bodyParts.map(({ name, icon: Icon }) => (

            <div
              key={name}
              onClick={() => setSelectedPart(name)}
              className="bg-[#d4de95] rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer flex flex-col items-center"
            >

              <Icon size={40} className="text-[#636b2f] mb-4" />

              <h3 className="text-lg font-semibold text-[#3d4127]">
                {name}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {selectedPart && (
        <UploadModal
          bodyPart={selectedPart}
          onClose={() => setSelectedPart(null)}
        />
      )}

      <Footer />

    </main>
  );
}