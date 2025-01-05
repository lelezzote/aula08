import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ListaProdutos from "../components/ListaProdutos";

export default function Home() {
  const [roupas, setRoupas] = useState([]);

  useEffect(() => {
    const buscarRoupas = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/roupas");
        if (resposta.ok) {
          const dados = await resposta.json();
          setRoupas(dados);
        } else {
          console.error("Erro ao buscar roupas: ", resposta.status);
        }
      } catch (error) {
        console.error("Erro na comunicação com o servidor:", error);
      }
    };
    buscarRoupas();
  }, []);

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
      roupa.marca,
    ]);

    doc.text("Lista de Roupas", 10, 10);
    doc.autoTable({
      head: [["ID", "Item", "Imagem", "Tamanho", "Composição", "Cor", "Categoria", "Preço", "Marca"]],
      body: tabelaDados,
    });

    doc.save("lojaDeRoupas.pdf");
  };

  if (roupas.length === 0) {
    return <p>Carregando roupas...</p>;
  }

  return (
    <div>
      <Button variant="outlined" onClick={() => exportarPDF()}>
        Gerar PDF
      </Button>
   <ListaProdutos produtos={roupas} remover={remover}/>
    </div>
  );
}
