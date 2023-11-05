import { Suspense, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Encode from "./Encode";
import Message from "./Message";
import MessageContext from "./context/message";

function App() {
  const [page, setPage] = useState<string>("main");
  const [type, setType] = useState<string>("");
  const [secretMessage, setSecretMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleClickEncode = () => {
    setType("encode");
    setPage("create");
    navigate("/create");
  };

  const handleClickDecode = () => {
    setType("decode");
    setPage("create");
    navigate("/create");
  };

  return (
    <>
      <MessageContext.Provider
        value={{
          secretMessage,
          setSecretMessage,
        }}
      >
        <Suspense>
          <Routes>
            {page === "main" && (
              <Route
                path="/"
                element={
                  <div className="center">
                    <div className="block en" onClick={handleClickEncode}>
                      ENCODE A MESSAGE
                    </div>
                    <div className="block de" onClick={handleClickDecode}>
                      DECODE A MESSAGE
                    </div>
                  </div>
                }
              ></Route>
            )}
            {page === "create" && (
              <Route
                path="/create"
                element={
                  <Encode
                    type={type}
                    setType={setType}
                    setPage={setPage}
                  ></Encode>
                }
              ></Route>
            )}
            {page === "message" && (
              <Route
                path="/message"
                element={
                  <Message
                    type={type}
                    setType={setType}
                    setPage={setPage}
                  ></Message>
                }
              ></Route>
            )}
          </Routes>
        </Suspense>
      </MessageContext.Provider>
    </>
  );
}

export default App;
