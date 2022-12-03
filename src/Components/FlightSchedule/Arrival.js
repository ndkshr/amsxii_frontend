import * as React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import { Stack } from "@mui/material";
import {FLIGHT_SCHEDULE_LIST_API as API} from '../../RestAPI/Constants';
import LinearProgress from '@mui/material/LinearProgress';
import FlightCard from "./FlightCard";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

class Arrival extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
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
        var flightData = [
            {
                "fact_guid": "AAL_AA2401_2022_12_01",
                "airline_flight_key": "AAL_AA2401",
                "source": "San Jose",
                "destination": "Dallas",
                "arrival_departure": "departure",
                "date": "2022-12-01",
                "time": "14:30:00",
                "terminal_gate_key": null,
                "baggage_carousel": "A1_B1",
                "remarks": "scheduled"
            },
            {
                "fact_guid": "AAL_AA2401_2022_12_03",
                "airline_flight_key": "AAL_AA2401",
                "source": "San Jose",
                "destination": "Dallas",
                "arrival_departure": "departure",
                "date": "2022-12-03",
                "time": "14:30:00",
                "terminal_gate_key": null,
                "baggage_carousel": "A1_B1",
                "remarks": "scheduled"
            },
            {
                "fact_guid": "AAL_AA2402_2022_12_02",
                "airline_flight_key": "AAL_AA2402",
                "source": "San Jose",
                "destination": "Dallas",
                "arrival_departure": "departure",
                "date": "2022-12-02",
                "time": "14:45:00",
                "terminal_gate_key": null,
                "baggage_carousel": "A1_B1",
                "remarks": "scheduled"
            }
        ];

        if (!isLoaded) {
            return (
                <LinearProgress color="secondary" />
            )
        } else {
            return (
                <div>
                    <Grid container spacing={2} sx={{p: 2}}>
                        <Grid item xs>
                            <Button variant="contained">Terminal 1</Button>
                        </Grid>
                        <Grid item xs>
                            <Button variant="outlined">Terminal 2</Button>
                        </Grid>
                        <Grid item xs>
                            <Button variant="outlined">Terminal 3</Button>
                        </Grid>
                    </Grid>
                    <Stack sx={{p: 2}} spacing={2}>
                        {items.map(item => (
                            <FlightCard flight={item}/>
                        ))}
                    </Stack>
                </div>
            );
        }
    }
}

export default Arrival;
