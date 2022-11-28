import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

export default function HeaderList() {
  const category = ["electronics", "jewelery", "men's clothing", "women's clothing"];
  return (
    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'inherit', display: 'flex', alignItems: 'center' }}>
      {category.map((category,index) => {
        return (
          <ListItem  key={index}>
            <Link href={`${category}`} sx={{display:'flex',alignItems:'center',color:'#fff',transition:'all .s easy-out'}} underline='hover'>
              <ListItemText primary={category} sx={{color:'inherit',textTransform:'capitalize'}} />
            </Link>
          </ListItem>
        )
      })}
    </List>
  );
}
