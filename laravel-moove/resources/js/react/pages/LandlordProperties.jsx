import {  Grid } from "@mui/material";

import LandlordHeader from "../components/headers/LandlordHeader";
import PropertyCard from "../cards/PropertyCard";
import Property from "../components/landlord/Property";
import { useState } from "react";
import PropertyModal from "../components/landlord/PropertyModal";
import axios from "axios";

const LandlordProperties = () => {
    const properties = window.properties;
    const [open, setOpen] = useState(false);
    const [property, setProperty] = useState({});
    const [tenants, setTenants] = useState([]);

    // Source all tenants relating to property on modal open.
    const handleOpen = (property) => {
        setProperty(property);
        let propUrl = `/tenants/${property.id}`;
        axios.get(propUrl).then((res) => {
            setTenants(res.data.tenants);
        });
        setOpen(true);
    };

    // Reset states when closing modal.

    const handleClose = () => {
        setOpen(false);
        setProperty({});
        setTenants();
    };

    return (
        <div>
            <LandlordHeader />

            <Grid container justifyContent="center">
                <Grid
                    container
                    itemxs={12}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ paddingLeft: { xs: "10px", sm: "20px", md: "20px" } }}
                    style={{ width: "100vw", overflow: "hidden" }}
                >
                    {properties.map((property, key) => {
                        return (
                            <Grid
                                key={key}
                                item
                                container
                                md={4}
                                sm={6}
                                xs={12}
                                justifyContent="center"
                                alignItems={"center"}
                            >
                                <PropertyCard name="modalClick"
                                    onClick={() =>
                                        handleOpen(property, tenants)
                                    }
                                >
                                    <Property property={property} />
                                </PropertyCard>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
            {open && (
                <PropertyModal
                    open={open}
                    setOpen={setOpen}
                    onClose={handleClose}
                    property={property}
                    tenants={tenants}
                    setTenants={setTenants}
                />
            )}
        </div>
    );
};

export default LandlordProperties;
