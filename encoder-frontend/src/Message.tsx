import { useNavigate } from "react-router-dom";

interface props {
  type: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Message = (props: props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    props.setPage("create");
    navigate("/create");
  };
  return (
    <>
      {/* this is a ternary, depends on whether it's encoding/decoding */}
      <button>Decode</button>
      <div className="form">
        {/* this is a ternary, depends on whether it's encoding/decoding */}
        <div className="headerRow">
          <h1>Encoded</h1>
        </div>
        <div className="msgRow">
          <label>Your secret's safe.</label>
          <p className="msg"></p>
        </div>
        {/* this is a ternary depends on whether it's encoding/decoding */}
        <button onClick={handleClick}>Hide another message!</button>
      </div>
    </>
  );
};

export default Message;
