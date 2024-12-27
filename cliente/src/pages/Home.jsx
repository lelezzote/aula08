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
       await fetch('http://localhost:3000/usuarios/' + id, {
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
      roupa.nome,
      roupa.email,
    ])

    doc.text("Lista de Usuários", 10, 10);
    doc.autoTable({
      head: [["ID", "Nome", "E-mail"]],
      body: tabelaDados,
    });

    doc.save("alunosIFMS.pdf");
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
          <td>{roupa.nome}</td>
          <td>{roupa.email}</td>
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