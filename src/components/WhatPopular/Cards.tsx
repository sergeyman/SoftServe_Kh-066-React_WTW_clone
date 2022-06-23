import { useState } from "react";
import { useEffect } from "react";

import MediaCard from "./MediaCard";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

import { styled } from '@mui/material/styles';

import filmData from "../../mocks/filmData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const mediaCardsArray = [
  {
    poster_path: "/img/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
    title: "Film 1",
    vote_average: 7.5,
    release_date: "2022-04-06",
    popularity: 80,
  },
  {
    poster_path: "/img/8BzuwDAMamf5TX4TepbDDEq7ima.jpg",
    title: "Film 2",
    vote_average: 7.5,
    release_date: "2022-04-06",
    popularity: 80,
  },
  {
    poster_path: "/img/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
    title: "Film 3",
    vote_average: 7.5,
    release_date: "2022-04-06",
    popularity: 80,
  },
  {
    poster_path: "/img/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
    title: "Film 4",
    vote_average: 7.5,
    release_date: "2022-04-06",
    popularity: 80,
  },
  {
    poster_path: "/img/8BzuwDAMamf5TX4TepbDDEq7ima.jpg",
    title: "Film 5",
    vote_average: 7.5,
    release_date: "2022-04-06",
    popularity: 80,
  },
  {
    poster_path: "/img/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
    title: "Film 6",
    vote_average: 7.5,
    release_date: "2022-04-06",
    popularity: 80,
  },
];

interface Props {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
}

// data
const api_url = "https://api.themoviedb.org/3/movie/popular?api_key=0b2953095c6d796f8e06da225aa4dca6&language=en-US&page=2";



export const Cards = () => {
//export default function Cards(props: any) {
//export default Cards = (props: any) => {
//  export  const Cards = (props: Props) => {

// console.log('props.data:', props);

const [movieData, setData] = useState([]);

const [url_set, setUrl] = useState(api_url);             
// const [url_set, setUrl] = useState(props.url);          // props for CardsMedia
// console.log('props.url: ', props.url);
//const [search, setSearch] = useState();

useEffect(() => {
  fetch(url_set)
    .then((res) => res.json())
    .then((data) => {
      console.log("url_set: ", url_set);
      console.log('data: ', data);
      console.log('data.results: ', data.results);
      setData(data.results);
    });
}, [url_set]);

  return (
    <>
      {/* // Using array */}
      <Box p={5}>
        <Typography gutterBottom variant="h3">
          What's Popular
        </Typography>
        <Stack direction="row" spacing={1}>
          {/* {mediaCardsArray.map((mediaCard, i) => { */}
          {/* {props.data.map((mediaCard, i) => { */}
          {/* {filmData.map((mediaCard, i) => { */}
          {movieData.map((mediaCard, i) => {
            return (
              <Item>
                <MediaCard key={i} {...mediaCard} />
              </Item>
            );
          })}
        </Stack>
      </Box>

 
    </>
  );
}
