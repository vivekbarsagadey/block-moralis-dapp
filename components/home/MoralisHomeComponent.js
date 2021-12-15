import {useMoralis} from "react-moralis";
import TransactionComponent from "./TransactionComponent";
import {Button, Grid} from "@material-ui/core";
import Link from 'next/link'

const MoralisHomeComponent = () => {
    const { refetchUserData, userError, isUserUpdating, user } = useMoralis();
    return (<>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Link href="/asset">
                    <Button variant="contained">Add Asset</Button>
                </Link>

            </Grid>
            <Grid item xs={12}>
                <h1>Welcome {user && user.get("username")}</h1>

            </Grid>
            <Grid item xs={4}>
                <button onClick={() => refetchUserData()} disabled={isUserUpdating}>
                    Refetch user data
                </button>
            </Grid>
            <Grid item xs={4}>
                <TransactionComponent></TransactionComponent>
            </Grid>

        </Grid>



    </>)

}

export default MoralisHomeComponent;
