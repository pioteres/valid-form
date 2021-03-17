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
      <form>
        <div>
          <input type="text" name="name" placeholder="Podaj imię" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Podaj adres e-mail" />
        </div>
        <div>
          <textarea name="bio" placeholder="Krótkie bio" />
        </div>
        <div>
          <input type="radio" id="sex-m" name="sex" value="M" />
          <label for="sex-m">Mężczyzna</label>
          <input type="radio" id="sex-f" name="sex" value="F" />
          <label for="sex-f">Kobieta</label>
        </div>
        <div>
          <input id="rules" type="checkbox" name="rules" />
          <label for="rules">Akceptuję regulamin</label>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>Prześlij</button>
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