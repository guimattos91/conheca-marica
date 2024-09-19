# Conheça Maricá

Conheça Maricá é um site dedicado ao turismo na cidade de Maricá. O projeto serve como um guia completo para turistas, oferecendo informações detalhadas sobre pontos turísticos, restaurantes, hotéis, comércios e eventos locais. Além disso, o site inclui mapas que ajudam a localizar esses lugares dentro da região, facilitando a experiência de quem visita a cidade.

# Veja o Projeto Rodando:
[Conheça Maricá](https://bit.ly/conhecamaricaproject)


## Objetivo do Projeto

O principal objetivo deste projeto é ajudar os turistas que visitam Maricá a conhecerem mais sobre os diversos locais que a cidade oferece. O site funciona como um guia, fornecendo informações valiosas para que os visitantes possam aproveitar ao máximo a sua estadia.

## Funcionalidades

- Listagem de pontos turísticos e eventos.
- Sugestões de restaurantes, hotéis e comércios.
- Mapas interativos indicando os locais dentro da região.
- Informações detalhadas sobre cada local, incluindo horários de funcionamento, endereço, e avaliações.

## Pré-requisitos

Para executar este projeto, você precisará ter os seguintes itens configurados:

- **Use o arquivo `.env` da API Conheça Maricá**
- Instale as extensões ESLint e EditorConfig para o VS Code.
- **Não instale a extensão Prettier.**

Adicione as seguintes configurações ao arquivo de configurações do VS Code:

```json
"[javascript]": {
    "editor.defaultFormatter": null
},
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
},
"editor.formatOnSave": false,
"eslint.codeActionsOnSave.mode": "all",
"eslint.packageManager": "yarn",
"eslint.validate": [
    "javascript",
    "javascriptreact"
]
```

## Instalação e Configuração
Para configurar o projeto em seu ambiente local, siga estas etapas:

Clone o repositório:
```
git clone <URL_DO_REPOSITORIO>
```

Copie o arquivo de exemplo .env e configure suas variáveis de ambiente:
```
cp .env.example .env
```

Instale as dependências:

```
yarn
```

Execute o projeto em modo de desenvolvimento:

```
yarn dev
```

## Como Usar
Após a instalação e configuração, você pode acessar o site localmente para explorar suas funcionalidades. O site fornecerá informações detalhadas sobre os pontos turísticos, restaurantes, hotéis e outros locais de interesse na cidade de Maricá.

## Testes
Para executar os testes, utilize o seguinte comando:
```
yarn test
```




## Credits
Este projeto foi feito a partir do template de: [https://github.com/fredsvanelli/vite-react-ts-eslint-prettier-editorconfig](https://github.com/fredsvanelli/vite-react-ts-eslint-prettier-editorconfig)
