import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const [response, setResponse] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const totalFeedback = response.good + response.neutral + response.bad;

  const updateFeedback = feedbackType => {
    setResponse({
      ...response,
      [feedbackType]: response[feedbackType] + 1
    });
  };

  return (
    <>
      <Description />
      <Options onUpdateFeedback={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback response={response} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
