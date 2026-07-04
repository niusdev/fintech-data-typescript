type TrasacaoValor = Transacao & { valor: number };

function filtrarValor(transacao: Transacao): transacao is TrasacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  public total;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }

  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, current) => {
      return acc + current.valor;
    }, 0);
  }
}
