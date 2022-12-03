import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from '../Dashboard/Orders';


export default function MainView() {
    return (
        <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
            <Grid container spacing={{ xs:2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
              {/* Arrivals Quick View */}
              <Grid item xs={12} sm={6} md={6}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders heading="Arrivals"/>
                </Paper>
              </Grid>
              {/* Departures Quick View */}
              <Grid item xs={12} sm={6} md={6}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders heading="Departures"/>
                </Paper>
              </Grid>
            </Grid>
        </Container>
    );
}