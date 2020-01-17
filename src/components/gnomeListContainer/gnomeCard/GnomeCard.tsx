import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ImageDiv } from './GnomeCardStyle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  link: {
    margin: '30px',
  },
  card: {
    width: 230,
    height: 230,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 1px 5px black',
    transition:  'transform .3s',
    transform: 'scaleX(1)',
    '&:hover': {
      transform: 'scaleX(1.01)',
      boxShadow: '0px 0px 10px rgba(0,0,0.5)',
    }
  },
});

const GnomeCard = (gnome: any, key: number) => {
  const classes = useStyles('');
  const { thumbnail, name, id } = gnome.gnome;
  return (
    <Link to={`/gnome/${id}`} key={key} className={classes.link}>
      <Card className={classes.card}>
        <ImageDiv
          image={thumbnail}
        />
        <CardContent>
          <Typography gutterBottom component="p">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default GnomeCard
