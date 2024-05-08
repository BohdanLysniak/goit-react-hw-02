import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

function App() {
  const [response, setResponse] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

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
      <Feedback response={response} />
    </>
  );
}

export default App;
