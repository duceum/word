import React, { useContext, useState } from "react";
import Hotkeys from "react-hot-keys";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import words5 from "../lib/words5";
import WinModal from "./EndModal";
import { GameContext } from "./GameContext";
import Word from "./GridWord";

export default function WordleGrid({ receiverCreator }) {
  const [guess, setGuess] = useState("");
  const [showWinModal, setShowWinModal] = useState(true);

  const game = useContext(GameContext);

  const handleKey = (keyName) => {
    if (game.gameStatus != "WIN" && game.gameStatus != "LOSE") {
      if (game.attempts.length < 6) {
        if (keyName === "return" || keyName === "enter") {
          if (guess.length != 5) {
            toast("No hay suficientes letras para una palabra.");
          } else if (!words5.includes(guess)) {
            toast("La palabra no está en el diccionario.");
          } else {
            game.processWord(guess);
            setGuess("");
          }
        } else if (keyName === "backspace") {
          if (guess.length > 0) {
            setGuess(guess.substring(0, guess.length - 1));
          }
        } else if (guess.length < 5) {
          setGuess(guess + keyName);
        }
      }
    }
  };

  // Handle the keyboard events
  const onKeyDown = (keyName, e, handle) => {
    handleKey(keyName);
  };

  // To receive the UI keyboard clicked
  const onCountReceived = (keyName) => {
    handleKey(keyName);
  };
  receiverCreator(onCountReceived);
  // end

  let { word1, word2, word3, word4, word5, word6 } = ["", "", "", "", "", ""];

  if (game.attempts.length == 0) {
    word1 = guess;
  } else if (game.attempts.length == 1) {
    word1 = game.attempts[0];
    word2 = guess;
  } else if (game.attempts.length == 2) {
    word1 = game.attempts[0];
    word2 = game.attempts[1];
    word3 = guess;
  } else if (game.attempts.length == 3) {
    word1 = game.attempts[0];
    word2 = game.attempts[1];
    word3 = game.attempts[2];
    word4 = guess;
  } else if (game.attempts.length == 4) {
    word1 = game.attempts[0];
    word2 = game.attempts[1];
    word3 = game.attempts[2];
    word4 = game.attempts[3];
    word5 = guess;
  } else if (game.attempts.length == 5) {
    word1 = game.attempts[0];
    word2 = game.attempts[1];
    word3 = game.attempts[2];
    word4 = game.attempts[3];
    word5 = game.attempts[4];
    word6 = guess;
  } else if (game.attempts.length == 6) {
    word1 = game.attempts[0];
    word2 = game.attempts[1];
    word3 = game.attempts[2];
    word4 = game.attempts[3];
    word5 = game.attempts[4];
    word6 = game.attempts[5];
  }

  return (
    <Hotkeys
      keyName="q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,ñ,z,x,c,v,b,n,m,return,backspace"
      onKeyDown={onKeyDown.bind(this)}
      // onKeyUp={this.onKeyUp.bind(this)}
    >
      <>
        {showWinModal &&
        (game.gameStatus === "WIN" || game.gameStatus === "LOSE") ? (
          <WinModal
            matrix={game.matrix}
            closeModal={() => {
              setShowWinModal(false);
            }}
          />
        ) : null}

        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          closeButton={false}
          theme="dark"
        />

        <main className="container mx-auto my-auto max-w-xs">
          <div className="m-3  ">
            <div className="flex flex-col gap-1">
              <Word word={word1} info={game.matrix[0]} toast={toast} />
              <Word word={word2} info={game.matrix[1]} toast={toast} />
              <Word word={word3} info={game.matrix[2]} toast={toast} />
              <Word word={word4} info={game.matrix[3]} toast={toast} />
              <Word word={word5} info={game.matrix[4]} toast={toast} />
              <Word word={word6} info={game.matrix[5]} toast={toast} />
            </div>
          </div>
        </main>
      </>
    </Hotkeys>
  );
}
