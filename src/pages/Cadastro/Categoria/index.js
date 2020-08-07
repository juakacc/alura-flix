import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import config from '../../../config';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const defaultValue = {
    name: '',
    description: '',
    color: '#000',
  };

  const { values, handleChange, cleanForm } = useForm(defaultValue);

  useEffect(() => {
    fetch(`${config.URL_BACKEND}/categorias`).then(async (response) => {
      const responseJson = await response.json();
      setCategorias([...responseJson]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCategorias([...categorias, values]);
          cleanForm();
        }}
      >
        <FormField
          label="Nome"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="description"
          type="textarea"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          name="color"
          type="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((item, index) => (
          <li key={`${index}-${item.name}`}>{item.name}</li>
        ))}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
