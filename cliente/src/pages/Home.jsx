import { useEffect, useState } from "react";
import {jsPDF} from "jspdf";
import "jspdf-autotable";
import {Button} from "@mui/material";

                 
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
  }, [roupas])

  const remover = async (id) => {
    try{
       await fetch('http://localhost:3000/roupas/' + id, {
         method: 'DELETE'
       });
    }catch{
      alert("Eita, deu erro! 😞")
    }
  }

  const exportarPDF = () => {
    const doc = new jsPDF();
    const tabelaDados = roupas.map((roupa) => [
      roupa.id,
      roupa.item,
      roupa.imagem,
      roupa.tamanho,
      roupa.composicao,
      roupa.cor,
      roupa.categoria,
      roupa.preco,
      roupa.marca
    ])

    doc.text("Lista de Roupas", 10, 10);
    doc.autoTable({
      head: [["ID", "Item", "Imagem", "Tamanho", "Composicao", "Cor", "Categoria", "Preco", "Marca"]],
      body: tabelaDados,
    });

    doc.save("lojaDeRoupas.pdf");
  };

  return (
    <div>
      <Button variant="outlined" onClick={() => exportarPDF()}> Gerar PDF </Button>
    
    <table>
      <tr>
        <td>Nome</td>
        <td>E-mail</td>
      </tr>
      {roupas.map((roupa) =>
        <tr key={roupa.id}>
          <td>{roupa.item}</td>
          <td>{roupa.imagem}</td>
          <td>{roupa.tamanho}</td>
          <td>{roupa.composicao}</td>
          <td>{roupa.cor}</td>
          <td>{roupa.categoria}</td>
          <td>{roupa.preco}</td>
          <td>{roupa.marca}</td>
          <td> <button onClick={() => remover(roupa.id)}>🗑️</button> </td>
          <Link to={'/alterar/' + roupa.id}>
          <button>Alterar</button>
          </Link>
        </tr>
      )}
    </table>
    </div>
  );
}