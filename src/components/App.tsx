import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

interface State {
  language: string;
}

interface Props {}

class App extends React.Component<Props, State> {
  state: State = { language: "english" };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.setState({ language: "english" })}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.setState({ language: "dutch" })}
          ></i>
        </div>

        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
