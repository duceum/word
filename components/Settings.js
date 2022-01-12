import React, { useContext } from "react";
import { GameContext } from "../components/GameContext";

export default function Settings({ closeModal }) {
  const game = useContext(GameContext);

  return (
    <>
      <div className="container mx-auto max-w-lg h-screen bg-white overflow-x-hidden overflow-y-auto fixed inset-0 z-50 dark:bg-black dark:text-gray-100">
        <div className="relative mx-auto h-full">
          <div className="flex flex-col w-full h-full outline-none focus:outline-none">
            {/* header */}
            <div className="flex-initial relative m-5">
              <h3 className="flex-auto uppercase text-center text-xl font-bold">
                Opciones
              </h3>
              <button
                className="absolute top-0 right-0 p-1 ml-auto "
                onClick={() => closeModal()}
              >
                <span className="leading-[0.25] h-5 w-5 text-3xl text-gray-400 block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            {/* body */}
            <div className="flex-auto grow mx-5">
              <div className="flex py-5 border-b border-solid">
                <div className="flex flex-auto">
                  <p className="text-md">Modo oscuro</p>
                </div>
                <div className="flex-initial form-check form-switch">
                  <input
                    className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none checked:dark:bg-blue-500 cursor-pointer shadow-sm"
                    type="checkbox"
                    role="switch"
                    id="darkModeMode"
                    checked={game.darkMode}
                    onChange={() => {
                      game.setDarkMode(!game.darkMode);
                    }}
                  />
                </div>
              </div>
              <div className="flex py-5 border-b border-solid">
                <div className="flex flex-auto">
                  <p className="text-md">Modo para Daltónicos</p>
                </div>
                <div className="flex-initial form-check form-switch">
                  <input
                    className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 dark:bg-gray-700 checked:dark:bg-blue-500 focus:outline-none cursor-pointer shadow-sm"
                    type="checkbox"
                    role="switch"
                    id="colorBlindMode"
                    checked={game.colorBlind}
                    onChange={() => {
                      game.setColorBlind(!game.colorBlind);
                    }}
                  />
                </div>
              </div>
              <div className="flex py-5 border-b border-solid">
                <div className="flex flex-auto">
                  <div className="flex flex-col">
                    <p className="text-md">Ayudas de accesibilidad</p>
                    <p className="text-[12px] text-gray-500">
                      Dar click en las letras muestra el estado.
                    </p>
                  </div>
                </div>
                <div className="flex-initial form-check form-switch">
                  <input
                    className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 dark:bg-gray-700 checked:dark:bg-blue-500 focus:outline-none cursor-pointer shadow-sm"
                    type="checkbox"
                    role="switch"
                    id="accessibilityMode"
                    checked={game.accessibilityMode}
                    onChange={() => {
                      game.setAccessibilityMode(!game.accessibilityMode);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* body */}
            <div className="flex-initial my-2 mx-6 ">
              <p className="text-[10px] text-gray-500">
                Version en Español de{" "}
                <a
                  href="https://www.powerlanguage.co.uk/wordle/"
                  className="underline"
                >
                  Wordle
                </a>{" "}
                creado por{" "}
                <a
                  href="https://www.powerlanguage.co.uk/"
                  className="underline"
                >
                  Josh Wardle
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
