import { useNavigate } from "react-router-dom";
import "./Encode.css";
import { useContext, useState } from "react";
import useFetch from "./hooks/useFetch";
import MessageContext from "./context/message";

interface props {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Encode = (props: props) => {
  const navigate = useNavigate();
  const type = props.type;
  const context = useContext(MessageContext);
  const fetchData = useFetch();
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleClick = async () => {
    if (type === "encode") {
      try {
        const res = await fetchData("/encode", "POST", { password, message });

        if (res.ok) {
          console.log(res.data);
          context?.setSecretMessage(res.data.secretMessage);

          if (context?.secretMessage != null) {
            props.setPage("message");
            navigate("/message");
          }
        } else {
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (type === "decode") {
      try {
        const res = await fetchData("/decode", "POST", { password, message });

        if (res.ok) {
          console.log(res.data);
          context?.setSecretMessage(res.data.secretMessage);

          if (context?.secretMessage != null) {
            props.setPage("message");
            navigate("/message");
          }
        } else {
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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

  return (
    <>
      <button
        onClick={handleToggle}
        className={`toggle ${type === "decode" ? "en" : "de"}`}
      >
        {type === "decode" ? "Encode" : "Decode"}
      </button>
      <div className="form">
        <div className="pwRow">
          <label>
            {type === "decode"
              ? "What's the secret code?"
              : "Create a secret code:"}
          </label>
          <input
            className={`${type === "decode" ? "deUGC" : "enUGC"}`}
            placeholder="e.g. cats4lyfe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </div>
        <div className="msgRow">
          <label>Pssst! What's the secret message?</label>
          <textarea
            className={`${type === "decode" ? "deUGC" : "enUGC"}`}
            placeholder="e.g. I LOVE CATS!"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
        </div>
        <button
          className={`${type === "decode" ? "de" : "en"}`}
          onClick={handleClick}
        >
          {type === "decode" ? "Reveal my message!" : "Hide my message!"}
        </button>
      </div>
    </>
  );
};

export default Encode;
