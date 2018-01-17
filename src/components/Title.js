import React from "react";

var Title = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired
  },
  
  render: function() {
    return (
      React.createElement('h1', {}, 'To do app. 10 zadań')
    )
  }
});

// export default console.log;