export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-4 bg-[#636b2f] shadow-md">

      <h1 className="text-2xl font-bold text-[#d4de95]">
        MedAI Scanner
      </h1>

      <div className="flex gap-8 text-[#d4de95] font-medium">
        <button className="hover:text-white transition">Home</button>
        <button className="hover:text-white transition">How it Works</button>
        <button className="hover:text-white transition">About</button>
      </div>

    </nav>
  );
}