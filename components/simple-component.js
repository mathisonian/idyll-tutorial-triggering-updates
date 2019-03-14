const React = require('react');

class CustomComponent extends React.Component {
  render() {
    return ( <div style={{ width: 50, height: 50, background: this.props.color }}> </div>
    );
  }
}

module.exports = CustomComponent;
