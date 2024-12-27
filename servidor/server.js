const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let roupas = [   {

    id: 1,

    item: "Cropped",

    imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.shein.com%2FSHEIN-ICON-Women-s-Spliced-Lace-Camisole-Tank-Top-p-27405945.html&psig=AOvVaw1YaUs1p3-S1H0KENBEq3e3&ust=1734458586391000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCV8fDvrIoDFQAAAAAdAAAAABAv",

    tamanho:["Tamanho: PP-P-M-G-GG-XGG"],

    composicao:"Composição: 100% Algodão",

    cor: "Preto",

    categoria: "Promoção",

    preco: "Preço: R$ 19,00",

    marca: "Palmeira"

},

{
    id: 2,

    item: "Cropped",

    imagem: "https://m.media-amazon.com/images/I/31BaPxr3CVL._AC_SY1000_.jpg",

    tamanho:["Tamanho: PP-P-M-G-GG-XGG"],

    composicao:"Composição: 100% Algodão",

    cor: "Branco",

    categoria: "Promoção",

    preco: "Preço: R$ 29,90",

    marca: "Flamingo"

},

{

    id: 3,

    imagem: "https://photos.enjoei.com.br/cropped-lilas-shein-96792815/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8zNjE1MTg3OC81OTJlMDM4YmZiZDVkNjAzZWEwNzhkYzUxNTZhYTJiYS5qcGc",

    tamanho:["Tamanho: PP-P-M-G-GG-XGG"],

    composicao:"Composição: 100% Algodão",

    cor: "Lilás",

    categoria: "Verão",

    preco: "Preço: R$ 21,90",

    marca: "Entalpia"

},

{

    id: 4,

    imagem: "https://m.media-amazon.com/images/I/51dARXqaBHL._AC_SX569_.jpg",

    tamanho:["Tamanho: PP-P-M-G-GG-XGG"],

    composicao:"Composição: 100% Algodão",

    cor: "Branco",

    categoria: "Promoção",

    preco: "Preço: R$ 21,99",

    marca: "Farmo"

},

{
    id:5,

    imagem: "https://img.ltwebstatic.com/images3_pi/2024/03/12/19/171023460157e6c89bbe4ae52c6f7a7774ce10191e_thumbnail_720x.webp",

    tamanho:["Tamanho: PP-P-M-G-GG-XGG"],

    composicao:"Composição: 100% Algodão",

    cor: "Rosa",

    categoria: "Verão",

    preco: "Preço: R$ 41,90",

    marca: "Zere"

},

{
    id:6,

    imagem: "https://img01.ztat.net/article/spp-media-p1/83c92a636ce44b94bf00347adb31e87b/e4796f8b458d4bf5838ee4487dab7597.jpg?imwidth=762&filter=packshot",

    tamanho:["Tamanho: PP-P-M-G-GG-XGG"],

    composicao:"Composição: 100% Algodão",

    cor: "Branco",

    categoria: "Promoção",

    preco: "Preço: R$ 69,90",

    marca: "Supra"

},

{
  id:7,

  imagem: "https://img.ltwebstatic.com/images3_pi/2024/03/15/f5/171049348267b565b123f07a444dbd2ddc274f521b_thumbnail_750x999.jpg",

    tamanho:["Tamanho: PP-P-M-G-GG-XGG"],

    composicao:"Composição: 100% Algodão",

    cor: "Jeans",

    categoria: "Verão",

    preco: "Preço: R$ 49,90",

    marca: "Julenee"

},

{
  id:8,

  imagem: "https://img.ltwebstatic.com/images3_pi/2023/08/25/b6/1692943533c864a9dc131725c29166d12eb9529f7e_thumbnail_720x.webp",

    tamanho:["Tamanho: PP-P-M-G-GG-XGG"],

    composicao:"Composição: 100% Algodão",

    cor: "Roxa",

    categoria: "Verão",

    preco: "Preço: R$ 52,00",

    marca: "Crisonline"

},

{
  id:9,

  imagem: "https://m.media-amazon.com/images/I/519GCAws2AL._AC_SY1000_.jpg",

  tamanho:["Tamanho: PP-P-M-G-GG-XGG"],

  composicao:"Composição: 100% Algodão",

  cor: "Jeans",

  categoria: "Promoção",

  preco: "Preço: R$ 59,90",

  marca: "Zandrade"

},

]

app.post('/roupas', (req, res) => {
    const { nome, email } = req.body;
    
    if (!nome || !email) {
        return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
    }

    const novoRoupa = { id: roupas.length + 1, nome, email };
    roupas.push(novoRoupa);
    
    res.status(201).json(novoRoupa);
});

app.get('/roupas', (req, res) => {
    res.status(200).json(roupas);
});

app.get('/roupas/:id', (req, res) => {
    const { id } = req.params;
    const roupa = roupas.find(u => u.id === parseInt(id));
    
    if (!roupa) {
        return res.status(404).json({ erro: 'Roupa não encontrado' });
    }
    
    res.status(200).json(roupa);
});

app.put('/roupas/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    
    const roupa = roupas.find(u => u.id === parseInt(id));
    
    if (!roupa) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    
    roupa.nome = nome || roupa.nome;
    roupa.email = email || roupa.email;
    
    res.status(200).json(roupa);
});

app.delete('/roupas/:id', (req, res) => {
    const { id } = req.params;
    const index = roupas.findIndex(u => u.id === parseInt(id));
    
    if (index === -1) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    
    roupas.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
