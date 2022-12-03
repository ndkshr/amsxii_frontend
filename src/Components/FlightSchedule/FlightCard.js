import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import EventIcon from '@mui/icons-material/Event';

export default function FlightCard({ flight }) {
  return (
    <div>
      <Box display="flex" alignItems="center">
        <Card sx= {{ width: 1, p: 1, display: 'flex', flexDirection: 'row' , alignItems: 'center'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h6">
            {flight.source} <ArrowForwardSharpIcon sx={{ fontSize: 15 }} /> {flight.destination}
            </Typography>
            <Typography variant="subtitle1"><EventIcon sx={{ fontSize: 13 }} />  {flight.time} / {flight.date}</Typography>  
          </Box>
        </Card>
      </Box>
    </div>
  );
}
