import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    state = { userName: '' };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { userName } = this.state;
        const github_url = `https://api.github.com/users/${userName}`;
        const response = await axios.get(github_url);

        this.props.onSubmit(response.data);
        this.resetState();
    };

    resetState() {
        this.setState({
            userName: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="GitHub username"
                />

                <button>Add card</button>
            </form>
        );
    }
}

export default Form;
