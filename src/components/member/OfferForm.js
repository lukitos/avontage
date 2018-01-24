import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

// const  { DOM: { input, select, textarea } } = React

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

class OfferForm extends Component {
  processSubmit = (values) => {
    console.log('values:', values);
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-secondary" role="alert">
          <b>Offer Information</b>
        </div>
        <div>
          <Link className="btn btn-outline-info" to={`/offer/add`}>
            Edit Image
          </Link> &nbsp;
          <Link className="btn btn-outline-info" to={`/offer/add`}>
            Save
          </Link> &nbsp;
          <Link className="btn btn-outline-info" to={`/offer/add`}>
            Cancel
          </Link>
        </div>
        <br />
        <form
          className="form-horizontal"
          onSubmit={this.props.handleSubmit(this.processSubmit)}>
          <fieldset>
            <div className="row">
              <div className="col-md-4">
                <img alt="logo" src="/padthai.jpg" className="offerImg" />
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <Field
                    name="headline"
                    label="Headline:"
                    component={renderField}
                    type="text"
                    placeholder="Enter the headline"
                    validate={[required]}
                    />
                </div>
                <div className="form-group">
                  <label className="control-label">Highlights:</label>
                  <Field
                    name="highlight"
                    placeholder="Enter the highlights of your offer"
                    component="textarea"
                    className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label">Details:</label>
                <Field
                  name="detail"
                  component="textarea"
                  placeholder="Enter the details of your offer"
                  className="form-control" />
            </div>
            <div className="form-group">
              <label className="control-label">Instructions:</label>
              <Field
                name="instruction"
                placeholder="Enter the instructions to redeem your offer"
                component="textarea"
                className="form-control" />
            </div>
            <div className="form-group">
              <label className="control-label">Restrictions:</label>
              <Field
                name="restriction"
                placeholder="Enter any restrictions of your offer"
                component="textarea"
                className="form-control" />
            </div>
            <div className="row">
              <div className="col form-group">
                <Field
                  name="max"
                  label="Max #:"
                  component={renderField}
                  type="text"
                  placeholder="Max allowed"
                  validate={[required]}
                  />
              </div>
              <div className="col form-group">
                  <Field
                    name="maxMonth"
                    label="Max/month:"
                    component={renderField}
                    type="text"
                    placeholder="Max allowed per month"
                    validate={[required]}
                    />
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <Field
                  name="value"
                  label="Value:"
                  component={renderField}
                  type="text"
                  placeholder="Offer $ value"
                  validate={[required]}
                  />
              </div>
              <div className="col form-group">
                <label>Status</label>
                <div>
                  <label><Field name="status" component="input" type="radio" value="active"/>&nbsp; Active &nbsp;&nbsp;&nbsp;</label>
                  <label><Field name="status" component="input" type="radio" value="inactive"/>&nbsp; Inactive &nbsp;&nbsp;</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label>Category:</label>
                <Field
                  name="category"
                  component="select"
                  className="form-control" >
                  <option></option>
                  <option value="food">Food and Drink</option>
                  <option value="spa">Leisure and Spa</option>
                  <option value="other">Other</option>
                </Field>
              </div>
              <div className="col form-group">
                <label>Sub Category:</label>
                <Field
                  name="subcategory"
                  component="select"
                  className="form-control" >
                  <option></option>
                  <option value="food">Food and Drink</option>
                  <option value="spa">Leisure and Spa</option>
                  <option value="other">Other</option>
                </Field>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'offer' })(OfferForm);
