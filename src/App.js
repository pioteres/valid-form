import Form from './components/Form';
import MyForm from './components/MyForm';
import FormModTwo from './components/FormModTwo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Form />
      <h3>Z biblioteką Formik</h3>
      <MyForm />
      <h3>z biblioteką react-hook-form</h3>
      <FormModTwo />
    </div>
  );
}

export default App;
