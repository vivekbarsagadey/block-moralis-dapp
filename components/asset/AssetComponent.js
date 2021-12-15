import {Button, Grid, TextField} from "@material-ui/core";
import {useRef, useState} from "react";
import {useMoralisFile, useNewMoralisObject} from "react-moralis";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    photoFrame: {
        display: 'flex',
        alignItems: 'flex-start',
        minHeight: '50vh',

    },
    changePhotoTypography: {
        paddingRight: '14rem',
        color: '#2697a6',
        paddingLeft: '1rem',
    },
    img: {
        borderRadius: 10,
        width: '50vh',
        height: '50vh',

    },
}));

const AssetComponent = () => {
    const classes = useStyles();
    const uploadInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [fileName, setFileName] = useState(null);
    const {
        error,
        isUploading,
        moralisFile,
        saveFile,
    } = useMoralisFile();
    const { isSaving, error: e1, save } = useNewMoralisObject("Items");


    const onFileChange = (e) => {
        setSelectedFile({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        });
        setIsFilePicked(true)
        console.log('File uploading');
    }

    const onSaveFile = async () => {
        if(isFilePicked){
            if(selectedFile && selectedFile.raw && "image/jpeg"===selectedFile.raw.type){
                const fileIpfs = await saveFile(fileName+".jpg", selectedFile.raw,{ saveIPFS: true });
                console.log('moralisFile',fileIpfs)
                if(fileIpfs){
                    save({ moralisFile: fileIpfs });
                }
            }
        }
    }

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={5} className={classes.photoFrame}>
                        <Grid item xs={8}>
                            {selectedFile && selectedFile.preview && <img src={selectedFile.preview} alt="Picture"
                                                          className={classes.img}/>}
                            <Button
                                variant="contained"
                                component="label"
                            >
                                <input
                                    type="file"
                                    ref={uploadInputRef}
                                    accept="image/*"
                                    onChange={onFileChange}
                                    hidden
                                />
                                Select File
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="fileName" value={fileName} label="File Name" onChange={e => setFileName(e.target.value)} variant="outlined" />
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={8}>
                        <Button

                            onClick={onSaveFile}
                            variant="contained"
                        >
                            Upload File To Morlis server
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>

        </>
    )

}

export default AssetComponent;
