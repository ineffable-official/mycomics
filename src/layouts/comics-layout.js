import MainSidebar from "@/components/main-sidebar";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function ComicsLayout({ children }) {
  return (
    <div
      className="w-full h-screen overflow-hidden bg-[#202020] text-white text-sm"
      style={poppins.style}
    >
      <Navbar />
      <div className="w-full h-screen flex justify-center overflow-y-scroll py-32">{children}</div>
    </div>
  );
}
