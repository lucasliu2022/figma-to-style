import { useState } from "react";

export default function Home() {
  const [source, setSource] =
    useState(`color: var(--light-neutral-color-text-text-1, #262933);

  /* Web/SL/600/H5 24px */
  font-family: Gate Sans 2.0;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;`);

  console.log(source);

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
      <div className="flex-1">
        <textarea
          className="min-h-screen w-full border-2 p-2"
          value={result}
          readOnly
        />
      </div>
    </main>
  );
}
