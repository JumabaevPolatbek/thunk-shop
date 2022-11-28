import React from 'react'
import CardInfo from "../CardItem";
import { useSelector } from 'react-redux';
import { data } from '../../store/selectsState';
import PaginationList from '../Pagination';

export default function Home() {
    const dataProducts = useSelector(data)
    return (
        <>
        <div style={{marginTop:'10px' ,display:'flex',flexWrap:'wrap', justifyContent:'space-between'}}>
            {dataProducts.showsData.map((product) => {
                return <CardInfo key={product.id} product={product}/>
            })}
        </div>
            <PaginationList />
        </>
    )
}