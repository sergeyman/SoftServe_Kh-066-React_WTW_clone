import { ThemeProvider } from "@mui/material";
import customTheme from "./customizing/customTheme";

import Container from '@mui/material/Container';

import { FilmView } from "./components/FilmView/FilmView";

// data
const api_url = "https://api.themoviedb.org/3/movie/popular?api_key=0b2953095c6d796f8e06da225aa4dca6&language=en-US&page=2";

// const mediaCards = [
//   {
//     poster_path: "/img/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
//     title: "Laptop Coffe",
//     vote_average: 7.5,
//     release_date: "2022-04-06",
//     popularity: 80,
//   },
//   {
//     poster_path: "/img/8BzuwDAMamf5TX4TepbDDEq7ima.jpg",
//     title: "Laptop Coffe",
//     vote_average: 7.5,
//     release_date: "2022-04-06",
//     popularity: 80,
//   },
//   {
//     poster_path: "/img/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
//     title: "Laptop Coffe",
//     vote_average: 7.5,
//     release_date: "2022-04-06",
//     popularity: 80,
//   },
//   {
//     poster_path: "/img/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
//     title: "Laptop Coffe",
//     vote_average: 7.5,
//     release_date: "2022-04-06",
//     popularity: 80,
//   },
//   {
//     poster_path: "/img/8BzuwDAMamf5TX4TepbDDEq7ima.jpg",
//     title: "Laptop Coffe",
//     vote_average: 7.5,
//     release_date: "2022-04-06",
//     popularity: 80,
//   },
//   {
//     poster_path: "/img/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
//     title: "Laptop Coffe",
//     vote_average: 7.5,
//     release_date: "2022-04-06",
//     popularity: 80,
//   },
// ];

// import mediaCards from "./mocks/filmData";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* <h1> What to Watch clone </h1> */}
      <Container maxWidth="lg">     {/*Grows witht the size of the screen: sm, md, lg, xl, false, string */}
        
        {/* <FilmView data={mediaCards}/> */}
        {/* <FilmView data={api_url}/> */}
        <FilmView />
      </Container>
    </ThemeProvider>
  );
}

export default App;