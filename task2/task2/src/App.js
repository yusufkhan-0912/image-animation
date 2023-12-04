import React, { useState } from "react";
// import Button from "./Button";

let App = () => {
  let [message, setMessage] = useState(false);
  let [messaget, setMessaget] = useState(false);
  let [messageThree, setMessageThree] = useState(false);
  let [messageFour, setMessageFour] = useState(false);
  let [messageFive, setMessageFive] = useState(false);

  let onclick = () => {
    setMessage(!message);
    setMessaget(false);
    setMessageThree(false);
    setMessageFour(false);
    setMessageFive(false);
  };

  let clickT = () => {
    setMessaget(!messaget);
    setMessage(false);
    setMessageThree(false);
    setMessageFour(false);
    setMessageFive(false);
  };
  let ClickThree = () => {
    setMessageThree(!messageThree);
    setMessage(false);
    setMessaget(false);
    setMessageFour(false);
    setMessageFive(false);
  };

  let clickFour = () => {
    setMessageFour(!messageFour);
    setMessage(false);
    setMessaget(false);
    setMessageThree(false);
    setMessageFive(false);
  };
  let clickFive = () => {
    setMessageFive(!messageFive);
    setMessage(false);
    setMessaget(false);
    setMessageThree(false);
    setMessageFour(false);
  };

  return (
    <>
      <img src="/pic.png" alt="img" />

      <button className="btn1" onClick={onclick}>
        +{message && <p>This is tower</p>}
      </button>

      <button className="btn2" onClick={clickT}>
        + {messaget && <p>The top house</p>}
      </button>
      <button className="btn3" onClick={ClickThree}>
        + {messageThree && <p>The Bubble house </p>}
      </button>
      <button className="btn4" onClick={clickFour}>
        + {messageFour && <p>The Hell Road</p>}
      </button>
      <button className="btn5" onClick={clickFive}>
        + {messageFive && <p>Click to get the full View</p>}
      </button>
    </>
  );
};

export default App;
