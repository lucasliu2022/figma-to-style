import { useAtom, useAtomValue } from "jotai";
import { useMemo } from "react";
import { compAtom, currentSelectedElement, mediapointAtom } from "./atoms";

export default function PropertyPanel() {
  const currentSelected = useAtomValue(currentSelectedElement);
  const [page, dispatch] = useAtom(compAtom);
  const mediapoint = useAtomValue(mediapointAtom);

  const code = useMemo(() => {
    return currentSelected;
  }, [currentSelected, page]);

  return (
    <div className="basis-50">
      <MediaQueryTabs />
      <CSSProperty
        code={code?.[mediapoint]}
        onChange={(code: string) => {
          dispatch({
            type: "updateStyle",
            payload: {
              code: code,
              mediapoint,
              id: currentSelected?.id,
            },
          });
        }}
      />
      <Content />
    </div>
  );
}

function Content() {
  const [page, dispatch] = useAtom(compAtom);
  const selected = useAtomValue(currentSelectedElement);

  return (
    <div>
      <div className="my-5">Content</div>
      <textarea
        className="block h-[50px] w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        value={selected?.content || ""}
        onChange={(e) => {
          const value = e.target.value;
          dispatch({
            type: "updateContent",
            payload: {
              id: selected?.id,
              content: value,
            },
          });
        }}
      />
    </div>
  );
}

function CSSProperty({ code, onChange }: any) {
  return (
    <textarea
      className="block h-[200px] w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      value={code || ""}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
    // <Editor
    //   height="300px"
    //   language="text"
    //   theme="vs-dark"
    //   value={code}
    //   onChange={onChange}
    // />
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
