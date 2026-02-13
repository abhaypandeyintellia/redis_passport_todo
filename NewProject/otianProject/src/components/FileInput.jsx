import { useRef, useState } from "react";
import Label from "./Label";

export default function FileInput({ label }) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("No file chosen");

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <div className="flex flex-col p-2">
      {label && <Label>{label}</Label>}

      <div className="flex items-center gap-4 bg-gray-100 rounded-md p-3">
        <button
          type="button"
          onClick={handleClick}
          className="
            bg-gray-400 text-white
            px-5 py-2
            rounded-md
            text-md
            hover:bg-gray-500
          "
        >
          Choose
        </button>

        <span className="text-sm text-gray-500 truncate">
          {fileName}
        </span>

        <input
          ref={inputRef}
          type="file"
          onChange={handleChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
