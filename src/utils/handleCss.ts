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
      decl.value = "'" + decl.value + "'";
    }
  });
  return root;
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
