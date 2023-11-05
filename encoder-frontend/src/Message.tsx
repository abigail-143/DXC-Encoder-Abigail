import { useNavigate } from "react-router-dom";
import "./Encode.css";
import { useContext } from "react";
import MessageContext from "./context/message";

interface props {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Message = (props: props) => {
  const type: string = props.type;
  const context = useContext(MessageContext);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === "decode") {
      props.setType("encode");
    }

    if (type === "encode") {
      props.setType("decode");
    }
    props.setPage("create");
    navigate("/create");
  };

  const handleClick = () => {
    props.setPage("create");
    navigate("/create");
  };
  return (
    <>
      <button
        onClick={handleToggle}
        className={`toggle ${type === "decode" ? "en" : "de"}`}
      >
        {type === "decode" ? "Encode" : "Decode"}
      </button>
      <div className="form">
        <div className="headerRow">
          <h1 className={`${type === "decode" ? "deHeader" : "enHeader"}`}>
            {type === "decode" ? "DECODED" : "ENCODED"}
          </h1>
        </div>
        <div className="msgRow">
          <label>
            {type === "decode"
              ? "Here's your secret mission."
              : "Your secret's safe."}
          </label>
          <p className="msg">{context?.secretMessage}</p>
        </div>
        <button
          className={`${type === "decode" ? "de" : "en"}`}
          onClick={handleClick}
        >
          {type === "decode"
            ? "Reveal another message!"
            : "Hide another message!"}
        </button>
      </div>
    </>
  );
};

export default Message;
