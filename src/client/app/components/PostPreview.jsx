import React from 'react';

export default class PostPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upvote: this.props.upvote
        };
    }

    doUpVote(increment) {
        this.setState(
            (prevState, props) => ({
                upvote: prevState.upvote + increment
            })
        );
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <span>{this.state.upvote}</span>
                <button onClick={() => this.doUpVote(1)}>up</button>
                <button onClick={() => this.doUpVote(-1)}>down</button>
            </div>
        );
    }
}
