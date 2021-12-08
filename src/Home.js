import React, { useState, useEffect } from "react";
import SymbolCard from "./components/symbolCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SymbolModal from "./components/symbolModal";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function Home(props) {
  const { symbols } = props;

  const [selectedSymbol, setSelectedSymbol] = useState(undefined);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const _renderModal = () => {
    if (selectedSymbol) {
      return (
        <SymbolModal
          open={open}
          symbol={selectedSymbol}
          handleClose={handleClose}
        />
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
        {symbols.length > 0 ? (
          symbols.map((symbol) => (
            <SymbolCard symbol={symbol} onClick={onClick} />
          ))
        ) : (
          <>
            {[...Array(10)].map((symbol) => (
              <Skeleton
                count={1}
                height={220}
                width={220}
                direction={"ltr"}
                style={{ margin: 10 }}
              />
            ))}
          </>
        )}

        {/* <Skeleton count={10} height={200} width={200} direction={"ltr"} /> */}
      </Grid>
    </Box>
  );
}
