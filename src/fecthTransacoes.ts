
export async function fecthTransacoes(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`Erro ao buscar dados! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Erro na requisição!", error);
  }
}
