const React = require('react');

class RandomComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color: `rgba(
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)},
        ${Math.random()}
      )`
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateColor !== prevProps.updateColor) {
      this.setState({
        color: `rgba(
          ${Math.round(Math.random() * 255)},
          ${Math.round(Math.random() * 255)},
          ${Math.round(Math.random() * 255)},
          ${Math.random()}
        )`
      })
    }
  }

  render() {
    return <div style={{
      width: 50,
      height: 50,
      background: this.state.color
    }}> </div>
  }
}

module.exports = RandomComponent;
