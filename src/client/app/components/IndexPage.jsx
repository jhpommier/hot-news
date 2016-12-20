import React from 'react';
import PostPreview from './PostPreview';
import posts from '../data/posts';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          {posts.map(postData => <PostPreview key={postData.id} {...postData} />)}
        </div>
      </div>
    );
  }
}
