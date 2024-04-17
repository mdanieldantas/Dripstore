import "./ColecoesDestaque.css"
import supreme from "./images/images/supreme.png"
import adidas from "./images/images/adidas.png"
import beats from "./images/images/beats.png"
import iconT_shirt from "./images/images/iconT-shirt.png"
import iconPants from "./images/images/iconPants.png"
import iconPants2 from "./images/images/iconPants2.png"
import iconHeadphones from "./images/images/iconHeadphones.png"
import iconTenis from "./images/images/iconTennis.png"


function ColecoesDestaques() {
  return (
    <>
      <div className="featured-collections-container"> {/* Corrigi a classe aqui */}
        <h3>Coleções em Destaque</h3>
        <div className="saleContent"> {/* Corrigi a classe aqui */}
          <div className="oferta">
            <span>30% OFF</span>
            <h1>Novo Drop <br />Supreme</h1>
            <button>Comprar</button>
            <div className="imgContent"><img src={supreme} alt="" />
            </div>
          </div><div className="oferta">
            <span>30% OFF</span>
            <h1>Coleção <br />Adidas</h1>
            <button>Comprar</button>
            <div className="imgContent"><img src={adidas} alt="" />
            </div>
          </div><div className="oferta">
            <span>30% OFF</span>
            <h1>Novo <br />Beats Bass</h1>
            <button>Comprar</button>
            <div className="imgContent"><img src={beats} alt="" />
            </div>
          </div>
        </div>
        <div className="subtitle"><h3>Coleções em destaque</h3>
        </div>
        <div className="salesection"> {/* Corrigi a classe aqui */}
          <div className="destaque">
            <div className="imgcollection-only"><img src={iconT_shirt} alt="" />
            </div>
            <h6>Camiseta</h6></div>
          <div className="destaque">
            <div className="imgcollection"><img src={iconPants} alt="" />
            </div>
            <h6>Calça</h6></div>
          <div className="destaque">
            <div className="imgcollection"><img src={iconPants2} alt="" />
            </div>
            <h6>Boné</h6></div>
          <div className="destaque">
            <div className="imgcollection"><img src={iconHeadphones} alt="" />
            </div>
            <h6>Headphones</h6></div>
          <div className="destaque">
            <div className="imgcollection"><img src={iconTenis} alt="" />
            </div>
            <h6>Tênis</h6></div>
        </div>
      </div>
    </>
  )
}

export default ColecoesDestaques;



// import "../ColeçõesDestaque/ColecoesDestaque.css"
// import supreme from "./images/images/supreme.png"
// import adidas from "./images/images/adidas.png"
// import beats from "./images/images/beats.png"
// import iconT_shirt from "./images/images/iconT-shirt.png"
// import iconPants from "./images/images/iconPants.png"
// import iconPants2 from "./images/images/iconPants2.png"
// import iconHeadphones from "./images/images/iconHeadphones.png"
// import iconTenis from "./images/images/iconTennis.png"


// function ColecoesDestaques() {


//   return (
//     <>
//       <div id="container">
//         <h3>Coleções em Destaque</h3>
//         <div id="saleContent">
//           <div className="oferta">
//             <span>30% OFF</span>
//             <h1>Novo Drop <br />Supreme</h1>
//             <button>Comprar</button>
//             <div className="imgContent"><img src={supreme} alt="" />
//             </div>
//           </div><div className="oferta">
//             <span>30% OFF</span>
//             <h1>Coleção <br />Adidas</h1>
//             <button>Comprar</button>
//             <div className="imgContent"><img src={adidas} alt="" />
//             </div>
//           </div><div className="oferta">
//             <span>30% OFF</span>
//             <h1>Novo <br />Beats Bass</h1>
//             <button>Comprar</button>
//             <div className="imgContent"><img src={beats} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="subtitle"><h3>Coleções em destaque</h3>
//         </div>
//         <div id="salesection">
//           <div className="destaque">
//             <div className="imgcollection-only"><img src={iconT_shirt} alt="" />
//             </div>
//             <h6>Camiseta</h6></div>
//           <div className="destaque">
//             <div className="imgcollection"><img src={iconPants} alt="" />
//             </div>
//             <h6>Calça</h6></div>
//           <div className="destaque">
//             <div className="imgcollection"><img src={iconPants2} alt="" />
//             </div>
//             <h6>Boné</h6></div>
//           <div className="destaque">
//             <div className="imgcollection"><img src={iconHeadphones} alt="" />
//             </div>
//             <h6>Headphones</h6></div>
//           <div className="destaque">
//             <div className="imgcollection"><img src={iconTenis} alt="" />
//             </div>
//             <h6>Tênis</h6></div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ColecoesDestaques