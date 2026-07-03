import fetchData from "./fetchData.js";
import moedaParaNumber from "./moedaParaNumber.js";
import normalizarTransacao from "./normalizarTransacao.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json",
  );
  if (!data) return;
  
  const transacoes = data.map((t) => normalizarTransacao(t));

  transacoes.forEach((t) => {
    moedaParaNumber(t.moeda);
  });

  console.log(transacoes);
}

handleData();
