import React from "react";

interface Props {
  onLanguageChange: (lang: string) => void;
}

class LanguageSelector extends React.Component<Props> {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english")}
        ></i>
        <i
          className="flag nl"
          onClick={() => this.props.onLanguageChange("dutch")}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
