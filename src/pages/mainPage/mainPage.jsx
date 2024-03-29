import Banner from "../../components/banner/banner";
import Header from '../../components/templates/header';
import About from "../../components/about/about.jsx";
import Seasons from "../../components/seasons/seasons.jsx";
import Main from "../../components/main/main.jsx";

export function MainPage(){
    return(
        <div>
            <Header/>
            <Banner/>
            <About/>
            <Seasons/>
            <Main/>
        </div>
    )
}