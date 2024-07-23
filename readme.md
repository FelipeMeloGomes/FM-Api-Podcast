# Podcast Episodes API

## Descrição

A **Podcast Episodes API** é uma interface que permite listar, adicionar, atualizar e excluir episódios de podcasts. Esta API foi projetada para ser simples e eficiente, facilitando a integração com outras aplicações e serviços.

## Como Executar

### Instale as dependências:

```
npm install
```

## comandos para rodar o back:

```
"start:dev": "tsx --env-file=.env src/server.ts"
```

```
"start:watch": "tsx watch --env-file=.env src/
server.t
```

## Endpoints

### Listar Episódios

-   **Descrição:** Retorna uma lista de todos os episódios de podcasts.
-   **URL:** `/episode`, /episode?=flow
-   **Método:** `GET`
-   **Resposta:**
    ```json
    [
        {
            "podcastName": "flow",
            "episode": "CBUM - Flow #319",
            "videoId": "pQSuQmUfS30",
            "categories": ["saúde", "esporte", "bodybuilder"]
        }
    ]
    ```
