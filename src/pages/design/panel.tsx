import { useAtom } from "jotai";
import { IElement, compAtom } from "./atoms";
import { useEffect, useState } from "react";
import postcss from "postcss";
import { css2js, getRandomClassName, handleCss } from "@/utils/handleCss";

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

export function generateMediaQueryString(s: any, className: String) {
  const keys = ["xs", "sm", "md", "lg", "xl"];
  const pxMap: any = {
    xs: "375",
    sm: "768",
    md: "992",
    lg: "1248",
    xl: "1920",
  };
  const ss = keys.map((k: any) => {
    if (!s[k]) return "";
    return `@media (min-width: ${pxMap[k]}px) {
      .${className} {
        ${s[k] || ""}
      }
    } `;
  });
  return ss.join("");
}

function Box(props: IElement) {
  return (
    <>
      <style>{generateMediaQueryString(props, props.content || "")}</style>
      <div className={props.content}>
        <div>{props.content}</div>
        {props?.children?.map((i: IElement) => {
          return <Box key={i.id} {...i} />;
        })}
      </div>
    </>
  );
}
