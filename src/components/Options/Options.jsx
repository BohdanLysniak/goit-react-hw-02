export default function Options({
  onResetFeedback,
  totalFeedback,
  onUpdateFeedback
}) {
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
      {totalFeedback > 0 && (
        <button onClick={() => onResetFeedback()} type="button">
          Reset
        </button>
      )}
    </>
  );
}
