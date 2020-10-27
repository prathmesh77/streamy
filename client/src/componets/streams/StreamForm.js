import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  //helper method to render something on screen

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit=(formValues)=> {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="enter title"
        ></Field>
        <Field
          name="discription"
          component={this.renderInput}
          label="enter discription"
        ></Field>
        <button className="ui button primary">submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};

  if (!formValues.title) {
    error.title = "you must enter a title";
  }

  if (!formValues.discription) {
    error.discription = "you must enter a discription";
  }

  return error;
};

 export default reduxForm({
  form: "streamForm",
  validate,
 })(StreamForm);