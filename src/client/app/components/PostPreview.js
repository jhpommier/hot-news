import React from "react";

export default class PostPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: this.props.vote
        };
    }

    doUpVote(increment) {
        this.setState(
            (prevState) => ({
                vote: prevState.vote + increment
            })
        );
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h3>{this.props.url}</h3>
                <span>{this.state.vote}</span>
                <button onClick={() => this.doUpVote(1)}>up</button>
                <button onClick={() => this.doUpVote(-1)}>down</button>
            </div>
        );
    }
}
