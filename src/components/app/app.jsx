import MainPage from "../main-page/main-page";

export default function App(props){
    const { mainPageData } = props;
    return(
        <MainPage
        title={mainPageData.title}
        genre={mainPageData.genre}
        releaseDate={mainPageData.releaseDate}
        />
    );
}