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
import FlightInDetailCard from "./FlightInDetailCard";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { alignProperty } from "@mui/material/styles/cssUtils";
import Select, { SelectChangeEvent } from '@mui/material/Select'

class Departure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            screen: props.screen,
            terminal: "T1",
            hours: "1"
        }
    }

    componentDidMount() {
        var debugurl = "https://60261217186b4a001777fbd7.mockapi.io/api/ndkshr/flight-schedule-list"
        fetch(API)
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
                isLoaded: true,
                screen: this.props.screen,
                terminal: "T1",
                hours: "1"
            })
        });
    }

    render() {
        var { items, isLoaded, screen, terminal, hours } = this.state;
    
        if (!isLoaded) {
            return (
                <LinearProgress color="secondary" />
            )
        } else {
            return (
                <div>
                    <Grid>
                        <FormControl sx={{m: 2, minWidth: 120}}>
                            <InputLabel id="select-terminal">Terminal</InputLabel>
                            <Select
                                value={terminal}
                                label="Terminal"
                                onChange={(event) => this.handleTerminalChange(event)}
                            >
                                <MenuItem value={"T1"}>Terminal 1</MenuItem>
                                <MenuItem value={"T2"}>Terminal 2</MenuItem>
                                <MenuItem value={"T3"}>Terminal 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{m: 2, minWidth: 120}}>
                            <InputLabel id="select-time-slot">Hours</InputLabel>
                            <Select
                                value={hours}
                                label="Hours"
                                onChange={(event) => this.handleHourChange(event)}
                            >
                                <MenuItem value={"1"}>1 hr</MenuItem>
                                <MenuItem value={"2"}>2 hrs</MenuItem>
                                <MenuItem value={"4"}>4 hrs</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Stack sx={{p: 2}} spacing={2}>
                        {this.getItemsAfterFilter(screen, items).map((item, idx) => (
                            this.getCard(screen, item)
                        ))}
                    </Stack>
                </div>
            );
        }
    }

    handleTerminalChange(terminal) {
        this.setState({terminal: terminal.target.value})
    }

    handleHourChange(timeSlot) {
        this.setState({hours: timeSlot.target.value})
        // alert(timeSlot);
    }

    getItemsAfterFilter(screen, items) {
        if (screen === "dashboard") return (
            items.filter(item => item.arrival_departure === "departure").slice(0, 5)
        );
        else  return (
            items.filter(item => item.arrival_departure === "departure")
        );
    }
    
    getCard(screen, item) {
        if (screen === "dashboard") {
            return <FlightCard flight={item}/> 
        } else {
            return <FlightInDetailCard flight={item}/>
        }
    }
}

export default Departure;
