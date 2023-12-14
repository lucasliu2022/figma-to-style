import PropertyPanel from "./PropertyPanel";
import Panel from "./panel";
import TreePanel from "./treePanel";
import { atomWithReducer } from "jotai/utils";

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

export default function Design() {
  return (
    <main className="flex h-screen items-start">
      <TreePanel />
      <Panel />
      <PropertyPanel />
    </main>
  );
}
