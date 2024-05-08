export default function Options({ onUpdateFeedback }) {
  return (
    <>
      <button onClick={() => onUpdateFeedback("good")} type="button">
        Good
      </button>
      <button onClick={() => onUpdateFeedback("neutral")} type="button">
        Neutral
      </button>
      <button onClick={() => onUpdateFeedback("bad")} type="button">
        Bad
      </button>
      <button onClick={() => console.log()} type="button">
        Reset
      </button>
    </>
  );
}
