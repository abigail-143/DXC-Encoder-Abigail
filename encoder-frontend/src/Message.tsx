import { useNavigate } from "react-router-dom";
import "./Encode.css";

interface props {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Message = (props: props) => {
  const type: string = props.type;
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
      {/* this is a ternary, depends on whether it's encoding/decoding */}
      <button
        onClick={handleToggle}
        className={`toggle ${type === "decode" ? "en" : "de"}`}
      >
        {type === "decode" ? "Encode" : "Decode"}
      </button>
      <div className="form">
        {/* this is a ternary, depends on whether it's encoding/decoding */}
        <div className="headerRow">
          <h1 className={`${type === "decode" ? "deHeader" : "enHeader"}`}>
            {type === "decode" ? "Decoded" : "Encoded"}
          </h1>
        </div>
        <div className="msgRow">
          <label>
            {type === "decode"
              ? "Here's your secret mission."
              : "Your secret's safe."}
          </label>
          <p className="msg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            viverra tristique porta. Praesent lobortis ac sapien ac rutrum. Nam
            quis metus justo. Ut varius eu ligula gravida consectetur. Phasellus
            vestibulum, arcu a elementum pharetra, mi felis lacinia ligula, eget
            aliquam lacus lacus sed felis. Sed facilisis felis porta, eleifend
            nisi sit amet, euismod se. Nunc ipsum est, lacinia vehicula dui ac,
            convallis euismod tortor. Integer cursus dignissim auctor. Nunc
            aliquet neque et condimentum faucibus. Donec enim dolor, condimentum
            vel venenatis ac, tincidunt id orci.
          </p>
        </div>
        {/* this is a ternary depends on whether it's encoding/decoding */}
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
