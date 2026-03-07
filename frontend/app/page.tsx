"use client";
import { useState } from "react";
import UploadModal from "@/components/UploadModal";
import Navbar from "@/components/Navbar";

export default function Home() {

  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">

      <h1 className="text-4xl font-bold text-gray-800 text-center">
        AI-Powered Medical Image Screening
      </h1>

      <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
        A multi-agent AI research tool for screening radiology images.
      </p>

      {/* Disease Navigator Grid */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

        {["Brain", "Spine", "Chest", "Bone"].map((part) => (
          <div
            key={part}
            onClick={() => setSelectedPart(part)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer text-center"
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {part}
            </h2>
          </div>
        ))}

      </div>

      {/* Upload Modal */}
      {selectedPart && (
        <UploadModal
          bodyPart={selectedPart}
          onClose={() => setSelectedPart(null)}
        />
      )}

    </main>
  );
}