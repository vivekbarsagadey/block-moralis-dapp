
import {useMoralisQuery} from "react-moralis";
import UserNftBalanceComponent from "./UserNftBalanceComponent";
import {Grid} from "@mui/material";
const TransactionComponent = ()=>{
    const { data, error, isLoading } = useMoralisQuery("Applications");

    if (error) {
        return <span>Error during data fetching</span>;
    }

    if (isLoading) {
        return <span>Please wait to load data</span>;
    }
    return(<>

        <Grid container spacing={2}>
            <Grid item xs={8}>
                <UserNftBalanceComponent></UserNftBalanceComponent>
            </Grid>
            <Grid item xs={4}>
                <pre>{JSON.stringify(data, null, 2)}</pre>;
            </Grid>

        </Grid>
    </>)


}

export default TransactionComponent;
