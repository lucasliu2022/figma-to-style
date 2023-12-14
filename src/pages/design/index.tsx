import PropertyPanel from "./PropertyPanel";
import Panel from "./panel";
import TreePanel from "./treePanel";

export default function Design() {
  return (
    <main className="flex h-screen items-start">
      <TreePanel />
      <Panel />
      <PropertyPanel />
    </main>
  );
}
