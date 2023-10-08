import MainPage from "../main-page/main-page";

interface AppProps {
  mainPageData: {
    title: string;
    genre: string;
    releaseDate: string;
  };
}

const App: React.FC<AppProps> = (props) => {
  const { mainPageData } = props;

  return (
    <MainPage
      title={mainPageData.title}
      genre={mainPageData.genre}
      releaseDate={mainPageData.releaseDate}
    />
  );
};

export default App;