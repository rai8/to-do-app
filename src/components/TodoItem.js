//press RCE to automatically generate your component, that is if you have es7, react---- installed

import React, { Component } from "react";
import PropTypes from "prop-types";
export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  /*  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: "line-through"
      };
    } else {
      return {
        textDecoration: "none"
      };
    }
  }; */
  markComplete = e => {
    console.log(this.props);
  };
  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.markComplete} />
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}
//proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
