import { atomWithReducer } from "jotai/utils";
import { atom } from "jotai";

const uuid = () => {
  return Date.now().toString() + "-" + Math.random().toString();
};
function traverse(
  comp: any,
  id: any,
  type: String,
  callback?: (item: IElement) => IElement,
): IElement {
  if (type === "createPage") {
    if (comp.id !== id) {
      return {
        ...comp,
        children: comp?.children?.map((item: any) => traverse(item, id, type)),
      };
    }
    const children = comp?.children || [];
    return {
      ...comp,
      children: [{ id: uuid(), name: "Untitle" }, ...children],
    };
  }
  if (type === "updateStyle") {
    if (comp.id !== id) {
      return {
        ...comp,
        children: comp?.children?.map((item: any) =>
          traverse(item, id, type, callback),
        ),
      };
    }
    const children = comp?.children || [];
    return {
      ...comp,
      ...callback?.(comp),
      children: children,
    };
  }
  if (type === "updateContent") {
    if (comp.id !== id) {
      return {
        ...comp,
        children: comp?.children?.map((item: any) =>
          traverse(item, id, type, callback),
        ),
      };
    }
    const children = comp?.children || [];
    return {
      ...comp,
      ...callback?.(comp),
      children: children,
    };
  } else {
    return comp;
  }
}
const compReducer = (
  prev: IElement,
  action?: { type: string; payload: any },
) => {
  console.log(action);
  if (action?.type === "createPage") {
    const id = action.payload;
    return traverse(prev, id, "createPage");
  }
  if (action?.type === "updateStyle") {
    const id = action.payload.id;
    const mediapoint = action.payload.mediapoint;
    return traverse(prev, id, "updateStyle", (item: any) => {
      return {
        ...item,
        [mediapoint]: action.payload.code,
      };
    });
  }
  if (action?.type === "updateContent") {
    const id = action.payload.id;
    return traverse(prev, id, "updateContent", (item: IElement) => {
      console.log("selected", item, action.payload.content);
      return {
        ...item,
        content: action.payload.content,
      };
    });
  }
  return prev;
};

export interface IElement {
  id: string;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  content?: string;
  name: string;
  children?: Array<IElement>;
}

export const compAtom = atomWithReducer<IElement, any>(
  {
    id: uuid(),
    name: "root",
    children: [],
  },
  compReducer,
);

export const mediapointAtom = atom<"xs" | "sm" | "md" | "lg" | "xl">("xs");

export const currentSelectedElementId = atom<string | null>(null);

export const currentSelectedElement = atom<IElement | undefined>((get) => {
  const currentId = get(currentSelectedElementId);
  if (!currentId) return null;
  const page = get(compAtom);

  function findById(page: any, id: string) {
    if (page.id === id) {
      return page;
    }
    const p = page.children
      ?.map((child: any) => findById(child, id))
      .filter((i: any) => i);
    if (p?.length) {
      return p[0];
    }
    return false;
  }

  const ele = findById(page, currentId);
  return ele;
});
