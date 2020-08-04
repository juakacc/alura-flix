import React, {useState} from "react";
import {Link} from "react-router-dom";

import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const defaultValue = {
    name: "",
    description: "",
    color: "#000",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(defaultValue);

  const setValue = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.getAttribute("name") || "";

    setValue(name, value);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name} </h1>

      <form
        onSubmit={e => {
          e.preventDefault();
          setCategorias([...categorias, values]);
          setValues(defaultValue);
        }}
      >
        <FormField
          label="Nome"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="description"
              value={values.description}
              onChange={e =>
                setValues({...values, description: e.target.value})
              }
            ></textarea>
          </label>
        </div>

        <FormField
          label="Cor"
          name="color"
          type="color"
          value={values.color}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
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
