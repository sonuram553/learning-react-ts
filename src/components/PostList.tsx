import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchPosts } from "../actions";
import { RootState } from "../reducers";

class PostList extends React.Component<PropsFromRedux> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui relaxed divider list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state: RootState) => ({ posts: state.posts });

const connector = connect(mapStateToProps, { fetchPosts });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PostList);
