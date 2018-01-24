import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
// import { bindActionCreators } from "redux";

const renderField = ({
  id,
  input,
  label,
  type,
  meta: {
    touched,
    error
  }
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} id={id} type={type} className="form-control"/>{" "} {touched && error && <span>{error}</span>}
    </div>
  </div>
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error_type: 0
    };
  }

  handleLogin = values => {
    console.log('values:', values);
  }

  render() {
    const {error} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col card card-container">
            <img id="profile-img" alt="profile" className="profile-img" src="../bartzaar.png"/>

            <p id="profile-name"/>

            <form onSubmit={this.props.handleSubmit(this.handleLogin)} className="form-signin">
              <Field id="email" name="email" type="email" component={renderField} label="email"/>
              <Field id="password" name="password" type="password" component={renderField} label="password"/>{" "} {error && <strong>{error}</strong>}
              <br/>
              <button type="submit" className="btn btn-lg btn-primary btn-block btn-signin">
                Sign In
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(reduxForm({form: "login"})(Login));
