import React, { useState } from 'react';
import {getIn, useFormik} from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Pole wymagane';
  }

  if (!values.email) {
    errors.email = 'Pole wymagane';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Niepoprawny adres e-mail';
  }

  if (!values.bio) {
    errors.bio = 'Pole wymagane';
  }

  if (!values.rules) {
    errors.rules = 'Pole wymagane';
  }

  return errors;
};

const getStyles = (errors, fieldName) => {
  if (getIn(errors, fieldName)) {
    return {
      outline: '1px solid red'
    }
  }
}

function MyForm() {
  const [isSubmitted, setIsSubmitted] = useState();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      bio: '',
      sex: 'M',
      rules: false
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate,
    onSubmit: (values) => {
      console.log(formik.values);
      setIsSubmitted(true);
      formik.resetForm();
    },
  });

  const handleValueChange = (e)=> {
    e.target.style.outline='none';
    delete formik.errors[e.target.name];
    formik.handleChange(e);
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input style={getStyles(formik.errors, 'firstName')}
            type="text"
            name="firstName"
            placeholder="Podaj imię"
            onChange={handleValueChange}
            value={formik.values.firstName} />
          {formik.errors.firstName ? <span className="error">{formik.errors.firstName}</span> : null}
        </div>
        <div>
          <input style={getStyles(formik.errors, 'email')}
            type="email"
            name="email"
            placeholder="Podaj adres e-mail"
            onChange={handleValueChange}
            value={formik.values.email} />
          {formik.errors.email ? <span className="error">{formik.errors.email}</span> : null}
        </div>
        <div>
          <textarea style={getStyles(formik.errors, 'bio')}
            name="bio"
            placeholder="Krótkie bio"
            onChange={handleValueChange}
            value={formik.values.bio} />
          {formik.errors.bio ? <span className="error">{formik.errors.bio}</span> : null}
        </div>
        <div>
          <input
            type="radio"
            id="sex-m"
            name="sex"
            value="M"
            defaultChecked
            />
          <label htmlFor="sex-m">Mężczyzna</label>
          <input
            type="radio"
            id="sex-f"
            name="sex"
            value="F"
            />
          <label htmlFor="sex-f">Kobieta</label>
        </div>
        <div>
          <input style={getStyles(formik.errors, 'rules')}
          id="rules"
          type="checkbox"
          name="rules"
          onChange={handleValueChange}
          checked={formik.values.rules} />
          <label htmlFor="rules">Akceptuję regulamin</label>
          {formik.errors.rules ? <span className="error">{formik.errors.rules}</span> : null}
        </div>
        <div>
          <button type="submit">Prześlij</button>
        </div>
      </form>
      {isSubmitted && <p>Dziękujemy za wysłanie</p>}
    </div>
  )
}

export default MyForm;