import React from "react";
import styles from '../styles/listaProdutos.module.css';


export default function ListaProdutos({ produtos, remover }) {
  return (
    <div className="productList">
  {produtos.map((produto) => (
    <div className="productCard" key={produto.id}>
      <img 
        className="productImage" 
        src={produto.imagem} 
        alt={produto.item} 
      />
      <h3 className="productTitle">{produto.item}</h3>
      <p className="productDetail"><strong>Tamanho:</strong> {produto.tamanho}</p>
      <p className="productDetail"><strong>Composição:</strong> {produto.composicao}</p>
      <p className="productDetail"><strong>Cor:</strong> {produto.cor}</p>
      <p className="productDetail"><strong>Categoria:</strong> {produto.categoria}</p>
      <p className="productDetail"><strong>Preço:</strong> {produto.preco}</p>
      <p className="productDetail"><strong>Marca:</strong> {produto.marca}</p>
      <div className="buttonGroup">
      <button onClick={() => remover(produto.id)}>
              🗑️ Remover
            </button>
        <button className="alterButton">Alterar</button>
      </div>
    </div>
  ))}
</div>

  );
}

