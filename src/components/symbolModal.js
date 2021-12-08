import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #5e5e5e",
  boxShadow: 5,
  p: 4,
  borderRadius: 3,
};

export default function SymbolModal(props) {
  const { symbol, open, handleClose } = props;
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-row">
            <p style={{ fontWeight: "bold" }} className="m-0">
              {symbol.name}{" "}
            </p>
            <p className="m-0">({symbol.acronym})</p>
          </div>
          <div className="d-flex flex-row">
            <div
              style={{
                height: 140,
                background: "#fafafa",
                width: 180,
                overflow: "hidden",
              }}
            >
              <img
                src={symbol.trad_symbol}
                style={{
                  width: 160,
                  height: "auto",
                  padding: 2,
                  marginTop: 5,
                }}
              />
            </div>
            <div
              style={{
                height: 140,
                background: "#fafafa",
                width: 180,
                overflow: "hidden",
              }}
            >
              <img
                src={symbol.enc_symbol}
                style={{
                  width: 160,
                  height: "auto",
                  padding: 2,
                  marginTop: 5,
                }}
              />
            </div>
          </div>
          <div>
            <p className="m-0">{symbol.description}</p>
          </div>
          <div
            className="d-flex flex-column align-items-start mt-3"
            style={{ width: "100%", background: "#f5faf9", padding: 5 }}
          >
            <table>
              <tbody>
                {symbol.props
                  ? symbol.props.map((prop) => (
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#5c5c5c" }}>
                          {prop.name}
                        </td>
                        <td style={{ fontWeight: "bold", paddingLeft: 2 }}>
                          {" "}
                          :{" "}
                        </td>
                        <td style={{ paddingLeft: 4 }}>{prop.value}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
