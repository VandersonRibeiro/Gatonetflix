import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link,useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo(){
    const history = useHistory();
    const {handleChange, values } = useForm({
        titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
    });
   return (
    <PageDefault>
        <h1>Cadastro de Video</h1>

        <form onSubmit={(event) => {

        // eslint-disable-next-line
        alert('Vídeo Cadastrado com sucessso');

        history.push('/');
        }}
        >
         <FormField
          label="Título do Vídeo"
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
        </form>

        <Button type="submit">
            cadastrar
        </Button>

        <Link to="/cadastro/Categoria">
            Cadastrar Categoria
        </Link>
    </PageDefault>

   );
}
export default CadastroVideo;