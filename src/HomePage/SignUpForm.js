import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

class SignUpForm extends Component{


    render() {

        return (
            <div className="signUp">
                <h4>SIGN UP</h4>
                <table>
                    <tr><td><b><TextField  className="loginform" label="First Name"  /></b></td></tr>
                    <tr><td><TextField  className="loginform" label="Last Name" /></td></tr>
                    <tr><td><TextField  className="loginform"  label="E mail"  /></td></tr>
                    <tr><td><TextField  className="loginform"  label="Password" /></td></tr>
                    <tr><td><TextField  className="loginform"  label="Confirm Password"  /></td></tr>
                    <tr><td><TextField  className="loginform"  label="PhoneNumber"  /></td></tr>
                    <tr><td><TextField  className="loginform"  label="Zipcode" /></td></tr>
                    <tr><td><TextField type="date" className="loginform"/></td></tr>
                    <td>
                    </td>
                    <tr> <div className="margin-dist"><td><Button variant="contained" color="primary">
                        SUBMIT
                    </Button></td></div></tr>




                </table>

            </div>

        );
    }}
export default SignUpForm;