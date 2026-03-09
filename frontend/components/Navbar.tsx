export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-12 py-5 bg-[#636b2f] border-b-2 border-[#3d4127] shadow-md">

      <h1 className="text-2xl font-bold text-[#d4de95] tracking-wide">
        MedAI Scanner
      </h1>

      <div className="flex gap-10 text-[#d4de95] font-medium">

        <button className="hover:text-white hover:scale-105">
          Home
        </button>

        <button className="hover:text-white hover:scale-105">
          How it Works
        </button>

        <button className="hover:text-white hover:scale-105">
          About
        </button>

      </div>

    </nav>
  );
}