import moment from "moment";
import Link from "next/link";

export default function Card({ data }) {
  return (
    <div className="min-w-[275px] w-[300px] min-h-[450px] flex flex-col rounded-xl overflow-hidden relative">
      <div className="w-full h-auto">
        <picture>
          <img src={data.images} alt="" className="w-full h-full" />
        </picture>
      </div>
      <div className="w-full p-4 bg-gradient-to-b from-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.75)] absolute bottom-0">
        <Link href={`/comics?cs=${data.slug}`} className="text-lg font-medium">
          {data.title}
        </Link>
        <div className="flex gap-2 my-4">
          {data.first_chap ? (
            <Link href={`/read?c=${data.first_chap.id}`} className="w-full h-10 bg-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.5)] transition-all duration-100 ease-in-out rounded-lg flex items-center justify-center text-xs">
              Chapter {data.first_chap.chap_num}
            </Link>
          ) : (
            ""
          )}
          {data.last_chap ? (
            <Link href={`/read?c=${data.last_chap.id}`} className="w-full h-10 bg-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.5)] transition-all duration-100 ease-in-out rounded-lg flex items-center justify-center text-xs">
              Chapter {data.last_chap.chap_num}
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="text-xs">
          {moment(data.last_chap ? data.last_chap.updated_at : "").fromNow()}
        </div>
      </div>
    </div>
  );
}
