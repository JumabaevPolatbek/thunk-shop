import { Pagination,Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { store } from "../../store";
import { setCurrentPage } from "../../store/fetchAll/action";
import { data } from "../../store/selectsState"

export default function PaginationList() {
    const dataProducts = useSelector(data);
    return (
        <Stack >
            <Pagination
                count={Math.ceil(dataProducts.data.length / dataProducts.productShows)}
                onChange={(_,num)=>{store.dispatch(setCurrentPage(num))}}
                color="primary" />
        </Stack>
    )
}