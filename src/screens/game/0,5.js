
// Map for (0,5)
// Goal

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TutorialMain() {
  const navigate = useNavigate();
  const styles = {
    margin: "5px",
    width: "18%"
  };

  var array = [];
  for (var i = 0; i < 25; i++) {
    array.push({id: i, toggle: false});
  }
  const [buttons, setButtons] = useState(array);
  const [message, setMessage] = useState('');

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function toggle(id) {
    setButtons(button => {
      return button.map(item => {
        return item.id === id ? {...item, toggle: !item.toggle} : item
      })
    })
  }

  async function checkPassword() {
    var flag = 1
    for (var i = 0; i < buttons.length; i++) {
      if ((i === 0 || i === 3 || i === 4 || i === 9 || i === 11) && !buttons[i].toggle) {
        flag = 0;
        break;
      } else if (buttons[i].toggle) {
        flag = 0;
        break;
      }
    }
    if (flag) {
      navigate(
        "../6cbf40494f64db7248d7d4d7737f772d6f80941cb93389b49d4321487328acb8"
      );
    } else {
      setMessage("Incorrect Password! Try Again!");
      await sleep(2000);
      setMessage("");
    }
    
  }

  function createButtons() {
    const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

    return array.map((number) => {
      return <button 
        id={number} 
        onClick={() => toggle(number)}
        style={{...styles, backgroundColor: buttons[number].toggle ? "green" : "white"}}
      >
        {number}
      </button>
    })
  }

  return (
    <div>
      <a
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          fontSize: "1.5em",
          transform: "translate(-50%, 0)",
        }}
        href="./c5620637b414f9ee28f9276290f23687047abd02696185fd4253061a16a3847c"
      >
        South
      </a>
      <a
        style={{
          position: "absolute",
          top: "50%",
          left: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}
        href="./4c6617b306ad9c78e25313ffa5ca203b97107c6afc90d6323aaa9c5b86ae2809"
      >
        West
      </a>
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          textAlign: "center",
          margin: "5px",
          border: "5px solid black",
        }}
      >
        <img src="/map/0,5.png" alt="map" height="30%" />
      </div>

      <div 
          style={{
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "black",
          }}
        >
          <p>
            You found a door leading out of the cave, but the door is locked.<br/><br/>
            There is a keypad with numbers on it as well as a message:<br/><br/>
            One bound in sorrow, another scattered to the winds, two on paths well trodden and the last hidden in a mirage</p>
          <img 
          src="/backgrounds/door.jpg" 
          alt="map"
          style={{height: "70vh", display: "absolute"}}
        />
        </div>
        <div
          style={{
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "50vh",
          }}
        >
          {createButtons()}
        </div>
        <div
          style={{
            position: "absolute", 
            top: "70%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <button onClick={() => checkPassword()}>Enter Password</button>
          <h1>{message}</h1>
        </div>

    </div>
  );
}       
            