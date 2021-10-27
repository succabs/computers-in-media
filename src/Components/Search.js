import React, { Component } from "react"

class Search extends Component {
      state = {
    title: "",
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

    handleSubmit = e => {
  e.preventDefault();
  this.props.addSearchProps(this.state.title);
  this.setState({
    title: ""
  });
    };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name"value={this.state.title}
          name="title"
          onChange={this.onChange} />
        <button>Search</button>
      </form>
    )
  }
}
export default Search
