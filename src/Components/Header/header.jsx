
import "./Header.css";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/carrinho.png"; // Sugestão de import direto

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <input type="text" placeholder="Pesquisar produto..." className="search-input" />
        <div className="actions">
          <a href="/cadastro" className="link">Cadastre-se</a>
          <button className="button">Entrar</button>
          <a href="/carrinho" className="link">
            <img src={cartIcon} alt="Carrinho" className="cart-icon" />
          </a>
        </div>
      </div>

      <nav className="nav-header">
        <a href="/">Home</a>
        <a href="/produtos">Produtos</a>
        <a href="/categorias">Categorias</a>
        <a href="/pedidos">Meus Pedidos</a>
      </nav>
    </header>
  );
};

export default Header;




// import "./Header.css"
// import logo from "../../assets/logo.png"
// function Header() {


//   return (
//     <>
//       <div className="pesquisa">
//         <div>
//           <img src={logo} alt="" className="logo" />
//         </div>
//         <div>
//           <input type="text" placeholder="Pesquisar produto..." className="lupa" />
//         </div>
//         <a href="#">cadastre-se</a>
//         <button className="botao">Entrar</button>
//         <a href="#"><img src="../../assets/carrinho.png" alt="" /></a>
//       </div>

//       <nav className="navHeader">
//         <a href="#">Home</a>
//         <a href="#">Produtos</a>
//         <a href="#">Categorias</a>
//         <a href="#">Meus Pedidos</a>
//       </nav>
//     </>
//   )
// }

// export default Header
