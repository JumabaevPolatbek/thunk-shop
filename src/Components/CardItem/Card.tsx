import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { store } from '../../store';
import { addProduct } from '../../store/countProduct/action';
import { Products } from '../../store/types';

type Props = {
  product:Products
}
export default function CardInfo({ product }: Props) {
  console.log(store.getState().countProduct)
  return (
    <Card sx={{ maxWidth: 345,display:'flex',flexDirection:'column',justifyContent:'space-between',mt:2 }}>
      <div className='card-image' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img src={product.image} alt={product.title} style={{height:'220px',width:'200px'}} />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        {product.price} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant='contained'
          onClick={() => { store.dispatch(addProduct(product)) }}
        >Add</Button>
      </CardActions>
    </Card>
  );
}