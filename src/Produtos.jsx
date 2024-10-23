import React from 'react';
import './App.css';

const produtos = [
  {
    id: 1,
    imagem: 'https://static.paodeacucar.com/img/uploads/1/747/584747.png',
    titulo: 'Produto 1',
    preco: 'R$ 10,00',
  },
  {
    id: 2,
    imagem:
      'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/c/r/crystal_500g.jpg',
    titulo: 'Produto 2',
    preco: 'R$ 20,00',
  },
  {
    id: 3,
    imagem:
      'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F400534%2FMacarrao-de-Semola-com-Ovos-Caseiro-Talharim-2-Roseane-Pacote-500g.jpg%3Fv%3D638549374516000000',
    titulo: 'Produto 3',
    preco: 'R$ 30,00',
  },
];

function Produtos() {
  return (
    <div className="App">
      <h1></h1>
      <div className="produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto">
            <img src={produto.imagem} alt={produto.titulo} />
            <h2>{produto.titulo}</h2>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
