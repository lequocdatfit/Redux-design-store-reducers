import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actionCreator";
import UserHeader from "./UserHeader";

const PostList = ({ posts, fetchPostsAndUsers }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, []);
  const renderedPosts = posts.map((post) => {
    return (
      <div className="item" key={post.id}>
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="ui styled divided list">{posts ? renderedPosts : null}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
