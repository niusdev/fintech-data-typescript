import fetchData from "./fetchData.js";
type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacaoStatus =
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Paga"
  | "Estornada";

interface TransacaoAPI {
  Status: TransacaoStatus;
  ID: number;
  Data: string;
  Nome: string;
  ["Forma de Pagamento"]: TransacaoPagamento;
  Email: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: number;
}

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json",
  );
  if (data) {
    console.log(data);
  }
}

handleData();
