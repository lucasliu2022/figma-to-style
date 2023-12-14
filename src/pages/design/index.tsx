import { useAtomValue } from "jotai";
import PropertyPanel from "./PropertyPanel";
import Panel from "./panel";
import TreePanel from "./treePanel";
import { compAtom } from "./atoms";

export default function Design() {
  const page = useAtomValue(compAtom);
  console.log("page", page);
  return (
    <main className="flex h-screen items-start">
      <TreePanel />
      <Panel />
      <PropertyPanel />
    </main>
  );
}
