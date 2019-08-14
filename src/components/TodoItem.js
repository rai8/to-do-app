//press RCE to automatically generate your component, that is if you have es7, react---- installed

import React, { Component } from "react";
import PropTypes from "prop-types";
export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p> {this.props.todo.title}</p>
      </div>
    );
  }
}
//proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
export default TodoItem;
