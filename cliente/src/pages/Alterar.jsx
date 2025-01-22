import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import styles from '../styles/alterar.module.css';



export default function Alterar () {
    const {id} = useParams();


    const[item, setItem] = useState('');
    
      const[imagem, setImagem] = useState('');
    
      const[tamanho, setTamanho] = useState('');
    
      const[composicao, setComposicao] = useState('');
    
      const[cor, setCor] = useState('');
    
      const[categoria, setCategoria] = useState('');
    
      const[preco, setPreco] = useState('');
    
      const[marca, setMarca] = useState('');

      const navigation = useNavigate();

      useEffect(() => {
       const busca = async() => {
        const resposta = await fetch ('http://localhost:3000/roupas/' + id);
        const dados = await resposta.json();
        setItem(dados.item);
        setImagem(dados.imagem);
        setTamanho(dados.tamanho);
        setComposicao(dados.composicao);
        setCor(dados.cor);
        setCategoria(dados.categoria);
        setPreco(dados.preco);
        setMarca(dados.marca)
       }
    busca();
      }, [id]);
    
      const alterar = async(event) => {
        event.preventDefault();
        try{
          await fetch ('http://localhost:3000/roupas/' + id, 
            {
                method: 'PUT',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify({
                    item,
                    imagem,
                    tamanho,
                    composicao,
                    cor,
                    categoria,
                    preco,
                    marca
                })
            }
        );
        navigation('/')
        }catch{
         alert('Erro ao alterar');
        }
      }
    

      return (
          <>
          <main className={styles.main}>
            <form className={styles.form} onSubmit={alterar}>
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
      
              <button className={styles.button} type="submit">Alterar</button>
            </form>
          </main>
        </>
        );
      }