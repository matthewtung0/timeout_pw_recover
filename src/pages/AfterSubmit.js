import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import '../App.css';

export default () => {

  return (
    <div className="App">
      <h3>Password successfully reset. Login via your new password from the app.</h3>
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