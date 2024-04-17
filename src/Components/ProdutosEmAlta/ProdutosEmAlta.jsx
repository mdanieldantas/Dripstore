import "./ProdutosEmAlta.css";



function ProdutosEmAlta(props) {
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Price ${props.price}</p>


      </div>
    </>

  );
}

export default ProdutosEmAlta;





// function ProdutosEmAlta() {
//   return (

//     <div className="produtos-em-alta-container">

//       <div className="produtos-em-alta-header">
//         <h4>Produtos em Alta</h4>
//         <a href="#" aria-label="Ver todos os produtos em alta" className="ver-todos-link">
//           Ver todos <span className="material-symbols-outlined">arrow_right_alt</span>
//         </a>
//       </div>

//       <div className="produto">
//         <div className="produto-imagem">
//           <div className="desconto">30% off</div>
//           <img className="imgProduto" src={modelProduct} alt="Produto" />
//         </div>

//         <div className="produto-info">
//           <div className="produto-tipo">Tênis</div>
//           <div className="produto-nome">K-Swiss V8 - Masculino</div>
//           <p><span className="preco-desconto">$200</span> $100</p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ProdutosEmAlta;




// import "./ProdutosEmAlta.css";
// import modelProduct from "./images/modelProduct.png"

// function ProdutosEmAlta() {
//   return (
//     <>
//       <div className="cima">
//         <h4>Produtos em alta</h4>
//         <a href="#" aria-label="Ver todos os produtos em alta"> {/* Considere mudar isso para melhor acessibilidade ou funcionalidade */}
//           Ver todos
//           <span className="material-symbols-outlined"> {/* className em vez de class */}
//             arrow_right_alt
//           </span>
//         </a>
//       </div>

//       <div className="divPai">
//         <div className="outradiv">
//           <div className="divmaior">
//             <div className="menor">30% off</div>
//             <img className="imgProduct" src={modelProduct} alt="Produto" /> {/* Adicionado atributo alt */}
//           </div>
//           <div>Tenis</div>
//           <div>K-Swiss V8 - Masculino</div>
//           <p><span>$200</span> $100</p>
//         </div>
//       </div> {/* Adicionada tag de fechamento para divPai */}
//     </>
//   );
// }

// export default ProdutosEmAlta;
