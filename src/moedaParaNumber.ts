/**
 * @param moeda : string. Exemplo: '1.250,00' 
 * @returns number. Exemplo: '1250.00'
 */
export default function moedaParaNumber(moeda: string): number | null {
  const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
  return isNaN(numero) ? null : numero;
}
