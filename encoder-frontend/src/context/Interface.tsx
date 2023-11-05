import React from "react";

export interface SecretInterface {
  secretMessage: string;
  setSecretMessage: React.Dispatch<React.SetStateAction<string>>;
}
