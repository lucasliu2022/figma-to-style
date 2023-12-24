import { useAtomValue } from "jotai";
import PropertyPanel from "./PropertyPanel";
import Panel from "./panel";
import TreePanel from "./treePanel";
import { compAtom } from "./atoms";

export default function Design() {
  const page = useAtomValue(compAtom);
  console.log("page", page);
  return (
    <main className="h-screen relative">
      <div className="h-[50%]">
        <Panel />
      </div>
      <div className="flex justify-between">
        <TreePanel />
        <PropertyPanel />
      </div>
    </main>
  );
}
