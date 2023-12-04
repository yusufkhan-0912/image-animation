// import React from "react";

// let Button = () => {
//   return <></>;
// };

// export default Button;
import React, { useState } from "react";

const App = () => {
  const [messages, setMessages] = useState([false, false, false, false, false]);

  const handleButtonClick = (index) => {
    const newMessages = messages.map((message, i) =>
      i === index ? !message : false
    );
    setMessages(newMessages);
  };

  const buttonLabels = [
    "This is tower",
    "The top house",
    "The Bubble house",
    "The Hell Road",
    "Click to get the full View",
  ];

  return (
    <>
      <video controls width="600" height="400" autoPlay>
        <source src="./pic.mp4" type="video/mp4" />
      </video>

      {messages.map((message, index) => (
        <button
          key={index}
          className={`btn${index + 1}`}
          onClick={() => handleButtonClick(index)}
        >
          + {message && <p>{buttonLabels[index]}</p>}
        </button>
      ))}
    </>
  );
};

export default App;
