import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const required = value => (value ? undefined : "This field is required");

const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className="form-control" />
    {touched && ((error && <span className="errorMsg">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

class ProfileForm extends Component {
  processSubmit = (values) => {
    console.log('values:', values);
  }

  render() {
    return (
      <div className="container">
        <div>
          <Link className="btn btn-outline-info" to={`/offers`}>Offers Listed</Link> &nbsp;
          <Link className="btn btn-outline-info" to={`/purchases`}>Offers Purchased</Link> &nbsp;
          <Link className="btn btn-outline-info" to={`/offer/add`}>
            Save
          </Link> &nbsp;
          <Link className="btn btn-outline-info" to={`/offer/add`}>
            Cancel
          </Link>
        </div>
        <br />

        <div className="card">

          <div className="card-header">
            VIPRide.com
          </div>

          <div className="card-body">

            <form
              className="form-horizontal"
              onSubmit={this.props.handleSubmit(this.processSubmit)}>
              <fieldset>

                <div className="row">
                  <div className="col">
                    <img alt="logo" width="85%" src="http://www.vipride.com/images/vipride-logo-header.png" />
                  </div>
                  <div className="col">
                    <div>
                      Available Balance: $5,000.00
                    </div>
                    <br />
                    <div className="form-group">
                      <Field
                        name="name"
                        type="text"
                        label="Business Name"
                        placeholder="Please enter business name"
                        component={renderField}
                        validate={[required]} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <Field
                        name="email"
                        type="text"
                        label="Business Email"
                        placeholder="Please enter business email address"
                        component={renderField}
                        validate={[required]} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <Field
                        name="password"
                        type="password"
                        label="Business Password"
                        placeholder="Please enter business email address"
                        component={renderField}
                        validate={[required]} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <Field
                        name="contactName"
                        type="text"
                        label="Contact Name"
                        placeholder="Please enter business contact name"
                        component={renderField}
                        validate={[required]} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <Field
                        name="contactPhone"
                        type="text"
                        label="Contact Phone#:"
                        placeholder="Please enter business contact phone"
                        component={renderField}
                        validate={[required]} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <Field
                        name="address1"
                        type="text"
                        label="Address Line 1:"
                        placeholder="Please enter street address"
                        component={renderField}
                        validate={[required]} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <Field
                        name="address2"
                        type="text"
                        label="Address Line 2:"
                        placeholder="Please enter apt or suite #"
                        component={renderField} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <Field
                        name="city"
                        type="text"
                        label="City:"
                        placeholder="Please enter city"
                        component={renderField}
                        validate={[required]} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <Field
                        name="state"
                        type="text"
                        label="State:"
                        placeholder="Please enter state"
                        component={renderField}
                        validate={[required]} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <Field
                        name="zip"
                        type="text"
                        label="Zip Code:"
                        placeholder="Please enter zip code"
                        component={renderField}
                        validate={[required]} />
                    </div>
                  </div>
                </div>

              </fieldset>
            </form>

          </div>

        </div>

      </div>

    );
  }

}

export default reduxForm({ form: 'profile' })(ProfileForm);
