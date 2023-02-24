import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function AlertInfo({ message, open, setOpen }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}

//how to change useState in child components?
// //PARENT
// export default function Parent({}) {
//   const [state, setState] = useState(false);
//         function setParentValue(value){
//              setState(value)
//        }

//         return <Child setValue={setParentValue} />

// }

// //CHILD
// export default function Child({setValue}) {
//   function buttonHandler(){
//       setValue('value')
//  }
//   return <Button onClick={buttonHandler}> Click me to set the state </Button>

// }

//Source: https://stackoverflow.com/questions/67347057
