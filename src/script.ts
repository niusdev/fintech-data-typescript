import fetchData from "./fetchData.js";

interface TransacaoAPI {
  Status: string;
  ID: number;
  Data: string;
  Nome: string;
  ["Forma de Pagamento"]: string;
  Email: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: number;
}

async function handleData() {
  const data = await fetchData<TransacaoAPI>(
    "https://api.origamid.dev/json/transacoes.json",
  );
  if (data) {
    
  }
}
