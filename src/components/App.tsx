import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

interface State {
  language: string;
}

interface Props {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />

          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
