const React = require("react");

class WordRelay extends React.Component {
  state = {
    text: "hello",
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRelay;
