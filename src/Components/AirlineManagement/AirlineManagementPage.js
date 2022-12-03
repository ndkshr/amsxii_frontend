import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddUpdateFlightInfoForm from './AddressForm';
import AddIcon from '@mui/icons-material/Add';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SaveIcon from '@mui/icons-material/Save';
import SelectFlightCard from './SelectFlightCard'

const steps = ['Select Flight', 'Add/Update Details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SelectFlightCard myAirlines={steps}/>;
    case 1:
      return <AddUpdateFlightInfoForm />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function AirlineManagementPage() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const goToStep = (stepNo) => {
    setActiveStep(stepNo);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography variant="h4" align="center" color="primary.main">
            Airline Management
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label, idx) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button variant="outlined" onClick={handleBack} sx={{ mt: 3, ml: 1 }} startIcon={<ChevronLeftIcon />}>
                    Back
                  </Button>
                )}

                {activeStep === 0 && (
                  <Button variant="contained" color="success" onClick={handleBack} sx={{ mt: 3, ml: 1 }} startIcon={<AddIcon />}>
                    Add New
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  endIcon={activeStep === steps.length - 1 ? <SaveIcon /> : <NavigateNextIcon />}
                >
                  {activeStep === steps.length - 1 ? 'Save' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}