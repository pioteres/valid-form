import React, { useState } from "react";
import { useForm } from "react-hook-form";

const styles={
  error: {
    outline: '1px solid red',
  }
}

function FormModTwo() {
  const { register, handleSubmit, errors } = useForm();
  const [isSubmitted, setIsSubmitted] = useState();
  const onSubmit = (values, e) => {
    setIsSubmitted(true);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            style={errors.firstName ? styles.error : null }
            name="firstName"
            placeholder="Podaj imię"
            ref={register({ required: true })}

          />
          {errors.firstName && <span className="error">Pole wymagane</span>}
        </div>
        <div>
          <input
            type="email"
            style={errors.email ? styles.error : null }
            name="email"
            placeholder="Podaj adres e-mail"
            ref={register({
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              required: true,
            })}

          />
          {errors.email && <span className="error">Pole wymagane</span>}
        </div>
        <div>
          <textarea
            name="bio"
            style={errors.bio ? styles.error : null }
            placeholder="Krótkie bio"
            ref={register({ required: true })}

          />
          {errors.bio && <span className="error">Pole wymagane</span>}
        </div>
        <div>
          <input
            type="radio"
            id="sex-m"
            name="sex"
            value="M"
            ref={register}
            defaultChecked
          />
          <label htmlFor="sex-m">Mężczyzna</label>
          <input type="radio" id="sex-f" name="sex" value="F" />
          <label htmlFor="sex-f">Kobieta</label>
        </div>
        <div>
          <input
            id="rules"
            style={errors.rules ? styles.error : null }
            type="checkbox"
            name="rules"
            ref={register({ required: true })}

          />
          <label htmlFor="rules">Akceptuję regulamin</label>
          {errors.rules && <span className="error">Pole wymagane</span>}
        </div>
        <div>
          <button type="submit">Prześlij</button>
        </div>
      </form>
      {isSubmitted && <p>Dziękujemy za wysłanie</p>}
    </div>
  );
}

export default FormModTwo;
