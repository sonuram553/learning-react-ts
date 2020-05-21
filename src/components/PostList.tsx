import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import { RootState } from "../reducers";
import UserHeader from "./UserHeader";

class PostList extends React.Component<PropsFromRedux> {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
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

              <UserHeader userId={post.userId} />
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

const connector = connect(mapStateToProps, { fetchPostsAndUsers });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PostList);
