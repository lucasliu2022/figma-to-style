import Editor from "@monaco-editor/react";
import { useAtom, useAtomValue } from "jotai";
import { useMemo } from "react";
import {
  compAtom,
  currentSelectedElement,
  currentSelectedElementId,
  mediapointAtom,
} from ".";

export default function PropertyPanel() {
  const currentSelected = useAtomValue(currentSelectedElement);
  const [page, dispatch] = useAtom(compAtom);

  const code = useMemo(() => {
    return currentSelected;
  }, [currentSelected, page]);

  return (
    <div className="basis-1/5">
      <MediaQueryTabs />
      <CSSProperty
        code={code}
        onChange={(code: string) => {
          console.log(code, "code");
        }}
      />
    </div>
  );
}

function CSSProperty({ code, onChange }: any) {
  return (
    <Editor
      height="300px"
      language="text"
      theme="vs-dark"
      value={code}
      onChange={onChange}
    />
  );
}

function MediaQueryTabs() {
  const options = ["xs", "sm", "md", "lg", "xl"];
  const [selected, setSelected] = useAtom(mediapointAtom);
  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul
        className="-mb-px flex flex-wrap text-center text-sm font-medium"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        {options.map((o) => {
          return (
            <li className="me-2" role="presentation" key={o}>
              <button
                className={`inline-block rounded-t-lg border-b-2 p-4 ${
                  selected === o
                    ? "border-blue-600 text-blue-600"
                    : "hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
                type="button"
                onClick={() => setSelected(o)}
              >
                {o}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
