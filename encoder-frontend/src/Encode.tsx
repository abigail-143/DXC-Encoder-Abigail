import { useNavigate } from "react-router-dom";

interface props {
  type: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Encode = (props: props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.setPage("message");
    navigate("/message");
  };
  return (
    <>
      <button>Decode</button>
      <div className="form">
        <div className="pwRow">
          <label>Create a secret code:</label>
          <input placeholder="e.g. cats4lyfe"></input>
        </div>
        <div className="msgRow">
          <label>Pssst! What's the secret message?</label>
          <input placeholder="e.g. I LOVE CATS!"></input>
        </div>
        <button onClick={handleClick}>Hide my message!</button>
      </div>
    </>
  );
};

export default Encode;
