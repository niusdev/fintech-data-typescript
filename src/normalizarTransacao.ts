import moedaParaNumber from "./moedaParaNumber.js";
import stringToDate from "./stringToData.js";

declare global {
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

  interface Trasacao {
    nome: string;
    id: number;
    data: Date;
    status: TransacaoStatus;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
  }
}

export default function normalizarTransacao(transacao: TransacaoAPI):Trasacao {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: stringToDate(transacao.Data),
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao["Valor (R$)"],
    valor: moedaParaNumber(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]),
  };
}
