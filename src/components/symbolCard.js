import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SymbolCard(props) {
  console.log("=======", props);
  const { symbol,onClick } = props;
  return (
    <Grid item onClick={()=>onClick(symbol)}>
      <Item style={{ background: "#faf5f5", margin: 4 }}>
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: 200, height: 200 }}
        >
          <div
            style={{
              height: 140,
              background: "#fafafa",
              width:180,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              overflow:"hidden"
            }}
          >
            <img
              src={symbol.trad_symbol}
              style={{ width: 160, height: "auto", padding: 2, marginTop: 5 }}
            />
          </div>
          <div className="d-flex mt-2">
            <p style={{fontWeight:"bold"}} className="m-0">{symbol.name} </p>
            <p className="m-0">({symbol.acronym})</p>
          </div>
          <div className="mt-0">
            <p className="m-0">{symbol.description}</p>
          </div>
        </div>
      </Item>
    </Grid>
  );
}
