import { useAtom } from "jotai";
import { IElement, compAtom } from "./atoms";

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

function Box(props: IElement) {
  return (
    <div>
      <div>{props.content}</div>
      {props?.children?.map((i: IElement) => {
        return <Box key={i.id} {...i} />;
      })}
    </div>
  );
}
