import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component<{}, {}, string> {
  // Use this.context object
  /* static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="ui primary button">{text}</button>;
  } */

  // Use Consumer component
  renderButton(color: string) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ lang }) => (lang === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
