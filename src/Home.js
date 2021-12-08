import React, { useState, useEffect } from "react";
import SymbolCard from "./components/symbolCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SymbolModal from './components/symbolModal'

const symbolsStr = localStorage.getItem("symbols");
const symbolObj = symbolsStr ? JSON.parse(symbolsStr) : [];




export default function Home(props) {
  const { value } = props;
  const [symbols, setSymbols] = useState(symbolObj);
  const [selectedSymbol, setSelectedSymbol] = useState(undefined);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (value.length > 0) {
    const flitteredSymbol = symbolObj.filter((obj) => {
      if (obj.name && obj.name.toLowerCase().startsWith(value.toLowerCase())) {
        return obj;
      }
    });
    if (!arraysEqual(flitteredSymbol, symbols)) {
      setSymbols(flitteredSymbol);
    }
  }
  const _renderModal = () => {
    if (selectedSymbol) {
      return (
        <SymbolModal open={open} symbol={selectedSymbol} handleClose={handleClose}/>
      );
    }
  };
  const onClick = (symbol) => {
    setSelectedSymbol(symbol);
    handleOpen();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      {_renderModal()}

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
        className="m-4"
      >
        {symbols.map((symbol) => (
          <SymbolCard symbol={symbol} onClick={onClick} />
        ))}
      </Grid>
    </Box>
  );
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
