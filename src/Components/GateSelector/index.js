import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled("div")(({ active, theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: active ? "green" : "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid black",
  cursor: "pointer",
  "&:hover": {
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
          marginBottom: "16px",
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={() => setActiveTerminal("T1")}
        >
          T1
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => setActiveTerminal("T2")}
        >
          T2
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => setActiveTerminal("T3")}
        >
          T3
        </Button>
      </Container>
    );
  };

  const renderGateGrid = () => {
    return (
      <Grid container columns={{ xs: 8, sm: 8, md: 12 }}>
        {Array.from(Array(32)).map((_, index) => (
          <Grid item xs={1} sm={1} md={1} key={index}>
            <Item
              active={selectedGate === index}
              onClick={() => onSelectGate(index)}
            >
              {index + 1}
            </Item>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderActionBtns = () => {
    return (
      <Container maxWidth="sm" sx={{ marginTop: "16px" }}>
        <Button variant="contained" size="small" onClick={onBlockGate}>
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
