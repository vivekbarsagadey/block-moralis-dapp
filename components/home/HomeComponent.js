import { useMoralis } from "react-moralis";
import MoralisHomeComponent from "./MoralisHomeComponent";
const HomeComponent = () => {
    const { user } = useMoralis();
    return (<>
        {user && <MoralisHomeComponent></MoralisHomeComponent>}
        {!user &&  <h1>Please login to get Trx Details</h1>}

    </>)

}

export default HomeComponent;
