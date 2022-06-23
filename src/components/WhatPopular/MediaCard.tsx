import Card from "@mui/material/Card"; // v.5
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface Props {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
}

let api_img_path="https://image.tmdb.org/t/p/w500/";

export default function MediaCard({ poster_path, title, release_date, vote_average }: Props) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 200,
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              width: 150,
              height: 225,
              borderRadius: 1
            }}
            component="img"
              image={api_img_path + poster_path}
            // image={poster_path}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" align="left">
              {vote_average}
            </Typography>
            <Typography gutterBottom variant="body1" color="text.secondary" align="left">
              {title}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary" align="left">
              {release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
