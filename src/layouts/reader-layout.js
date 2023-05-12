import MainSidebar from "@/components/main-sidebar";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function ReaderLayout({ children }) {
  return (
    <div
      className="w-full h-screen overflow-hidden bg-[#202020] text-white text-sm"
      style={poppins.style}
    >
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}
