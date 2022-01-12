import { CogIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";
import React, { useContext, useState } from "react";
import { GameContext } from "../components/GameContext";
import GameGrid from "../components/GridGame";
import InfoModal from "../components/InfoModal";
import Keyboard from "../components/Keyboard";
import Settings from "../components/Settings";

export default function Index({}) {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const game = useContext(GameContext);

  // Link sibling components
  let receiver = (keyName) => {};

  const trigger = (keyName) => {
    receiver && receiver(keyName);
  };

  const receiverCreator = (handler) => {
    receiver = handler;
  };

  return (
    <div
      className={`${game.darkMode ? "dark" : ""} ${
        game.colorBlind ? "colorblind" : ""
      }`}
    >
      <div className="dark:bg-dark dark:text-neutral-100">
        {showHelpModal || game.gameStatus == "NEW" ? (
          <InfoModal
            closeModal={() => {
              setShowHelpModal(false);
              if (game.gameStatus == "NEW") {
                game.setGameStatus("PLAYING");
                game.saveGame();
              }
            }}
          />
        ) : null}

        {showSettings ? (
          <Settings
            closeModal={() => {
              setShowSettings(false);
            }}
          />
        ) : null}

        <div className="container mx-auto flex flex-col max-w-md h-screen">
          <header className="flex flex-row max-w-lg py-2 px-3 border-b dark:border-neutral-700">
            <button
              className="my-2 flex-none"
              onClick={() => {
                setShowHelpModal(true);
              }}
              aria-label="como jugar"
            >
              <QuestionMarkCircleIcon className="h-6 w-6 text-neutral-500 dark:text-neutral-600" />
            </button>

            <div className="flex-auto text-center">
              <h1 className="uppercase font-extrabold text-3xl tracking-wider">
                Wordle (ES)
              </h1>
            </div>

            <button
              className="my-2 flex-none"
              onClick={() => {
                setShowSettings(true);
              }}
            >
              <CogIcon
                className="h-6 w-6 text-neutral-500 dark:text-neutral-600"
                aria-label="opciones del juego"
              />
            </button>
          </header>

          <GameGrid receiverCreator={receiverCreator} />
          <Keyboard clickHandler={trigger} />
        </div>
      </div>
    </div>
  );
}
