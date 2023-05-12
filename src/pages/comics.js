import ChapterList from "@/components/chapter-list";
import ComicsLayout from "@/layouts/comics-layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function Comics() {
  const [comic, setComic] = useState([]);
  const router = useRouter();

  const getComic = useCallback(() => {
    if (!router.query.cs) {
      return;
    }
    axios
      .get(
        process.env.NEXT_PUBLIC_API_URL + `/api/comics?slug=${router.query.cs}`
      )
      .then((res) => setComic(res.data.data))
      .catch((err) => {
        throw err;
      });
  }, [router]);

  const formatStatus = (status) => {
    if (status === 0) {
      return "Upcoming";
    } else if (status === 1) {
      return "On Going";
    } else if (status === 2) {
      return "Hiatus";
    } else if (status === 3) {
      return "Finished";
    }
  };

  useEffect(() => {
    getComic();
  }, [getComic]);

  return (
    <ComicsLayout>
      {comic
        ? comic.map((c) => (
            <div
              className="w-[60vw] h-fit p-8 shadow-sm bg-[rgba(255,255,255,0.05)] rounded-lg"
              key={c.id}
            >
              <div className="flex gap-8 pb-8">
                <div className="w-auto">
                  <picture>
                    <img src={c.images} alt="" />
                  </picture>
                </div>
                <div className="w-auto">
                  <div className="w-[25vw] grid grid-cols-12 mb-4 gap-4">
                    <div className="col-span-4 h-auto">Title</div>
                    <div className="col-span-8 h-auto">{c.title}</div>
                  </div>
                  <div className="w-[25vw] grid grid-cols-12 mb-4 gap-4">
                    <div className="col-span-4 h-auto">Alternative Title</div>
                    <div className="col-span-8 h-auto">{c.alt_title}</div>
                  </div>
                  <div className="w-[25vw] grid grid-cols-12 mb-4 gap-4">
                    <div className="col-span-4 h-auto">Author</div>
                    <div className="col-span-8 h-auto">{c.author}</div>
                  </div>
                  <div className="w-[25vw] grid grid-cols-12 mb-4 gap-4">
                    <div className="col-span-4 h-auto">Artist</div>
                    <div className="col-span-8 h-auto">{c.artist}</div>
                  </div>
                  <div className="w-[25vw] grid grid-cols-12 mb-4 gap-4">
                    <div className="col-span-4 h-auto">Genres</div>
                    <div className="col-span-8 h-auto flex flex-wrap gap-2">
                      {c.genres.map((g) => (
                        <div className="w-fit py-1 px-2 bg-[rgba(255,255,255,0.1)] rounded-xl hover:bg-[rgba(255,255,255,0.2)] transition-all duration-100 ease-in-out cursor-pointer">
                          {g.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-[25vw] grid grid-cols-12 mb-4 gap-4">
                    <div className="col-span-4 h-auto">Language</div>
                    <div className="col-span-8 h-auto">{c.lang}</div>
                  </div>
                  <div className="w-[25vw] grid grid-cols-12 mb-4 gap-4">
                    <div className="col-span-4 h-auto">Original Language</div>
                    <div className="col-span-8 h-auto">{c.ori_lang}</div>
                  </div>
                  <div className="w-[25vw] grid grid-cols-12 mb-4 gap-4">
                    <div className="col-span-4 h-auto">Status</div>
                    <div className="col-span-8 h-auto">
                      {formatStatus(c.status)}
                    </div>
                  </div>
                </div>
              </div>
              <ChapterList comicId={c.id} />
            </div>
          ))
        : ""}
    </ComicsLayout>
  );
}
