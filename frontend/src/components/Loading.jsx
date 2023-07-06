import React from "react";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
function Loading() {
  return (
    <div>
      <RotateLeftIcon
        sx={{
          fontSize: "50px",
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(-50%, -50%)",
          animation: "spin 1s ease-in-out infinite",
          "@keyframes spin": {
            "0%": {
              transform: "translate(-50%, -50%) rotate(360deg)",
            },
            "100%": {
              transform: "translate(-50%, -50%) rotate(0deg)",
            },
          },
        }}
      />
    </div>
  );
}

export default Loading;
