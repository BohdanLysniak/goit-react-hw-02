export default function Feedback({
  positiveFeedback,
  response: { good, neutral, bad }
}) {
  return (
    <>
      <ul>
        <li>
          <p>Good:{good} </p>
        </li>
        <li>
          <p>Neutral:{neutral} </p>
        </li>
        <li>
          <p>Bad:{bad} </p>
        </li>
        <li>
          <p>Positive: {positiveFeedback} </p>
        </li>
      </ul>
    </>
  );
}
