import { useAtom } from "jotai";
import { IElement, compAtom } from "./atoms";
import { useEffect } from "react";
import postcss from "postcss";
import { css2js, handleCss } from "@/utils/handleCss";

export default function Panel() {
  const [page, dispatch] = useAtom(compAtom);
  return (
    <div className="white flex-1">
      <div
        style={{
          all: "initial",
        }}
      >
        <Box {...page} />
      </div>
    </div>
  );
}

function Box(props: IElement) {
  const s = props.lg;

  const cssObject = css2js(s || "");

  return (
    <div style={cssObject as any}>
      <div>{props.content}</div>
      {props?.children?.map((i: IElement) => {
        return <Box key={i.id} {...i} />;
      })}
    </div>
  );
}
