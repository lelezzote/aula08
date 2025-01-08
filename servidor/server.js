const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let roupas = [   {

    id: 1,

    item: "Camisa",

    imagem: "https://m.media-amazon.com/images/I/61lxy8H1RoL._AC_SX679_.jpg",

    tamanho:["PP-P-M-G-GG-XGG"],

    composicao:"100% Linho",

    cor: "Branco",

    categoria: "Promoção",

    preco: "R$ 999,00",

    marca: "Palmeira"

},

{
    id: 2,

    item: "Cropped",

    imagem: "https://m.media-amazon.com/images/I/31BaPxr3CVL._AC_SY1000_.jpg",

    tamanho:["PP-P-M-G-GG-XGG"],

    composicao:"100% Algodão",

    cor: "Branco",

    categoria: "Promoção",

    preco: "R$ 29,90",

    marca: "Flamingo"

},

{

    id: 3,

    item: "Cropped",

    imagem: "https://photos.enjoei.com.br/cropped-lilas-shein-96792815/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8zNjE1MTg3OC81OTJlMDM4YmZiZDVkNjAzZWEwNzhkYzUxNTZhYTJiYS5qcGc",

    tamanho:["PP-P-M-G-GG-XGG"],

    composicao:"100% Algodão",

    cor: "Lilás",

    categoria: "Verão",

    preco: "R$ 21,90",

    marca: "Entalpia"

},

{

    id: 4,

    item: "Cropped",

    imagem: "https://m.media-amazon.com/images/I/51dARXqaBHL._AC_SX569_.jpg",

    tamanho:["PP-P-M-G-GG-XGG"],

    composicao:"100% Algodão",

    cor: "Branco",

    categoria: "Promoção",

    preco: "R$ 21,99",

    marca: "Farmo"

},

{
    id:5,

    item:"Cropped",

    imagem: "https://img.ltwebstatic.com/images3_pi/2024/03/12/19/171023460157e6c89bbe4ae52c6f7a7774ce10191e_thumbnail_720x.webp",

    tamanho:["PP-P-M-G-GG-XGG"],

    composicao:"100% Algodão",

    cor: "Rosa",

    categoria: "Verão",

    preco: "R$ 41,90",

    marca: "Zere"

},

{
    id:6,

    item:"Short",

    imagem: "https://img01.ztat.net/article/spp-media-p1/83c92a636ce44b94bf00347adb31e87b/e4796f8b458d4bf5838ee4487dab7597.jpg?imwidth=762&filter=packshot",

    tamanho:["PP-P-M-G-GG-XGG"],

    composicao:"100% Algodão",

    cor: "Branco",

    categoria: "Promoção",

    preco: "R$ 69,90",

    marca: "Supra"

},

{
  id:7,

  item:"Short",

  imagem: "https://img.ltwebstatic.com/images3_pi/2024/03/15/f5/171049348267b565b123f07a444dbd2ddc274f521b_thumbnail_750x999.jpg",

    tamanho:["PP-P-M-G-GG-XGG"],

    composicao:"100% Algodão",

    cor: "Jeans",

    categoria: "Verão",

    preco: "R$ 49,90",

    marca: "Julenee"

},

{
  id:8,

  item:"Saia",

  imagem: "https://img.ltwebstatic.com/images3_pi/2023/08/25/b6/1692943533c864a9dc131725c29166d12eb9529f7e_thumbnail_720x.webp",

    tamanho:["PP-P-M-G-GG-XGG"],

    composicao:"100% Algodão",

    cor: "Roxa",

    categoria: "Verão",

    preco: "R$ 52,00",

    marca: "Crisonline"

},

{
  id:9,

  item:"Saia Jeans",
  
  imagem: "https://m.media-amazon.com/images/I/519GCAws2AL._AC_SY1000_.jpg",

  tamanho:["PP-P-M-G-GG-XGG"],

  composicao:"100% Algodão",

  cor: "Jeans",

  categoria: "Promoção",

  preco: "R$ 59,90",

  marca: "Zandrade"

},

]

app.post('/roupas', (req, res) => {
    const { item, imagem, tamanho, composicao, cor, categoria, preco, marca } = req.body;
    
    if (!item || !imagem || !tamanho || !composicao || !cor || !categoria || !preco || !marca) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
    }

    const novoRoupa = { 
        id: roupas.length + 1, 
        item, 
        imagem, 
        tamanho, 
        composicao, 
        cor, 
        categoria, 
        preco, 
        marca 
    };
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
        return res.status(404).json({ erro: 'Roupa não encontrada' });
    }
    
    res.status(200).json(roupa);
});

app.put('/roupas/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    
    const roupa = roupas.find(u => u.id === parseInt(id));
    
    if (!roupa) {
        return res.status(404).json({ erro: 'Roupa não encontrada' });
    }
    
    roupa.item = item || roupa.item;
    roupa.imagem = imagem || roupa.imagem;
    roupa.tamanho = tamanho || roupa.tamanho;
    roupa.composicao = composicao || roupa.composicao;
    roupa.cor = cor || roupa.cor;
    roupa.categoria = categoria || roupa.categoria;
    roupa.preco = preco || roupa.preco;
    roupa.marca = marca || roupa.marca;
    
    res.status(200).json(roupa);
});

app.delete('/roupas/:id', (req, res) => {
    const { id } = req.params;
    const index = roupas.findIndex(u => u.id === parseInt(id));
    
    if (index === -1) {
        return res.status(404).json({ erro: 'Roupa não encontrada' });
    }
    
    roupas.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
