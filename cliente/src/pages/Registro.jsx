import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/registro.module.css'; 


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
    <main className={styles.main}>
      <form className={styles.form} onSubmit={registro}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="item">Item:</label>
          <input
            className={styles.input}
            type="text"
            value={item}
            onChange={(event) => setItem(event.target.value)}
            placeholder="Digite o nome do Item"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="imagem">Imagem:</label>
          <input
            className={styles.input}
            type="text"
            value={imagem}
            onChange={(event) => setImagem(event.target.value)}
            placeholder="Digite a URL da Imagem"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="tamanho">Tamanho:</label>
          <input
            className={styles.input}
            type="text"
            value={tamanho}
            onChange={(event) => setTamanho(event.target.value)}
            placeholder="Digite os tamanhos disponíveis"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="composicao">Composição:</label>
          <input
            className={styles.input}
            type="text"
            value={composicao}
            onChange={(event) => setComposicao(event.target.value)}
            placeholder="Digite a composição do material"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="cor">Cor:</label>
          <input
            className={styles.input}
            type="text"
            value={cor}
            onChange={(event) => setCor(event.target.value)}
            placeholder="Digite a cor"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="categoria">Categoria:</label>
          <input
            className={styles.input}
            type="text"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
            placeholder="Digite a categoria"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="preco">Preço:</label>
          <input
            className={styles.input}
            type="text"
            value={preco}
            onChange={(event) => setPreco(event.target.value)}
            placeholder="Digite o preço"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="marca">Marca:</label>
          <input
            className={styles.input}
            type="text"
            value={marca}
            onChange={(event) => setMarca(event.target.value)}
            placeholder="Digite a marca"
          />
        </div>

        <button className={styles.button} type="submit">Registrar</button>
      </form>
    </main>
  </>
  );
}