import { atomWithReducer } from "jotai/utils";
import { atom } from "jotai";

const uuid = () => {
  return Date.now().toString(32) + Math.random().toString(16);
};
function traverse(comp: any, id: any, type: String) {
  if (comp.id !== id) {
    return {
      ...comp,
      children: comp?.children?.map((item: any) => traverse(item, id, type)),
    };
  }
  if (type === "createPage") {
    const children = comp?.children || [];
    return {
      ...comp,
      children: [{ id: uuid(), name: "Untitle" }, ...children],
    };
  } else {
    return comp;
  }
}
const compReducer = (prev: any, action: any) => {
  console.log(action);
  if (action.type === "createPage") {
    const id = action.payload;
    return traverse(prev, id, "createPage");
  }
  return prev;
};

export const compAtom = atomWithReducer(
  {
    id: uuid(),
    name: "root",
    children: [],
  },
  compReducer,
);

export const mediapointAtom = atom("xs");

export const currentSelectedElementId = atom<string | null>(null);

export const currentSelectedElement = atom((get) => {
  const currentId = get(currentSelectedElementId);
  if (!currentId) return null;
  const page = get(compAtom);

  function findById(page: any, id: string) {
    if (page.id === id) {
      return page;
    }
    const p = page.children
      .map((child: any) => findById(child, id))
      .filter((i: any) => i);
    if (p.length) {
      return p[0];
    }
    return false;
  }

  const ele = findById(page, currentId);
  return ele;
});
