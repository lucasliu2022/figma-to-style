import postcss from "postcss";

function genFullCss(value: string) {
  return "{" + value + "}";
}

export function cssParse(value: string) {
  const root = postcss.parse(value);
  root.walkComments((comment) => {
    comment.remove();
  });
  root.walkDecls((decl) => {
    decl.prop = transformProp(decl.prop);
    if (isNaN(Number(decl.value))) {
      decl.value = transformColor(decl.value);
      decl.value = "'" + decl.value + "'";
    }
  });
  return root;
}

function transformColor(s: string) {
  if (!s.includes("var")) {
    return s;
  }

  const s$1 = s.replaceAll("var(", "");
  const s$2 = s.replaceAll(")", "");
  const s$3 = s$2.split(",")[0];
  const s$4 = s$3.split("-").filter((s) => Boolean(s));
  const len = s$4.length;
  const s$5 = [s$4[len - 4], s$4[len - 2], s$4[len - 1]].join("-");
  return `var(--${s$5})`;
}

export function handleCss(value: string) {
  const s = genFullCss(value);
  const obj = cssParse(s);
  const str = obj.toResult();
  return replaceChar(str.css);
}

function replaceChar(s: string) {
  return s.replaceAll(";", ",");
}

function transformProp(str: string) {
  const re = /-(\w)/g;
  return str.replace(re, function ($0, $1) {
    return $1.toUpperCase();
  });
}
