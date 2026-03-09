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

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#d4de95] border-2 border-[#636b2f] p-8 rounded-3xl w-[420px] shadow-2xl"
      >

        <h2 className="text-2xl font-bold mb-6 text-[#3d4127] text-center">
          Upload {bodyPart} Image
        </h2>

        <input
          type="file"
          className="w-full border-2 border-[#636b2f] rounded-xl p-2 mb-6 bg-white"
        />

        <div className="flex items-start gap-2 mb-6">

          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />

          <p className="text-sm">
            This AI tool is for research purposes only and not a replacement for professional medical advice.
          </p>

        </div>

        <button
          disabled={!checked}
          className={`w-full py-3 rounded-xl font-semibold text-white shadow-md ${
            checked
              ? "bg-[#636b2f] hover:bg-[#3d4127]"
              : "bg-gray-400"
          }`}
        >
          Analyze Image
        </button>

        <button
          onClick={onClose}
          className="mt-4 text-sm w-full text-center text-[#3d4127] hover:underline"
        >
          Cancel
        </button>

      </motion.div>

    </div>
  );
}