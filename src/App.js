import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import timeout_pw_recover_api from './api/timeout_pw_recover'

export default () => {
  const [state, setState] = useState({ fields: {} });
  const [msg, setMsg] = useState('');
  let searchParams = new URLSearchParams(window.location.href);
  let reset_token = searchParams.get('token');

  useEffect(() => {
    try {
      validation_res(reset_token);
    } catch (err) {
      console.log(err)
    }
  }, [])

  const validation_res = async (reset_token, password) => {
    try {
      console.log("token is " + reset_token);
      const res = await timeout_pw_recover_api.post('/change_password', { 'token': reset_token, 'password': password });
      setMsg('Password successfully reset. Login via your new password from the app.')
      console.log(res);
    } catch (err) {
      console.log(err)
      setMsg('There was a problem resetting your password.')
    }

  }

  const onSubmit = async (fields) => {
    setState({ fields })

    console.log("Agg comp got: ", fields);
    try {
      validation_res(reset_token, fields['password']);
    } catch (err) {
      console.log(err)
      setMsg('There was a problem resetting your password.')
    }
  };

  return (
    <div className="App">
      <h2>Enter your new password below: </h2>
      <br></br>
      < Form onSubmit={fields => onSubmit(fields)} />
      <p>
        {JSON.stringify(state.fields, null, 2)}
      </p>
      {msg ? <p>{msg}</p> : null}

    </div>
  );



};
/*
class App extends Component {
  state = {
    fields: {}
  };

  render() {
    return (
      <div className="App">
        < Form onSubmit={fields => this.onSubmit(fields)} />
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>

      </div>
    );
  }
}

export default App;

*/