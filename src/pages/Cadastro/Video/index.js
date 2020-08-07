import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import moviesRepository from '../../../repositories/movies';
import categoriesRepository from '../../../repositories/Categories';

function CadastroVideo() {
  const history = useHistory();

  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map((category) => category.titulo);

  const { handleChange, values, cleanForm } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=V7oUDL7E1g4',
    categoria: 'BackEnd',
  });

  useEffect(() => {
    categoriesRepository.getAll()
      .then((categoriesResponse) => {
        setCategories(categoriesResponse);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const { id: categoriaId } = categories.find((c) => c.titulo === values.categoria);
        console.log('CategoriaId', categoriaId);

        moviesRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
