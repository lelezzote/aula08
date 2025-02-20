import React from "react";
import styles from '../styles/listaProdutos.module.css';
import { Link } from "react-router-dom";

export default function ListaProdutos({ produtos, remover }) {
  return (
    <div className={styles.produtoLista}>
      {produtos.map((produto) => (
        <div className={styles.produtoCard} key={produto.id}>
          <img 
            className={styles.image} 
            src={produto.imagem} 
            alt={produto.item}/>
          <div className={styles.produtoTituloContainer}>
             <h2 className={styles.produtoTitulo}>{produto.item}</h2>
             <span className={styles.produtoPreco}>R$ {produto.preco},00</span>
          </div>
          <p className={styles.produtoInfo}><strong>Tamanho:</strong> {produto.tamanho}</p>
          <p className={styles.produtoInfo}><strong>Composição:</strong> {produto.composicao}</p>
          <p className={styles.produtoInfo}><strong>Cor:</strong> {produto.cor}</p>
          <p className={styles.produtoInfo}><strong>Categoria:</strong> {produto.categoria}</p>
          <p className={styles.produtoInfo}><strong>Marca:</strong> {produto.marca}</p>
          <div className={styles.buttonGroup}>
            
            <button className={styles.buttonRemover} onClick={() => remover(produto.id)}>
              🗑️ 
            </button>

            <Link to={'/alterar/' + produto.id}>
          <button>Alterar</button>
          </Link>
          </div>
          
        </div>
      ))}
    </div>
  );
}
