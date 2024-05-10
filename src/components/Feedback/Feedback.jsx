import clsx from "clsx";
import css from "./Feedback.module.css";

export default function Feedback({
  positiveFeedback,
  response: { good, neutral, bad }
}) {
  return (
    <>
      <ul className={clsx(css.list)}>
        <li>
          <p className={clsx(css.text)}>Good:{good} </p>
        </li>
        <li>
          <p className={clsx(css.text)}>Neutral:{neutral} </p>
        </li>
        <li>
          <p className={clsx(css.text)}>Bad:{bad} </p>
        </li>
        <li>
          <p className={clsx(css.text)}>Positive: {positiveFeedback} % </p>
        </li>
      </ul>
    </>
  );
}
