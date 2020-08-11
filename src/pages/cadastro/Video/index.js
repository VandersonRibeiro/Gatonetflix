import React,{useEffect, useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link,useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const {handleChange, values } = useForm({
        titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
    });
    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            });
        
}, []);

   return (
    <PageDefault>
        <h1>Cadastro de Video</h1>

        <form onSubmit={(event) => {
            event.preventDefault();

        //alert('Vídeo Cadastrado com sucessso');

            const categoriaEscolhida = categorias.find((categoria) => {
                return categoria.tirulo === values.categoria;
            });

        videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
        })
        .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
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