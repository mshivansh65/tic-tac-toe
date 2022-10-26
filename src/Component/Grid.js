import Field from "./Field";
export default function (props) {
  const { gameMatrix } = props;
  return (
    <div className="play-grid">
      <div className="row top">
        <Field
          id={0}
          onClick={props.onClickHander}
          applyClass="row-item top side-left"
          gameMatrix={gameMatrix}
        />
        <Field
          gameMatrix={gameMatrix}
          id={1}
          onClick={props.onClickHander}
          applyClass="row-item top "
        />

        <Field
          gameMatrix={gameMatrix}
          id={2}
          onClick={props.onClickHander}
          applyClass="row-item top side-right "
        />
      </div>
      <div className="row">
        <Field
          gameMatrix={gameMatrix}
          id={3}
          onClick={props.onClickHander}
          applyClass=" row-item side-left "
        />
        <Field
          gameMatrix={gameMatrix}
          id={4}
          onClick={props.onClickHander}
          applyClass="row-item"
        />
        <Field
          gameMatrix={gameMatrix}
          id={5}
          onClick={props.onClickHander}
          applyClass=" row-item side-right "
        />
      </div>
      <div className="row">
        <Field
          gameMatrix={gameMatrix}
          id={6}
          onClick={props.onClickHander}
          applyClass=" row-item bottom side-left "
        />
        <Field
          gameMatrix={gameMatrix}
          id={7}
          onClick={props.onClickHander}
          applyClass=" row-item bottom"
        />
        <Field
          gameMatrix={gameMatrix}
          id={8}
          onClick={props.onClickHander}
          applyClass=" row-item bottom side-right "
        />
      </div>
    </div>
  );
}
