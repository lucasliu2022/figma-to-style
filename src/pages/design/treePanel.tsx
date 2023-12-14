import { useAtom } from "jotai";
import { compAtom, currentSelectedElementId } from "./atoms";
import { useState } from "react";

export default function TreePanel() {
  const [page] = useAtom(compAtom);
  return (
    <div className="h-full basis-1/5 overflow-auto">
      <TreeItem {...page} />
    </div>
  );
}

function TreeItem(comp: any) {
  const [page, dispatch] = useAtom(compAtom);
  const [coll, setColl] = useState(false);
  const [selected, setSelected] = useAtom(currentSelectedElementId);

  return (
    <div className="">
      <div
        className={`bg-white-500 flex select-none items-center rounded-sm p-2 text-blue-600 hover:bg-blue-100 hover:text-blue-600 ${
          selected === comp.id ? "bg-blue-600 text-white" : ""
        }`}
        onClick={() => {
          setColl(!coll);
          setSelected(comp.id);
        }}
      >
        <div className="flex-1">{comp.name}</div>
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({
              type: "createPage",
              payload: comp.id,
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </div>
      </div>
      {coll ? null : (
        <div className="pl-2">
          {comp?.children?.map((item: any) => {
            return <TreeItem {...item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
}
