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
  preencherTabela(transacoes);
}

function preencherTabela(transacoes: Trasacao[]): void {
  const tabela = document.querySelector("#transacoes tbody");
  if (!tabela) return;
  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
      <tr>
        <th>${transacao.nome}</th>
        <th>${transacao.email}</th>
        <th>R$ ${transacao.moeda}</th>
        <th>${transacao.pagamento}</th>
        <th>${transacao.status}</th>
      </tr>
    `;
  });
}

handleData();
