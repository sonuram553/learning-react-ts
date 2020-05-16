import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

interface Props {
  fetchPosts: typeof fetchPosts;
}

class PostList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

/* const mapStateToProps = (state: any) => {
  return { posts: state.posts };
};
 */
export default connect(null, {
  fetchPosts,
})(PostList);
