import React from "react";
import PostPreview from "./PostPreview";

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({posts: nextProps.posts});
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.posts.map(postData => <PostPreview key={postData.id} {...postData} />)}
                </div>
            </div>
        );
    }
}
