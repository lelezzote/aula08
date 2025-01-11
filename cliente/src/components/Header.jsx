import React from 'react';
import styles from '../styles/header.module.css';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default function Header({roupas,  setRoupas}) {
  
//de A para Z
const ordemAz = () => {
  const listaOrdenada = [...roupas].sort((a, b) => a.item.localeCompare(b.item));
   setRoupas(listaOrdenada);
 }
 
 //de Z para A
 const ordemZa = () => {
   const listaOrdenada = [...roupas].reverse((a, b) => a.item.localeCompare(b.item));
    setRoupas(listaOrdenada);
  }
 
  //do MAIOR para o MENOR
 const precoDescrescente = () => {
     const filtro = [...roupas].sort((a, b) => b.preco - a.preco);
     setRoupas(filtro);
 }
 
 //do MENOR para o MAIOR
 const precoCrescente = () => {
   const filtro = [...roupas].sort((a, b) => a.preco - b.preco);
   setRoupas(filtro);
 }
 
//pesquisar
const buscaProdutos = (valor) => {
  const busca = valor.toLowerCase();
  const produtosFiltrados = roupas.filter((produto) =>
    produto.item.toLowerCase().includes(busca)
  );
  setRoupas(); 
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


  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarHeader}>
        <ul className={styles.navbarSecond}>
          <img className={styles.logoNav} src="/icons/logo.jpeg" />
        </ul>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarLi}>
            <Link className={styles.navLink} to="/cadastro">
              Cadastro
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link className={styles.navLink} to="/alterar/:id">
              Alterar
            </Link>
          </li>
        </ul>

        <div className={styles.search}>
          <input onChange={(event) => buscaProdutos(event.target.value)} type="text" placeholder="Buscar..." />
          <button>🔍</button>
        </div>

        <Button variant="outlined" onClick={() => exportarPDF()}>
        Gerar PDF
      </Button>

 <div className={styles.filters}>
        <div className={styles.icon}>
        <span><img className={styles.menu} src="/icons/icons8-cardápio-50.png"/></span> 
          <div className={styles.filterOptions}>
          <button onClick={() => ordemAz()}>AZ</button>
          <button onClick ={() => ordemZa()}>ZA</button>
          <button onClick ={() => precoDescrescente()}>Descrecente</button>
          <button onClick ={() => precoCrescente()}>Crescente</button>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}
