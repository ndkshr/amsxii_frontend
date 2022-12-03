import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SelectFlightCard({ myAirlines }) {
  var selected = myAirlines[0];

  console.log('------myAirlines------', myAirlines)

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Available Flights</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={selected}
        name="radio-buttons-group"
        onChange={()=>{}}
      >
        {myAirlines.map((flight) => (
          <FormControlLabel key={flight} value={flight} control={<Radio />} label={flight} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

