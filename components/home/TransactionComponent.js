
import {useMoralisQuery} from "react-moralis";
import UserNftBalanceComponent from "./UserNftBalanceComponent";
import {Grid} from "@mui/material";
import ItemComponent from "./ItemComponent";
const TransactionComponent = ()=>{
    const { data, error, isLoading } = useMoralisQuery("Items");

    if (error) {
        return <span>Error during data fetching</span>;
    }

    if (isLoading) {
        return <span>Please wait to load data</span>;
    }

    if (!data || data.length < 1) {
        return <span>No data found</span>;
    }

    return(<>

        <Grid container spacing={2}>
            <Grid item xs={2}>
                <UserNftBalanceComponent/>
            </Grid>
            {data && data.map((item,index) => <ItemComponent key={index} item={JSON.parse(JSON.stringify(item, null, 2))} /> )}

        </Grid>
    </>)


}

export default TransactionComponent;
