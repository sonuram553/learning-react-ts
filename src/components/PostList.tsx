import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchPosts } from "../actions";
import { RootState } from "../reducers";

class PostList extends React.Component<PropsFromRedux> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        PostList
        {this.props.posts.length}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return { posts: state.postState.posts };
};

const connector = connect(mapStateToProps, { fetchPosts });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PostList);
