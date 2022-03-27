/* eslint-disable no-ternary */
import React from "react";
import * as LandlordTexts from "../../../assets/texts/LandlordTexts";
import {
    Box,
    Button,
    Card,
    CardContent,
    DialogContent,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";

import AppTheme from "../../../assets/theme/theme";

const useStyles = makeStyles(() => ({
    "titleText": {
        "fontFamily": "sans-serif",
        "paddingBottom": "5 !important",
        "align": "center"
    },

    "headerText": {
        "paddingTop": "8px !important",
        "fontWeight": "600 !important",
        "fontSize": 22,
        "color": `${AppTheme.palette.landlord.dark} !important`
    },
    "dividerLight": {
        "borderBottom": "1px solid #808080 !important",
        "padding": "0 !important",
        "marginLeft": "5%",
        "marginRight": "5%"
    }

}));

const Contract = ({sections, landlord, property}) => {

    const styles = useStyles();

    return (
        <Grid container spacing={2}justifyContent="center">
            <Grid item xs={12} >
                <Typography variant="h4" align="center" sx={{"paddingTop": "15px",
                    "paddingBottom": "15px",
                    "fontWeight": "600",
                    "textDecoration": "underline"}}>
                    {LandlordTexts.LandlordAddContTexts.contPrevTitle}
                </Typography>
            </Grid>
            <Box className={styles.dividerLight} />
            <Grid item xs={12} justifyContent="center">
                {sections.length > 0
                    ? <>
                        <Paper variant="outlined" sx={{"paddingBottom": "30px"}}>
                            <Grid container justifyContent="center" paddingTop="30px">
                                <Grid item xs={12}>
                                    <Typography variant="h4" textAlign="center" sx={{"fontWeight": 600,
                                        "textDecoration": "underline"}}>
                                        {LandlordTexts.LandlordAddContTexts.prevTitle}
                                    </Typography>
                                    <Grid item xs={12} justifyContent="center" paddingBottom = "20px">
                                        <Typography style={{"display": "table",
                                            "margin": "0 auto"}} align="center" >
                                            {LandlordTexts.LandlordAddContTexts.prevDisclaimer1}
                                        </Typography>
                                        <Typography style={{"display": "table",
                                            "margin": "0 auto"}} align="center" >
                                            {LandlordTexts.LandlordAddContTexts.prevDisclaimer2}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography paragraph>
                                        {"The tenants known as __________________ hereby agree to rent the dwelling located at: "}

                                    </Typography>

                                    <Typography paragraph>
                                        <b>{` ${property.name}.`}</b>

                                    </Typography >

                                    <Typography paragraph>
                                        {"The premises are to be occupied by the above named tenants only. Tenant may not sublet premises."}

                                    </Typography>


                                </Grid>
                                <Grid item xs={11}>
                                    { sections.map((section, index) => <div key = {index}>
                                        <Typography variant="h4"align="center" >
                                            {section.header}
                                        </Typography>
                                        <Typography paragraph >
                                            {section.title !== undefined && section.title.length > 0
                                                ? <><b>{section.title}: </b>{section.content}</>
                                                : section.content }
                                        </Typography>
                                    </div>)}
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography paragraph>
                                        <b>{LandlordTexts.LandlordAddContTexts.prevAcknowledgementTitle}</b>
                                        {LandlordTexts.LandlordAddContTexts.prevAcknowledgementContent}

                                    </Typography>

                                </Grid>
                            </Grid>
                            <Grid container paddingLeft="10px" justify="center" style={{"maxWidth": "100%"}}>
                                <Grid item xs={6}>
                                    <Grid container flexDirection="column" >
                                        <Card align="center">
                                            <Grid item xs={12}>
                                                <CardContent >
                                                    <b>{LandlordTexts.LandlordAddContTexts.prevLandSigTitle}</b>
                                                </CardContent>
                                            </Grid>

                                            <CardContent className={styles.divider} />
                                            <Grid item xs={12}>
                                                <CardContent>
                                                    <Typography>
                                                        {landlord.name.toUpperCase()}

                                                    </Typography>
                                                </CardContent>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container flexDirection="column" padding="0 10px">
                                        <Card align="center">
                                            <Grid item xs={12}>
                                                <CardContent >
                                                    <b>{LandlordTexts.LandlordAddContTexts.PrevTenSigTitle}</b >
                                                </CardContent>
                                            </Grid>

                                            <CardContent className={styles.divider} />
                                            <Grid item xs={12}>
                                                <CardContent>
                                                    <Typography>
                                                            ...

                                                    </Typography>
                                                </CardContent>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>

                    </>
                    : <Typography align="center">{LandlordTexts.LandlordAddContTexts.prevNoContentMsg}</Typography>}


            </Grid>
        </Grid>
    );

};
export default Contract;
