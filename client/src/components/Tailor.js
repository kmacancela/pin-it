import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TailorSpecs from './TailorSpecs'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function Tailor(props) {
  const classes = useStyles();

  const handleClick = (e) => {
    console.log(props.tailor.id, e.target, props, "clicked")
    // props.xprops.history.push()
    props.showSpecs(props.tailor)
  }

  return (
    <Card className={classes.card} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://salescurator.com/promo/preview_222421821.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.tailor.first_name } { props.tailor.last_name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { props.tailor.email }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
