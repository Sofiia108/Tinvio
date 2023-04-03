import { createTheme } from "@mui/material";

const { palette } = createTheme();

const theme = createTheme({

  palette: {      
        primary: { 
            main: '#fff',
            contrastText: '#FF474D',
            borderRadius: 20,
        },
        second: {
          main: '#FFFFFF',
          contrastText: '#FF474D',
        },
        companyBlue: { 
            main: '#65CFE9',
            contrastText: '#fff',
        },
        companyRed: { 
            main: '#BCF3C3',
            contrastText: '#000',
        },
        accent: { 
            main: '#65CFE9',
            contrastText: '#000',
        },
        background: {
            default: '#fff',
            onScroll: '#FF474D',
          },
          
    },
});

export default theme
