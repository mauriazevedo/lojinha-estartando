import BestSellers from "../../components/BestSellers";
import Releases from "../../components/Releases";
import SearchBar from "../../components/SearchBar/index";
import Header from "../../components/Header";
import ProductsCarousel from "../../components/ProductsCarousel";

function Home(props) {
    return(
        <>
            <Header themeToggler={props.themeToggler} theme={props.theme}/>
            <SearchBar theme={props.theme}/>
            <BestSellers />
            <Releases />
        </>
    )
}

export default Home;