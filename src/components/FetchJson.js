import React, { Component } from "react";
import { fetchPost } from "../actions";
import { connect } from "react-redux";

class FetchJson extends Component {
  state = {
    listLimit: 10
  };

  componentDidMount() {
    this.props.fetchPost();
  }

  renderList() {
    return this.props.data.data.memes
      .slice(0, this.state.listLimit)
      .map((meme, index) => {
        return <h3 key={index}>{meme.name}</h3>;
      });
  }

  render() {
    if (this.props.data.data === undefined) {
      return <h2>Waiting</h2>;
    } else {
      return (
        <div>
          {this.renderList()}
          <button
            type="button"
            onClick={() =>
              this.setState({ listLimit: this.state.listLimit + 10 })
            }
          >
            Load more
          </button>
        </div>
      );
    }
  }
}

const mapsStateToProps = state => {
  return {
    data: state
  };
};

export default connect(
  mapsStateToProps,
  { fetchPost }
)(FetchJson);
