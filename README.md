<div align="center">

# Fintech Data TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)

</div>

## Sobre

Projeto desenvolvido durante o curso de **TypeScript da Origamid**, com o objetivo de praticar tipagem estática aplicada a um cenário real: consumir uma API externa, normalizar dados que vêm "sujos" (valores em formato de moeda brasileira, datas em texto, chaves em português) e transformá-los em estatísticas exibidas na tela.

## O que aprendi / O que pratiquei:

- **Generics** para tipar respostas de API de forma reutilizável — `fetchData<T>` retorna `Promise<T | null>` sem depender de `any`.
- **Type guards** (`transacao is TrasacaoValor`) para filtrar transações com `valor` válido de forma que o TypeScript entenda o estreitamento de tipo depois do `.filter()`.
- **Global type augmentation** (`declare global`) para compartilhar os tipos `Transacao`, `TransacaoAPI`, `TransacaoStatus` e `TransacaoPagamento` entre arquivos sem precisar importar em todo lugar.
- **Union types literais** (`"Boleto" | "Cartão de Crédito"`) para restringir valores possíveis vindos da API, evitando strings mágicas.
- **Index signatures** (`interface CountList { [key: string]: number }`) para tipar objetos de contagem dinâmica, usados em `countBy`.
- **Normalização de dados de API**: a API devolve chaves em português com espaços (`"Forma de Pagamento"`, `"Valor (R$)"`) e valores como texto (`"1.250,00"`) — precisei escrever conversores próprios (`moedaParaNumber`, `stringToDate`) em vez de confiar em `Number()` ou `Date()` direto.
- **Classe para regras de negócio**: `Estatisticas` centraliza os cálculos (total, pagamentos por tipo, status, melhor dia da semana) em métodos privados, deixando o `script.ts` só responsável por renderizar na tela.
- **Tratamento de erro assíncrono**: `fetchData` captura falhas de rede/parse e retorna `null` em vez de deixar a exceção subir, permitindo tratar a ausência de dados no chamador.

## Como rodar

```bash
# Clone o repositório
git clone https://github.com/niusdev/fintech-data-typescript.git

# Entre na pasta do projeto
cd fintech-data-typescript

# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```

> Não é necessário `.env` — o projeto consome uma API pública de dados fictícios (`https://api.origamid.dev/json/transacoes.json`) direto no `script.ts`.

## Estrutura do projeto

```
src/
├── script.ts              # Ponto de entrada: busca os dados e preenche a tela
├── fetchData.ts           # Função genérica para requisições à API
├── normalizarTransacao.ts # Converte o formato da API para o formato usado no app
├── moedaParaNumber.ts      # Converte string de moeda BR ("1.250,00") em number
├── stringToData.ts         # Converte string de data/hora em objeto Date
├── countBy.ts              # Utilitário genérico de contagem por valor
└── Estatisticas.ts          # Classe com os cálculos de total, pagamentos, status e melhor dia
```

## Autor

Feito por **Vinícius Gomes Damascena**

[![GitHub](https://img.shields.io/badge/GitHub-niusdev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/niusdev)
