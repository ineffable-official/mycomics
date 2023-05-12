import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-16 px-16 flex flex-wrap items-center">
      <Link href={"/"}>MYCOMICS</Link>
      <form className="mx-auto">
        <div className="flex">
          <input
            type="search"
            name="s"
            id="search"
            className="w-[25vw] h-10 bg-[rgba(255,255,255,0.1)] px-4 text-sm outline-none rounded-l-lg"
            placeholder="Search manga by name, genre, tags, and others"
          />
          <button className="w-10 h-10 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.25)] flex items-center justify-center rounded-r-lg">
            <i className="fa-light fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
