
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { store } from '../../store';
import { useSelector } from 'react-redux';
import { countProducts } from '../../store/selectsState';
import { decrease } from '../../store/countProduct/action';


export function Carts() {
    const cartProducts = useSelector(countProducts)
  
  console.log(store.getState().countProduct)
  return (
    <TableContainer component={Paper} sx={{mt:2}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Count product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartProducts.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.qty}</TableCell>
                  <TableCell align="right" >
                      <Button
                          variant='contained'
                          color='error'
                          onClick={(e) => console.log(e.currentTarget.closest('tbody'))}
                          size='small'
                          aria-label='decrease'
                      >
                          <RemoveIcon/>
                      </Button>
                      <Button
                          variant='outlined'
                          color='secondary'
                          size='small'
                          aria-label='remove'
                      >
                          <DeleteIcon/>
                      </Button>
                      <Button
                          variant='contained'
                          size='small'
                          aria-label='increase'
                      >
                          <AddIcon/>
                      </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
