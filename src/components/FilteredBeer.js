import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import './BeerCard.css'

export default function ActionAreaCard(props) {

    const [likes, setLikes] = React.useState(0)

    function handleLike() {
        setLikes(prevState => prevState + 1)
    }
    // console.log(props.beer[0])
  return (
    
    <Card className="main-card" sx={{ maxWidth: 345, maxHeight: 1000 }}>
    {console.log(props.beer)}
      <CardActionArea>
        <CardMedia
          className="image"
          component="img"
          height="140"
          image={props.beer[0].image_url}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.beer[0].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.beer[0].tagline}
          </Typography>
          <Button onClick={handleLike} variant="contained">Like This Beer</Button>
          <p>Likes: {likes}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}