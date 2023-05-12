import ImageLoad from "@/components/image-load";
import ReaderLayout from "@/layouts/reader-layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";

export default function Read() {
  const [chapter, setChapter] = useState([]);
  const [loadNum, setLoadNum] = useState(3);
  const router = useRouter();

  const getChapter = useCallback(() => {
    if (!router.query.c) {
      return;
    }
    setChapter([]);
    axios
      .get(
        process.env.NEXT_PUBLIC_API_URL + `/api/chapters?id=${router.query.c}`
      )
      .then((res) => setChapter(res.data.data))
      .catch((err) => {
        throw err;
      });
  }, [router]);

  useEffect(() => {
    getChapter();
  }, [getChapter]);

  return (
    <ReaderLayout>
      <div className="w-full h-screen flex justify-center overflow-y-scroll pb-32">
        <div className="w-full h-fit flex flex-col lg:px-64 md:px-32">
          <div className="w-full text-center font-semibold text-2xl py-8 px-2">
            {chapter ? (chapter.comic ? chapter.comic.title + ` Chapter ${chapter.chap_num}` : "") : ""}
          </div>
          {chapter
            ? chapter.images_list
              ? chapter.images_list.map((img, index) => (
                  <ImageLoad url={img} key={index} />
                ))
              : ""
            : ""}
        </div>
        <div className="absolute p-2 bg-[rgba(0,0,0,0.75)] rounded-xl bottom-8 left-1/2 flex -translate-x-1/2">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-all duration-100 ease-in-out"
            onClick={(e) => getChapter()}
          >
            <i className="fa-light fa-rotate-right"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-all duration-100 ease-in-out">
            <i className="fa-light fa-arrow-left"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-all duration-100 ease-in-out">
            <i className="fa-light fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </ReaderLayout>
  );
}
