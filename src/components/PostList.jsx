import React from 'react';
import PropTypes from 'prop-types';
import PostPreview from './PostPreview';
import Moment from 'moment';

function PostList(props) {

  let _postOwner = null;
  let _title = null;
  let _postBody = null;

  function handlePostSubmit(event) {
    event.preventDefault();
    props.onAddNewPost(
      {
        postOwner: _postOwner.value,
        title: _title.value,
        postBody: _postBody.value,
        upVotes: 1,
        comments: [],
        postId: props.postList.length,
        timeOpen: new Moment()
      }
    );
    _postOwner = '';
    _title = '';
    _postBody = '';
  }

  return (
    <div>
      <style jsx>{`
        .post-list-styles {
          border: 1px solid black;
          padding: 15px;
          width: 68%;
        }
        `}</style>
      <div className="new-post-container">
        <form onSubmit={handlePostSubmit}>
          <input
            type="text"
            placeholder="Username"
            ref={(input) => { _postOwner = input; }}
          />
          <input
            type="text"
            placeholder="title"
            ref={(input) => { _title = input; }}
          />
          <textarea
            type="text"
            ref={(input) => { _postBody = input; }}
          />
        <button type='submit' className='btn btn-info'>New Post</button>
        </form>
      </div>

      <div className="post-list-styles">
        {props.postList.map((post, index) =>
          <PostPreview
            post={post}
            key={index}
            index={index}
            onUpVote={props.onUpVote}
            onDownVote={props.onDownVote}
          />
        )}
      </div>
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onAddNewPost: PropTypes.func
};

export default PostList;