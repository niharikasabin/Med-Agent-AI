"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  bodyPart: string;
  onClose: () => void;
}

export default function UploadModal({ bodyPart, onClose }: Props) {

  const [checked, setChecked] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#d4de95] p-8 rounded-3xl w-96 shadow-2xl"
      >

        <h2 className="text-2xl font-bold mb-4 text-[#3d4127]">
          Upload {bodyPart} Image
        </h2>

        <input type="file" className="mb-4 w-full" />

        <div className="flex items-start gap-2 mb-4">

          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />

          <p className="text-sm text-[#3d4127]">
            This is an AI research tool and not a substitute for professional medical advice.
          </p>

        </div>

        <button
          disabled={!checked}
          className={`w-full py-3 rounded-xl text-white font-semibold transition ${
            checked ? "bg-[#636b2f] hover:bg-[#3d4127]" : "bg-gray-400"
          }`}
        >
          Analyze Image
        </button>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-[#3d4127]"
        >
          Cancel
        </button>

      </motion.div>

    </div>
  );
}