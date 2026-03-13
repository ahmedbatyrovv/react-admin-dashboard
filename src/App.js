import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import * as Tooltip from "@radix-ui/react-tooltip";
import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen dark:bg-main-dark-bg">
      <BrowserRouter>
        <Tooltip.Provider delayDuration={0}>
          <div className="flex-relative">
            <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button
                    type="button"
                    className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                    style={{ background: "blue", borderRadius: "50%" }}
                  >
                    <FiSettings />
                  </button>
                </Tooltip.Trigger>

                <Tooltip.Portal>
                  <Tooltip.Content
                    side="top"
                    sideOffset={6}
                    className="tooltip-content"   // ← стиль как в Syncfusion Material
                  >
                    Настройки
                    <Tooltip.Arrow className="tooltip-arrow" width={11} height={6} />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </div>
          </div>
        </Tooltip.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;