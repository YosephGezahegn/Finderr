import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class Search extends Component {
  state = {
    text: ""
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("please enter text", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });

    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showClear, clearList } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-success "

          />
        </form>
        {showClear && (
          <Button variant="contained" color="secondary" onClick={clearList}>
            clear
          </Button>
        )}
      </div>
    );
  }
}

export default Search;
