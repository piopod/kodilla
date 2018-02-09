import React from 'react';

const Title = (props) => (
  <h1>{props.content}</h1>
);

Title.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Title;
