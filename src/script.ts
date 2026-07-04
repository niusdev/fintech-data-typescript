import fetchData from "./fetchData.js";
import moedaParaNumber from "./moedaParaNumber.js";
import normalizarTransacao from "./normalizarTransacao.js";
import stringToDate from "./stringToData.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json",
  );
  if (!data) return;

  const transacoes = data.map((t) => normalizarTransacao(t));
  console.log(transacoes);
}

handleData();
