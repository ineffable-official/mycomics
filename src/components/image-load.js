import { useState } from "react";

export default function ImageLoad({ url }) {
  const [error, setError] = useState(false);
  return (
    <div className="w-full h-auto">
      {!error ? (
        <picture>
          <img
            src={url}
            alt=""
            onError={(e) => {
              setError(true);
            }}
            className="w-full h-auto"
          />
        </picture>
      ) : (
        <div
          className="w-full h-[300px] flex items-center justify-center"
          onClick={(e) => setError(false)}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <i className="fa-light fa-rotate-right"></i>
          </div>
        </div>
      )}
    </div>
  );
}
