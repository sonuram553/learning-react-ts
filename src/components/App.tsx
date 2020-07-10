import React from "react";

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
      </div>
    );
  }
}

export default App;
