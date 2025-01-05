import React from "react";

export default function ListaProdutos({ produtos, remover }) {
  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <img 
            src={produto.imagem} 
            alt={produto.item} 
          />
          <h3>{produto.item}</h3>
          <p><strong>Tamanho:</strong> {produto.tamanho}</p>
          <p><strong>Composição:</strong> {produto.composicao}</p>
          <p><strong>Cor:</strong> {produto.cor}</p>
          <p><strong>Categoria:</strong> {produto.categoria}</p>
          <p><strong>Preço:</strong> {produto.preco}</p>
          <p><strong>Marca:</strong> {produto.marca}</p>
          <div>
            <button onClick={() => remover(produto.id)}>
              🗑️ Remover
            </button>
            <button>Alterar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

