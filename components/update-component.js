const React = require('react');

class UpdateComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color: this.getRandomColor()
    }
  }

  getRandomColor() {
    return `rgba(
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},
      ${Math.random()}
    )`;
  }

  updateColor() {
    this.setState({
      color: this.getRandomColor()
    })
  }

  render() {
    return <div style={{
      width: 50,
      height: 50,
      background: this.state.color
    }}> </div>
  }
}

module.exports = UpdateComponent;
