Projeto desenvolvido durante a Imersão React, realizado pela Alura.

Um projeto para exposição de vídeos do Youtube seguindo determinados critérios.

Visualize o resultado clicando [aqui](https://alura-flix.juakacc.vercel.app)

## Tecnologias utilizadas

Foram utilizadas diversas tecnologias, dentre elas algumas novidades, aprendendo sempre mais:

- Styled-components - _criando componentes customizados_;
- Json server - _para emular um simples Back-end :)_;
- PropTypes - _ajuda bastante na documentação do código_;
- EsLint - _para organização do código fonte_;
- Concurrently - _executando scripts concorrentemente_;

## Executando o projeto localmente

Para executar o projeto localmente é muito simples, seguindo uma lista de comandos:

```shell
# clone o projeto
$ git clone https://github.com/juakacc/alura-flix.git
# instale as depêndencias
$ npm i
```

Para executar o projeto você pode utilizar os comandos:

### `npm run dev`

Utiliza o pacote `concurrently` para _subir_ ambos, tanto o frontend como o backend;

Provavelmente o servidor estará disponível em: [localhost:8080](http://localhost:8080). Você pode utilizar esse endereço para fazer alguns testes.

Já o frontend ficará disponível em: [localhost:3000](http://localhost:3000). Consumindo a API que foi iniciada. Acesse em um browser e verifique o resultado.

### `npm start`

Para levantar apenas a API Rest, utilizando o pacote `json-server`.

### `npm run startfront`

Para levantar apenas o frontend, com o React.

## Contribuições

Sinta-se a vontade para contribuir, seja com sugestões de novas funcionalidades, seja com contribuições de código.