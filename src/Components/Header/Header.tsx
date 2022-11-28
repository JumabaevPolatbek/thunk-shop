import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderList from './List/HeaderList';
import { Badge, IconButton, MenuItem } from '@mui/material';
import Link from '@mui/material/Link';
import { store } from '../../store';

export default function Header() {
 
  const total = ():any => {
      return store.getState().countProduct.reduce((prev, cur) => prev + cur.qty, 0);
  }
  React.useEffect(() => {
    total()
  },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:'#03a9f4',borderRadius:'0 0 5px 5px'}}>
        <Toolbar sx={ {justifyContent:'space-between'}}>
          <Typography variant="h6" component="div" >
            <Link href='/' underline='none' color={'#fff'}>Shopping</Link>
          </Typography>
          <HeaderList/>
          <MenuItem>
            <Link underline='none' href='/carts' color={'#fff'} sx={{display:'flex'}}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={total()} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <p>Carts</p>
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
