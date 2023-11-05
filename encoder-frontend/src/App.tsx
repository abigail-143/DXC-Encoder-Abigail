import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Encode from "./Encode";
import Message from "./Message";

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState<string>("main");
  const [type, setType] = useState<string>("");
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
      <Suspense>
        <Routes>
          {page === "main" && (
            <Route
              path="/"
              element={
                <>
                  <div onClick={handleClickEncode}>ENCODE A MESSAGE</div>
                  <div onClick={handleClickDecode}>DECODE A MESSAGE</div>
                </>
              }
            ></Route>
          )}
          {page === "create" && (
            <Route
              path="/create"
              element={<Encode type={type} setPage={setPage}></Encode>}
            ></Route>
          )}
          {page === "message" && (
            <Route
              path="/message"
              element={<Message type={type} setPage={setPage}></Message>}
            ></Route>
          )}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
