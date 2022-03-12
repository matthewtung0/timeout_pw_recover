import React from 'react';

export default class Form extends React.Component {
    state = {
        password: '',
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            password: "",
        })
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form>
                <input
                    name='password'
                    placeholder='New password'
                    value={this.state.password}
                    onChange={e => this.change(e)} />
                <br />
                <button onClick={(e) => this.onSubmit(e)}>Submit </button>
            </form>


        )
    }
}