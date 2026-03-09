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

      {/* HERO */}

      <section className="flex flex-col items-center text-center py-28 px-6">

        <h1 className="text-5xl font-bold text-[#3d4127] max-w-3xl leading-tight">

          AI Assisted Radiology Screening

        </h1>

        <p className="mt-6 text-lg max-w-2xl opacity-90">

          Upload radiology images and allow our multi-agent AI system
          to analyze potential abnormalities.

        </p>

        <button className="mt-10 px-10 py-4 bg-[#636b2f] text-[#d4de95] rounded-xl border-2 border-[#3d4127] shadow-lg hover:scale-105">

          Start Screening

        </button>

      </section>

      {/* BODY AREA SELECTOR */}

      <section className="px-10 pb-24">

        <h2 className="text-3xl font-semibold text-center mb-14">

          Select Body Area

        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {bodyParts.map(({ name, icon: Icon }) => (

            <div
              key={name}
              onClick={() => setSelectedPart(name)}
              className="bg-[#d4de95] border-2 border-[#636b2f] rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col items-center"
            >

              <Icon
                size={45}
                className="text-[#636b2f] mb-4"
              />

              <h3 className="text-lg font-semibold">
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