import React from 'react';
import PropTypes from 'prop-types';
import PostList from './PostList';

function Body(props) {
  return (
    <div>
      <style jsx>{`
        
      `}</style>
      <div className="body-styles">
        <PostList 
        postList={props.postList} 
        onAddNewPost={props.onAddNewPost}
        />
      </div>
    </div>
  );
}

Body.propTypes = {
  postList: PropTypes.array,
  onAddNewPost: PropTypes.func
};

export default Body;