import * as React from 'react';
import './FormRegister.scss';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

interface formRegisterProps {

}
const FormRegister = observer(withRouter((formRegisterProps) => {
    return (

        <article>
            <h1>Register Form</h1>
            <form onSubmit={() => {
                formRegisterProps.history.push("/login");
            }
            }>
                <span>E-Mail</span>
                <input className="mail" type="email" placeholder="example@gmail.com"/>
                <span>Password</span>
                <input className="pass" type="password" placeholder="••••••••"/>
                <span>Confirm Password</span>
                <input id="pass" type="password" placeholder="••••••••" />

                <button id="toLogin" onClick={() => {
                    formRegisterProps.history.push("/login");
                }}
                >I already have an account</button>

                <button type="submit">Register</button>

            </form>
        </article>
    )
}));

export default FormRegister;