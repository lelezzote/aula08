import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Alterar () {
    const {id} = useParams();


    const[item, setItem] = useState([]);
    
      const[imagem, setImagem] = useState([]);
    
      const[tamanho, setTamanho] = useState([]);
    
      const[composicao, setComposicao] = useState([]);
    
      const[cor, setCor] = useState([]);
    
      const[categoria, setCategoria] = useState([]);
    
      const[preco, setPreco] = useState([]);
    
      const[marca, setMarca] = useState([]);

      const nagvigation = useNavigate();

      useEffect(() => {
       const busca = async() => {
        const resosta = await fetch ('http://localhost:3000/roupas/' + id);
        const dados = await resposta.json();
        setItem(dados.item);
        setImagem(dados.imagem)
       }
    busca();
      }, []);
    
      const alterar = async() => {
        try{
          await fetch ('http://localhost:3000/roupas/' + id, 
            {
                method: 'PUT',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify({
                    item:item,
                    imagem:imagem
                })
            }
        );
        navigation('/')
        }catch{
         alert('Erro ao alterar');
        }
      }
    


    return(
       <form onSubmit={alterar}>
        <input type = "text" value={item} onChange={(event) => setItem(event.target.value)}/>
        <input type = "text" value={imagem} onChange={(event) => setImagem(event.target.value)}/>
        <button>Alterar</button>
       </form>
        
    )
};