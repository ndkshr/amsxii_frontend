import * as React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import { Stack, Typography } from "@mui/material";
import {FLIGHT_SCHEDULE_LIST_API as API} from '../../RestAPI/Constants';
import LinearProgress from '@mui/material/LinearProgress';
import FlightCard from "./FlightCard";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar"
import { alignProperty } from "@mui/material/styles/cssUtils";

class Arrival extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        var debugurl = "https://60261217186b4a001777fbd7.mockapi.io/api/ndkshr/flight-schedule-list"
        fetch(API)
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
                isLoaded: true
            })
        });
    }

    render() {
        var { items, isLoaded } = this.state;
    
        if (!isLoaded) {
            return (
                <LinearProgress color="secondary" />
            )
        } else {
            return (
                <div>
                    <Grid container spacing={1} sx={{p: 2}}>
                        <Grid item>
                            <Avatar sx={{ bgcolor: "primary.main", alignProperty: "center"}}> 
                                <Typography variant="button">T1</Typography>
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar sx={{ bgcolor: "primary.main", alignProperty: "center"}}> 
                                <Typography variant="button">T2</Typography>
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar sx={{ bgcolor: "primary.main", alignProperty: "center"}}> 
                                <Typography variant="button">T3</Typography>
                            </Avatar>
                        </Grid>
                    </Grid>
                    <Stack sx={{p: 2}} spacing={2}>
                        {items.slice(0, 5).map((item, idx) => (
                            <FlightCard flight={item}/>
                        ))}
                    </Stack>
                </div>
            );
        }
    }
}

export default Arrival;
