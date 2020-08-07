import { useState } from 'react';

function useForm(defaultValue) {
  const [values, setValues] = useState(defaultValue);

  const setValue = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const name = e.target.getAttribute('name') || '';

    setValue(name, value);
  };

  const cleanForm = () => {
    setValues(defaultValue);
  };

  return {
    values,
    handleChange,
    cleanForm,
  };
}

export default useForm;
