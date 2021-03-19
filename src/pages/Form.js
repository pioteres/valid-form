import React, { useState } from 'react';

const errorsInitValues = {
  name: false,
  email: false,
  bio: false,
  sex: false,
  rules: false
};

function Form() {
  const [isSubmited, setIsSubmited] = useState();
  const [ errors, setError] = useState(errorsInitValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(errorsInitValues);
    e.target.reset();
    setIsSubmited(true);
  }

  const handleChange = (e) => {
    setError({...errors,[e.target.name]: false});
    e.target.style.outline = '';
  }

  const handleValid = (e) => {
    e.target.style.outline = '1px solid red';
    setError({
      ...errors, [e.target.name]: true} );
  }

  return (
    <div>

      <form onSubmit={handleSubmit} onInvalid={handleValid} >
        <div>
          <input type="text" name="name" placeholder="Podaj imię" required onChange={handleChange} />
          {errors.name ? <span className="error">Pole wymagane</span>: <span></span>}
        </div>
        <div>
          <input type="email" name="email" placeholder="Podaj adres e-mail" required onChange={handleChange} />
          {errors.email ? <span className="error">Pole wymagane</span>: <span></span>}
        </div>
        <div>
          <textarea name="bio" placeholder="Krótkie bio" required onChange={handleChange} />
          {errors.bio ? <span className="error">Pole wymagane</span>: <span></span>}
        </div>
        <div>
          <input type="radio" id="sex-m" name="sex" value="M" required defaultChecked onChange={handleChange}/>
          <label htmlFor="sex-m">Mężczyzna</label>
          <input type="radio" id="sex-f" name="sex" value="F" required onChange={handleChange} />
          <label htmlFor="sex-f">Kobieta</label>
        </div>
        <div>
          <input id="rules" type="checkbox" name="rules" required onClick={handleChange} />
          <label htmlFor="rules">Akceptuję regulamin</label>
          {errors.rules ? <span className="error">Pole wymagane</span>: <span></span>}
        </div>
        <div>
          <button type="submit">Prześlij</button>
        </div>
      </form>
      {isSubmited && <p>Dziękujemy za wysłanie</p>}
    </div>
  )
}

export default Form;