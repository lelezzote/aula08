import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registrar() {
   
  const[item, setItem] = useState([]);

  const[imagem, setImagem] = useState([]);

  const[tamanho, setTamanho] = useState([]);

  const[composicao, setComposicao] = useState([]);

  const[cor, setCor] = useState([]);

  const[categoria, setCategoria] = useState([]);

  const[preco, setPreco] = useState([]);

  const[marca, setMarca] = useState([]);


  const navigation = useNavigate();

  const registro = async (event) => {
    event.preventDefault(); 
   
    try{
      const resposta = await fetch ('http://localhost:3000/roupas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
         item,
         imagem,
         tamanho,
         composicao,
         cor,
         categoria,
         preco,
         marca,
        })
      });
      if (resposta.ok) {
        navigation('/')
      }
       }catch {
        alert("Ocorreu um erro na aplicação 😭")
       }
    
  }

  return (
        <>
        <main>
          <form onSubmit={registro}>
       <div>
          <label htmlFor="item">Item:</label>
          <input 
            type="text"
            value={item}
            onChange={(event) => {setItem(event.target.value)}} 
            placeholder="Digite o nome do Item"
            
          />
        </div>

        <div>
          <label htmlFor="imagem">Imagem:</label>
          <input
            type="imagem"
            value={imagem}
            onChange={(event) => {setImagem(event.target.value)}}
            placeholder="Digite a URL da Imagem"
          
          />
        </div>

        <div>
            <label htmlFor="tamanho">Tamanho:</label>
            <input
              type="text"
              value={tamanho}
              onChange={(event) => setTamanho(event.target.value)}
              placeholder="Digite os tamanhos disponíveis"
            />
          </div>

          <div>
            <label htmlFor="composicao">Composição:</label>
            <input
              type="text"
              value={composicao}
              onChange={(event) => setComposicao(event.target.value)}
              placeholder="Digite a composição do material"
            />
          </div>

          <div>
            <label htmlFor="cor">Cor:</label>
            <input
              type="text"
              value={cor}
              onChange={(event) => setCor(event.target.value)}
              placeholder="Digite a cor"
            />
          </div>

          <div>
            <label htmlFor="categoria">Categoria:</label>
            <input
              type="text"
              value={categoria}
              onChange={(event) => setCategoria(event.target.value)}
              placeholder="Digite a categoria"
            />
          </div>

          <div>
            <label htmlFor="preco">Preço:</label>
            <input
              type="text"
              value={preco}
              onChange={(event) => setPreco(event.target.value)}
              placeholder="Digite o preço"
            />
          </div>

          <div>
            <label htmlFor="marca">Marca:</label>
            <input
              type="text"
              value={marca}
              onChange={(event) => setMarca(event.target.value)}
              placeholder="Digite a marca"
            />
          </div>

          <button type="submit">Registrar</button>
        </form>
      </main>
    </>
  );
}