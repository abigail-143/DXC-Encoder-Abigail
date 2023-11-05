import { SecretInterface } from "./Interface";
import React from "react";

const MessageContext = React.createContext<SecretInterface | undefined>(
  undefined
);

export default MessageContext;
