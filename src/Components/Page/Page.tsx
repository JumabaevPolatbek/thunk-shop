import React from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { data } from "../../store/selectsState"
import CardInfo from "../CardItem";

export function Page() {
    const linkPage = useParams().link
    const dataProducts = useSelector(data);
    console.log(dataProducts.data)
    return (
        <div style={{marginTop:'10px' ,display:'flex',flexWrap:'wrap', justifyContent:'space-between'}}>
            {dataProducts.data.map((product) => {
                if (product.category === linkPage) {
                    return <CardInfo product={product} key={product.id}/>
                }
            })}
        </div>
    )
}