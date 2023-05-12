import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function ChapterList({ comicId }) {
  const [chapters, setChapters] = useState([]);

  const getChapters = useCallback(() => {
    if (!comicId) {
      return;
    }
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + `/api/chapters?comicId=${comicId}`)
      .then((res) => setChapters(res.data.data))
      .catch((err) => {
        throw err;
      });
  }, [comicId]);

  useEffect(() => {
    getChapters();
  }, [getChapters]);

  return (
    <div className="flex flex-col bg-[rgba(0,0,0,0.05)] rounded-xl overflow-hidden">
      {chapters
        ? chapters.map((c) => (
            <Link
              href={`/read?c=${c.id}`}
              className="w-full h-12 flex items-center px-4 hover:bg-[rgba(255,255,255,0.075)]  transition-all duration-100 ease-in-out cursor-pointer"
              key={c.id}
            >
              <div className="mr-auto">Chapter {c.chap_num}</div>
              <div className="text-gray-500">
                {moment(c.updated_at).fromNow()}
              </div>
            </Link>
          ))
        : ""}
    </div>
  );
}
