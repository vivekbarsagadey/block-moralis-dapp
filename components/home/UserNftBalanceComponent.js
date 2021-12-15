
import {useNFTBalances } from "react-moralis";
import {Grid} from "@mui/material";
const UserNftBalanceComponent = ()=>{
    const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();


    if (error) {
        return <span>Error during data fetching</span>;
    }

    if (isLoading) {
        return <span>Please wait to load data</span>;
    }
    console.log(data)
    return(<>
        <Grid container spacing={2}>
            <Grid item xs={8}>

            </Grid>
            <Grid item xs={4}>
                <button onClick={() => getNFTBalances({ params: { chain: "0x1" } })}>Get NFTBalances</button>
            </Grid>
            <Grid item xs={4}>
                {/*{JSON.stringify(data, null, 2)}*/}
                {data && <div>Total: {data.total}</div>}
                {data && <div>Page : {data.page}</div>}
            </Grid>

        </Grid>
    </>)


}

export default UserNftBalanceComponent;
