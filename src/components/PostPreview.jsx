import React from 'react';
import PropTypes from 'prop-types';
import upArrow from '../assets/up-arrow.png';
import downArrow from '../assets/down-arrow.png';
import Moment from 'moment';

function PostPreview(props) {

  function handleUpVote(id){
    props.onUpVote(id);
  }

  function handleDownVote(id){
    props.onDownVote(id);
  }

  function returnPostLength() {
    return props.post.comments.length;
  }

  function displayTimeOpen(timeOpen) {
    return timeOpen.from(new Moment(), true);
  }
  return (
    <div className="post-preview-container">
      <style jsx>{`
        .post-preview-container {
          border: 1px solid black;
          border-radius: 5px;
          margin: 15px;
          background-color: white;
          height: 300px;
          overflow: hidden;
          position: relative;
        }
        .postOwner-container {
          margin: 10px;
        }
        .postOwner-styles {
          font-size: 12px;
          color: rgb(120, 124, 126);
        }
        .postTitle-container {
          margin: 10px;
        }
        .postTitle-styles {
          font-size: 20px;
          color: rgb(55, 60, 63);
        }
        .postContent-container {
          margin: 10px;
        }
        .postContent-styles {
          line-height: 1;
        }
        .postVote-container {
          height: 100%;
          width: 9%;
          float: left;
          background-color: #f8f9fa;
          text-align: center;
        }
        .postVote-styles {
          margin: 0px auto;
        }
        .postFooter-container {
          position: absolute;
          bottom: 0;
          left: 10%;
        }
        .postFooter-container p {
          line-height: 1;
          color: #878a8c;
        }
        .postBody-container {
          margin-left: 9%;
        }
        .arrow-styles {
          width: 30px;
          margin: 0 auto;
        }
        .postVote-body {
          margin: 10px auto;
        }
        `}</style>
      <div className="postVote-container">
        <div className="postVote-body">
          <button onClick={() => handleUpVote(props.index)}><img className="arrow-styles" src={upArrow} /></button>
          <p className="postVote-styles">{props.post.upVotes}</p>
          <button onClick={() => handleDownVote(props.index)}><img className="arrow-styles" src={downArrow} /></button>
        </div>
      </div>
      <div className="postBody-container">
        <div className="postOwner-container">
          <p className="postOwner-styles">Posted by u/{props.post.postOwner} {displayTimeOpen(props.post.timeOpen)} ago</p>
        </div>
        <div className="postTitle-container">
          <p className="postTitle-styles">{props.post.title}</p>
        </div>
        <div className="postContent-container">
          <p className="postContent-styles">{props.post.postBody}</p>
        </div>
      </div>
      <div className="postFooter-container">
        <p>{returnPostLength()} comments</p>
      </div>

      {/* <div>
        {props.post.comments.map((comment, index) =>
          <div key={index}>
            <div>
              {comment.commentOwnerName}
            </div>
            <div>
              {comment.commentContent}
            </div>
            <div>
              {comment.commentUpvotes}
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}

PostPreview.propTypes = {
  post: PropTypes.object,
  postOwner: PropTypes.string,
  title: PropTypes.string,
  postBody: PropTypes.string,
  upVotes: PropTypes.number,
  comments: PropTypes.array,
};

export default PostPreview;