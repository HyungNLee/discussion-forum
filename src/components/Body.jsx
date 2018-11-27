import React from 'react';
import PropTypes from 'prop-types';
import PostList from './PostList';

function Body(props) {
  return (
    <div>
      <style jsx>{`
        
      `}</style>
      <div className="body-styles">
        <PostList postList={props.postList} />
      </div>
    </div>
  );
}

Body.propTypes = {
  postList: PropTypes.array
};

export default Body;