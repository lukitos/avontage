import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const required = value => (value ? undefined : "This field is required");

const renderField = (
{
  input,
  label,
  type,
  placeholder,
  className,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className="form-control"
      />
      {touched &&
        ((error && <span className="errorMsg">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class SettingForm extends Component {

  processSubmit = (values) => {
    console.log('values:', values);
  }

  render() {
    return (
      <div className="container">

        <form
          className="form-horizontal"
          onSubmit={this.props.handleSubmit(this.processSubmit)}>

          <fieldset>

            <div className="row">
              <div className="col form-group">
                <Field
                  name="email"
                  label="Email:"
                  component={renderField}
                  placeholder="Enter admin email"
                  validate={[required]}
                  type="text" />
              </div>
            </div>

            <div className="row">
              <div className="col form-group">
                <Field
                  name="password"
                  label="Password:"
                  component={renderField}
                  placeholder="Enter admin password"
                  validate={[required]}
                  type="password" />
              </div>
            </div>

            <br />

            <div>
              <Link className="btn btn-outline-info" to={``}>Save</Link> &nbsp;
              <Link className="btn btn-outline-info" to={`/admin`}>Cancel</Link>
            </div>

          </fieldset>

        </form>

      </div>
    );
  }

}

export default reduxForm({ form: 'setting' })(SettingForm);
