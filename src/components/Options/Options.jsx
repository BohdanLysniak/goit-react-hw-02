import clsx from "clsx";
import css from "./Options.module.css";

export default function Options({
  onResetFeedback,
  totalFeedback,
  onUpdateFeedback
}) {
  return (
    <>
      <button
        className={clsx(css.button)}
        onClick={() => onUpdateFeedback("good")}
        type="button"
      >
        Good
      </button>
      <button
        className={clsx(css.button)}
        onClick={() => onUpdateFeedback("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        className={clsx(css.button)}
        onClick={() => onUpdateFeedback("bad")}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={clsx(css.button)}
          onClick={() => onResetFeedback()}
          type="button"
        >
          Reset
        </button>
      )}
    </>
  );
}
