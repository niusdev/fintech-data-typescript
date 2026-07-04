import Estatisticas from "./Estatisticas.js";
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
  preencherEstatisticas(transacoes);
  preencherTabela(transacoes);
}

function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes);
  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}

function preencherTabela(transacoes: Transacao[]): void {
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
