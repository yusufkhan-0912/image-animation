import React, { useState } from "react";
// import Button from "./Button";

let App = () => {
  let [message, setMessage] = useState([false, false, false, false, false]);

  let buttonClicked = (index) => {
    let updateMessage = message.map((message, i) =>
      i === index ? !message : false
    );
    setMessage(updateMessage);
  };

  let Text = [
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
      {message.map((message, index) => {
        return (
          <button
            key={index}
            className={`btn${index + 1}`}
            onClick={() => {
              buttonClicked(index);
            }}
          >
            +{message && <p>{Text[index]}</p>}
          </button>
        );
      })}
    </>
  );
};

export default App;
