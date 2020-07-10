import React from "react";
import UserCreate from "./UserCreate";

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

        <UserCreate />
      </div>
    );
  }
}

export default App;
