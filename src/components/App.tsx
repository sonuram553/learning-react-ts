import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

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
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
