import countBy from "./countBy.js";

type TrasacaoValor = Transacao & { valor: number };

function filtrarValor(transacao: Transacao): transacao is TrasacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  public total;
  public pagamentos;
  public status;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamentos = this.setPagamentos();
    this.status = this.setStatus();
  }

  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, current) => {
      return acc + current.valor;
    }, 0);
  }

  private setPagamentos() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }

  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status));
  }
}
