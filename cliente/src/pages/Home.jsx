import { useEffect, useState } from "react";
import ListaProdutos from "../components/ListaProdutos";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Header from "../components/Header" ;


export default function Home() {
  const [roupas, setRoupas] = useState([]);

  useEffect(() => {
    const buscarRoupas = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/roupas");
        const dados = await resposta.json();
        setRoupas(dados);
      } catch {
        alert('Ocorreu um erro no app!');
      }
    }
    buscarRoupas();
  }, [])


  const remover = async (id) => {
    try {
      await fetch("http://localhost:3000/roupas/" + id, {
        method: "DELETE",
      });
      
      setRoupas((prev) => prev.filter((roupa) => roupa.id !== id));
    } catch (error) {
      console.error("Erro ao remover:", error);
    }
  };



  if (roupas.length === 0) {
    return <Loading/>
  }

  return (
    <div>
     <Header roupas={roupas} setRoupas={setRoupas} />
   <ListaProdutos produtos={roupas} remover={remover}/>
   <Footer/>
    </div>
    
  );
}
