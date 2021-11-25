import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    value: this.props.value,
    // tags: [],
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   constructor() {
  //     super();
  //     this.handleIncreament.bind(this);
  //   }

  handleIncreament = () => {
    this.setState({ count: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncreament}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
