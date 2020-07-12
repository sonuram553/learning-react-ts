import React from "react";

const initialState = {
  lang: "",
  onLanguageChange: (lang: string) => {},
};

const Context = React.createContext(initialState);

export class LanguageStore extends React.Component {
  state = {
    lang: "english",
  };

  onLanguageChange = (lang: string) => {
    this.setState({ lang });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
