import { useEffect, useReducer } from "react";
import { LogContext } from "./contex/LogContext";
import { LogReducer } from "./reducers/LogReducer";
import LoginRouter from "./routers/LoginRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, dispatch] = useReducer(LogReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <LogContext.Provider value={{ log, dispatch }}>
      <LoginRouter />;
    </LogContext.Provider>
  );
};

export default App;
