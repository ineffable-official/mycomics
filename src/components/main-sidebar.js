import Link from "next/link";

export default function MainSidebar() {
  return (
    <div className="w-[350px] h-screen flex flex-col p-2">
      <Link href={"/"} className="w-full h-12 flex items-center hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-all duration-100 ease-in-out text-gray-300">
        <div className="w-12 h-12 flex items-center justify-center">
          <i className="fa-light fa-house"></i>
        </div>
        <span className="mx-2">Home</span>
      </Link>
      <Link href={"/"} className="w-full h-12 flex items-center hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-all duration-100 ease-in-out text-gray-300">
        <div className="w-12 h-12 flex items-center justify-center">
          <i className="fa-light fa-fire"></i>
        </div>
        <span className="mx-2">Trendings</span>
      </Link>
      <Link href={"/"} className="w-full h-12 flex items-center hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-all duration-100 ease-in-out text-gray-300">
        <div className="w-12 h-12 flex items-center justify-center">
          <i className="fa-light fa-search"></i>
        </div>
        <span className="mx-2">Search</span>
      </Link>
      <Link href={"/"} className="w-full h-12 flex items-center hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-all duration-100 ease-in-out text-gray-300">
        <div className="w-12 h-12 flex items-center justify-center">
          <i className="fa-light fa-info-circle"></i>
        </div>
        <span className="mx-2">About</span>
      </Link>
    </div>
  );
}
