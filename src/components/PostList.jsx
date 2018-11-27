import React from 'react';
import PropTypes from 'prop-types';
import PostPreview from './PostPreview';

function PostList(props) {
  return (
    <div>
      <style jsx>{`
        .post-list-styles {
          border: 1px solid black;
          padding: 15px;
          width: 68%;
        }
        `}</style>
      <div className="post-list-styles">
        {props.postList.map((post, index) =>
          <PostPreview
            post={post}
            key={index}
          />
        )}
      </div>
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;