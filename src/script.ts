import { fecthTransacoes } from "./fecthTransacoes.js";
const data = await fecthTransacoes("https://api.origamid.dev/json/transacoes.json");;

console.log(data)
