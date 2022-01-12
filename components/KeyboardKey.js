import { BackspaceIcon } from "@heroicons/react/outline";
import React, { useContext } from "react";
import { GameContext } from "./GameContext";

export default function Key({ keyName, clickHandler }) {
  const game = useContext(GameContext);

  let color = "bg-gray-200";

  if (game.correct.includes(keyName)) {
    color = "bg-correct";
  } else if (game.present.includes(keyName)) {
    color = "bg-present";
  } else if (game.tried.includes(keyName)) {
    color = "bg-absent";
  }

  let el = keyName;
  if (keyName == "backspace") {
    el = <BackspaceIcon className="h-6 w-6 ml-1" />;
  }

  let label = keyName;
  if (keyName == "backspace") {
    label = "borrar letra";
  } else if (keyName == "enter") {
    label = "procesar palabra";
  }

  return (
    <button
      className={`flex-1 rounded uppercase font-bold p-1 sm:p-2 h-16 text-xs tiny:text-base ${color}`}
      onClick={() => {
        clickHandler ? clickHandler(keyName) : null;
      }}
      aria-label={label}
    >
      {el}
    </button>
  );
}
