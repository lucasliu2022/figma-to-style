import { useAtom } from "jotai";
import { compAtom } from "./atoms";

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

function Box(props: any) {
  return (
    <div>
      {props?.children?.map((i) => {
        return <Box key={i.key} {...i} />;
      })}
    </div>
  );
}
