"use client";

import { useState } from "react";

interface Props {
  bodyPart: string;
  onClose: () => void;
}

export default function UploadModal({ bodyPart, onClose }: Props) {

  const [checked, setChecked] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-8 rounded-3xl w-96 shadow-2xl">

        <h2 className="text-2xl font-bold mb-4">
          Upload {bodyPart} Image
        </h2>

        <input type="file" className="mb-4" />

        <div className="flex gap-2 mb-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />

          <p className="text-sm text-gray-600">
            This is an AI research tool, not a substitute for professional medical advice.
          </p>
        </div>

        <button
          disabled={!checked}
          className={`w-full py-3 rounded-xl text-white font-semibold ${
            checked ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
          }`}
        >
          Analyze Image
        </button>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}