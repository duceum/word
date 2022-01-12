import React, { useContext } from "react";
import { toast } from "react-toastify";
import { GameContext } from "./GameContext";

export default function Letter({ letter, state }) {
  const game = useContext(GameContext);

  if (state && state != "-") {
    let color = "bg-absent";
    let msg = "La letra " + letter.toUpperCase() + " no está en la palabra.";

    if (state == "c") {
      color = "bg-correct";
      msg =
        "La letra " + letter.toUpperCase() + " está en la posicion correcta";
    } else if (state == "p") {
      color = "bg-present";
      msg =
        "La letra " +
        letter.toUpperCase() +
        " está en la palabra (posición incorrecta)";
    }

    return (
      <div
        className={`tile inline-flex w-full text-2xl tiny:text-4xl uppercase font-bold select-none text-white ${color} `}
        onClick={() => {
          if (game.accessibilityMode) {
            toast(msg);
          }
        }}
      >
        {letter}
      </div>
    );
  }

  if (letter === undefined || letter === "") {
    return (
      <div
        className={`tile inline-flex w-full text-2xl tiny:text-4xl uppercase font-bold select-none border-2 border-neutral-300 dark:border-neutral-700`}
      >
        {letter}
      </div>
    );
  } else if (letter) {
    return (
      <div
        className={`tile inline-flex w-full text-2xl tiny:text-4xl uppercase font-bold select-none border-2 border-neutral-500 dark:border-neutral-700 dark:bg-neutral-700`}
      >
        {letter}
      </div>
    );
  }
}
