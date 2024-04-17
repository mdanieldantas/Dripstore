
import Header from "../Components/Header/header"
import Hero from "../Components/Hero/Hero"
import ColecoesDestaque from "../Components/ColecoesDestaque/ColecoesDestaque"
import CardList from "../Components/CardList/CardList"
import OfertaEspecial from "../Components/OfertaEspecial/OfertaEspecial"
import Footer from "../Components/Footer/Footer"


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ColecoesDestaque />
      <CardList />
      <OfertaEspecial />
      <Footer />
    </>
  )
}

export default Home