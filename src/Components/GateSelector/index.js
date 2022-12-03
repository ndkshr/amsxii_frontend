import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { experimentalStyled as styled } from "@mui/material/styles";
import BlockIcon from '@mui/icons-material/Block';
import SingleGateBlock from "./SingleGateBlock";
import { Typography } from "@mui/material";

const Item = styled("div")(({ active, theme }) => ({
  height: 100,
  width: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: active ? "green" : "#fff",
  margin: 8,
  textAlign: "center",
  color: active ? "white" : theme.palette.text.secondary,
  borderRadius: 25,
  cursor: "pointer", "&:hover": {
    color: "white",
    backgroundColor: "green",
  },
}));

const GateSelector = () => {
  const [activeTerminal, setActiveTerminal] = useState("T1");
  const [selectedGate, setSelectedGate] = useState(null);
  const [gateData, setGateData] = useState([]);

  useEffect(() => {
    // Fetch gate data
  }, [activeTerminal]);

  const onSelectGate = (gate) => {
    setSelectedGate(gate);
  };

  const onBlockGate = () => {
    // call api
  };

  const renderTerminals = () => {
    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
          marginBottom: "16px",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => setActiveTerminal("T1")}
        >
          Terminal 1
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => setActiveTerminal("T2")}
        >
          Terminal 2
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => setActiveTerminal("T3")}
        >
          Terminal 3
        </Button>
      </Container>
    );
  };

  const renderGateGrid = () => {
    return (
      <Grid container columns={{ xs: 8, sm: 8, md: 8 }} sx={{p: 2}}>
        {Array.from(Array(32)).map((_, index) => (
          <Grid item xs={1} sm={1} md={1} key={index}>
            <Item
              active={selectedGate === index}
              onClick={() => onSelectGate(index)}
            >
              <Typography variant="h5">{index + 1}</Typography>
            </Item>
            {/* <SingleGateBlock active={selectedGate === index}
            onClick={() => onSelectGate(index)} gateCode="A1">

            </SingleGateBlock> */}
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderActionBtns = () => {
    return (
      <Container maxWidth="xs" sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "16px",
        marginBottom: "16px",
      }} columns={{xs: 12, sm: 12, md: 12}}>
        <Button variant="contained" color="error" size="large" onClick={onBlockGate} startIcon={<BlockIcon />}>
          Block
        </Button>
      </Container>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {renderTerminals()}
      {renderGateGrid()}
      {renderActionBtns()}
    </Box>
  );
};

export default GateSelector;
