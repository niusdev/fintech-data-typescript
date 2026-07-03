//moeda = "452,00" | "-"
export default function moedaParaNumber(moeda: string): number | null {
    const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
    if(isNaN(numero)){
        return null;
    } else {
        return numero;
    }
}
