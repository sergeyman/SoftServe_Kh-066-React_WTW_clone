import { styled, Typography } from "@mui/material";

import { useState } from "react";
//import { useEffect } from "react";

import { Box, CardActionArea } from "@mui/material";

import PercentIcon from '@mui/icons-material/Percent';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { Cards } from "../WhatPopular/Cards";

import { useEffect } from "react";

import filmData from "../../mocks/filmData";

// interface Props {
//   poster_path: string;
//   title: string;
//   release_date: string;
//   vote_average: number;
// }

// RWD (after check in Brws.)
const UserBox = styled(Box)({ 
    backgroundColor: "magenta",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
});

const SpanOpacity = styled("span")({
    opacity: "0.8",
});

const SpanBorder = styled("span")({
    border: "1px solid rgba(255,255,255,0.6)",
    color: "rgba(255,255,255,0.6)",
});

const A = styled("a")({
    textDecoration: "none",
    color: "#fff",
});
const UlIcon = styled("ul")({
    display: "flex",
    color: "#fff",
});

// data
const api_url = "https://api.themoviedb.org/3/movie/popular?api_key=0b2953095c6d796f8e06da225aa4dca6&language=en-US&page=2";

//export const  FilmView = ({ poster_path, title, release_date, vote_average }: Props) => {
export const  FilmView = () => {
// export const  FilmView = (props: any) => {    
    const [movieData, setData] = useState([]);
    // const [movieData, setData] = useState([props.data]);

    // API movie data
    const [url_set, setUrl] = useState(api_url);             
    // const [url_set, setUrl] = useState(props.url);          // props for CardsMedia

    // Array movie data
    // const MovieArrayData = fetch('../../mocks/filmData.json');
    // const [url_set, setUrl] = useState(MovieArrayData);
    console.log('url_set: ', url_set);

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

    // console.log('FilmView props.data: ', props.data);
  return (
    <>
        <Typography variant="h2">FilmView</Typography>
        <UserBox 
            height="50vh"
			flex={1}
			p={2}
		>
            <Box>
                <img 
                    src="/img/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg" 
                    width="70%"
                    alt="alt" />
            </Box>
            <Box>
                <Typography variant="body1">
                    <A href="#"> Obi-Wan Kenobi</A>
                    <SpanOpacity> (2022)</SpanOpacity>
                </Typography>
                <Typography variant="body1"> 
                    <SpanBorder>TV-14</SpanBorder>                    
                    <A href="#"> Sci-Fi & Fantasy,</A>
                    <A href="#"> Action & Adventure,</A>
                    <A href="#"> Drama</A>
                    <A href="#"> : 45m</A>
                </Typography>
                {/* <Typography variant="body2"> */}
                <UlIcon>
                    <li><A href="#"><PercentIcon /></A></li>
                    <li><A href="#"><PlaylistAddIcon /></A></li>
                    <li><A href="#"><FavoriteBorderIcon /></A></li>
                    <li><A href="#"><AddToQueueIcon /></A></li>
                    <li><A href="#"><StarBorderIcon /></A></li>
                    <li><A href="#">&gt; Play Trailer</A></li>
                {/* </Typography> */}
                </UlIcon>

                <Typography variant="body1">Between darkness and defeat, hope survives.</Typography>
                <Typography variant="body1">Overview</Typography>
                <Typography variant="body1">During the reign of the Galactic Empire, former Jedi Master, Obi-Wan Kenobi, embarks on a crucial mission to confront allies turned enemies and face the wrath of the Empire.</Typography>
            </Box>                
        </UserBox>

        {/* <Cards movieData={data.results}/> */}
        <Cards />
    </>
  );
}