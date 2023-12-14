import { handleCss } from "@/utils/handleCss";
import { useState, useEffect } from "react";
import copytoclipboard from "copy-to-clipboard";

export default function Home() {
  const [source, setSource] =
    useState(`color: var(--light-neutral-color-text-text-1, #262933);

  /* Web/SL/600/H5 24px */
  font-family: Gate Sans 2.0;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;`);

  useEffect(() => {
    setResult(handleCss(source));
  }, [source]);

  const [result, setResult] = useState("");

  return (
    <main className="mx-auto flex max-w-7xl gap-3">
      <div className="flex-1">
        <textarea
          className="min-h-screen w-full border-2 p-2"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setResult(e.target.value);
          }}
        />
      </div>
      <div className="relative flex-1">
        <textarea
          className="min-h-screen w-full border-2 p-2"
          value={result}
          readOnly
        />
        <div className="absolute right-4 top-4">
          <button
            type="button"
            onClick={() => {
              copytoclipboard(result);
            }}
            className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Copy
          </button>
        </div>
      </div>
    </main>
  );
}
