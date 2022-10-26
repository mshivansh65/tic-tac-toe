// props.onClickHander
// gameMatrix={gameMatrix}
export default function (props) {
  let content = null;
  if (props.gameMatrix[props.id] !== 0) {
    content = props.gameMatrix[props.id];
  }
  return (
    <div
      id={props.id}
      onClick={() => {
        props.onClick(props.id);
      }}
      className={`${props.applyClass} ${content === "X" ? "red" : "yellow"}`}
    >
      {content}
    </div>
  );
}
