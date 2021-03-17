import React, { useState } from 'react';

function Form() {
  const [isSubmited, setIsSubmited] = useState();

  const handleShowForm = () => {
    setIsSubmited(!isSubmited);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(!isSubmited);
  }

  return (
    <div>
      {!isSubmited ?
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="Podaj imię" required />
        </div>
        <div>
          <input type="email" name="email" placeholder="Podaj adres e-mail" required />
        </div>
        <div>
          <textarea name="bio" placeholder="Krótkie bio" required />
        </div>
        <div>
          <input type="radio" id="sex-m" name="sex" value="M" required />
          <label htmlFor="sex-m">Mężczyzna</label>
          <input type="radio" id="sex-f" name="sex" value="F" required />
          <label htmlFor="sex-f">Kobieta</label>
        </div>
        <div>
          <input id="rules" type="checkbox" name="rules" required />
          <label htmlFor="rules">Akceptuję regulamin</label>
        </div>
        <div>
          <button type="submit">Prześlij</button>
        </div>

      </form> :
      <div>
        <p>Working</p>
        <button onClick={handleShowForm}>Again</button>
      </div>
      }
    </div>
  )
}

export default Form;