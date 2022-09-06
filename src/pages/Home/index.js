import BestSellers from "../../components/BestSellers";
import Releases from "../../components/Releases";
import SearchBar from "../../components/SearchBar/index";
import Header from "../../components/Header";
import Categories from "../../components/Categories";
import BottomMenu from "../../components/BottomMenu";
import { HomeContainer } from "./style";

function Home(props) {
    return(
        <HomeContainer>
            <Header themeToggler={props.themeToggler} theme={props.theme}/>
            <BottomMenu />
            <SearchBar theme={props.theme}/>
            <Categories />
            <BestSellers />
            <Releases />
        </HomeContainer>
    )
}

export default Home;