import React from 'react';

import Form from './Form';
import CardList from './CardList';

class GitHubCards extends React.Component {
    state = {
        profiles: [],
    }

    addNewProfile = (data) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, data],
        }));
    };

    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

export default GitHubCards;
