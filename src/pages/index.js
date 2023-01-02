import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import '../App.css';
import Form from '../Form';
import timeout_pw_recover_api from '../api/timeout_pw_recover'

export default () => {
    const [state, setState] = useState({ fields: {} });
    const [msg, setMsg] = useState('');
    const [resetToken, setResetToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            let code = urlParams.get('token');
            setResetToken(code)
            //validation_res(reset_token);
        } catch (err) {
            console.log(err)
        }
    }, [])

    const validation_res = async (reset_token, password, callback = null) => {
        try {
            console.log("token is " + reset_token);
            const res = await timeout_pw_recover_api.post('/change_password', { 'token': reset_token, 'password': password });
            //setMsg('Password successfully reset. Login via your new password from the app.')
            if (callback) { callback() }
        } catch (err) {
            console.log(err)
            setMsg('There was a problem resetting your password.')
        }
    }

    const goToAfterSubmitPage = () => {
        window.open("AfterSubmit", "_self");
    }

    const onSubmit = async () => {
        //setState({ fields })
        if (password != confirmPassword) {
            setMsg("Passwords do not match!")

        } else {
            console.log("Agg comp got: ",);
            try {
                validation_res(resetToken, password, goToAfterSubmitPage);
            } catch (err) {
                console.log(err)
                setMsg('There was a problem resetting your password.')
            }
        }


    };

    return (
        <div className="App">
            <h3>Reset your TimeOut Password here: </h3>
            <br></br>
            {/*<form
        onSubmit={fields => onSubmit(fields)}>*/}
            <label>
                Enter new password below:
                <br />
                <input
                    name="firstPassword"
                    type="text"
                    placeholder="Your new password"
                    onChange={e => setPassword(e.target.value)} />
            </label>
            <br /><br /><br />
            <label>
                Confirm new password:
                <br />
                <input
                    name="confirmPassword"
                    type="text"
                    placeholder="Confirm new password"
                    onChange={e => setConfirmPassword(e.target.value)} />

            </label>
            <br /><br />
            <button
                onClick={() => onSubmit()}
                value="Submit"
            >Submit</button>


            {/*<p>{JSON.stringify(state.fields, null, 2)}</p>*/}

            {msg ? <p>{msg}</p> : null}

            {/*<p>Reset token is: {resetToken}</p>*/}

        </div>
    );
};