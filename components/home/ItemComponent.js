import {Grid} from "@mui/material";

const ItemComponent = ({item}) => {

    console.log('item >> ',item.moralisFile)

    return (
        <Grid item xs={4}>
            <img
                src={item?.moralisFile?.url}
                alt="Picture of the author"
                width={"100%"}
                height={"100%"}
            />
        </Grid>
    )

}

export default ItemComponent;
