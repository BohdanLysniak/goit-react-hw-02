import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const [response, setResponse] = useState(() => {
    const storageFeedback = localStorage.getItem("feedback");
    if (storageFeedback !== null) {
      return JSON.parse(storageFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  const resetFeedback = () => {
    setResponse({ good: 0, bad: 0, neutral: 0 });
  };

  const totalFeedback = response.good + response.neutral + response.bad;

  const positiveFeedback = Math.round(
    (response.good / (totalFeedback - response.neutral)) * 100
  );

  const updateFeedback = feedbackType => {
    setResponse({
      ...response,
      [feedbackType]: response[feedbackType] + 1
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(response));
  }, [response]);

  return (
    <>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onResetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback response={response} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
