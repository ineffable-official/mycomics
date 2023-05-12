import Card from "@/components/card";
import MainLayout from "@/layouts/main-layout";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [comics, setComics] = useState([]);

  const getComics = useCallback(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/comics")
      .then((res) => setComics(res.data.data))
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    getComics();
  }, [getComics]);

  return (
    <MainLayout>
      <div className="w-full px-8">
        <div className="font-medium">Latest Updated</div>
        <div className="w-full gap-4 flex my-4 overflow-x-scroll pb-4">
          {comics ? comics.map((s) => <Card data={s} key={s.id} />) : ""}
        </div>
        <div className="font-medium">Trendings</div>
        {/* <div className="w-full gap-4 flex my-4 overflow-x-scroll pb-4">
          {comics ? comics.map((s) => <Card data={s} key={s.id} />) : ""}
        </div>
        <div className="font-medium">Hots</div>
        <div className="w-full gap-4 flex my-4 overflow-x-scroll pb-4">
          {comics ? comics.map((s) => <Card data={s} key={s.id} />) : ""}
        </div> */}
      </div>
    </MainLayout>
  );
}
