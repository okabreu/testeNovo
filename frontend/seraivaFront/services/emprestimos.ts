import { BACKEND_URL } from "~/models/app";
import type { Pagination } from "~/models/pagination";
import type { Emprestimo } from "~/models/emprestimo";

export const getEmprestimos = (numeroPagina: number = 0): Promise<Pagination<Emprestimo>|null>  => {
  return useFetch<Pagination<Emprestimo>>(`${BACKEND_URL}/emprestimo?page=${numeroPagina}`)
    .then(resposta=> {
      return Promise.resolve(resposta.data.value);      
    })
    .catch(error=>{
      console.log("error", error);
      return Promise.resolve(null);
    })  
};