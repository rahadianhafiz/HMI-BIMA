import { createTheme } from "@mui/material/styles";
const color = "#ffffff";
const backgroundColor = "#000000";
export const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
            color,
            backdropFilter: "blur(2.625rem)",
            background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 36.65%)",
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor,
            color,
            backdropFilter: "blur(2.625rem)",
            background: "linear-gradient(127.09deg, rgba(25, 25, 60, 0.5) 30%, rgba(7, 11, 35, 0.49) 70%)",
            width: "140px"
          }
        }
      },
      MuiDateCalendar: {
        styleOverrides: {
            root: {
            maxHeight: "320px",
            Height: "320px"
          }
        }
      },    
      MuiPickersDay: {
        styleOverrides: {
          root: {
            color
          },
          today: {
            color: color,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: '#ffffff',
            border: '0px solid',
            backgroundColor: 'rgb(20 20 10 / 20%)',
          }
        }
      },
      MuiPickersYears: {
        styleOverrides: {
          root: {
            color
          }
        }
      },
      MuiPickersCalendarHeader: {
        styleOverrides: {
          root: {
            color
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          sizeMedium: {
            color
          }
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            width: "0.9em"
          }
        }
      },
      MuiPickersCalendarHeader: {
        styleOverrides: {
        switchViewIcon: {
            fill: color
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color,
            fontSize: "0.88rem",
            fontFamily: '"Plus Jakarta Display","Roboto","Helvetica","Arial", "sans-serif"'
          },
          notchedOutline: {
            borderColor: "rgba(185, 185, 185, 0.23)",
            padding: '0 8px'
          },
          input: {
            height: '1em',
          }
        }
      },
      MuiDayCalendar: {
        styleOverrides: {
          weekDayLabel: {
            color,
            fontSize: "0.8rem",
            fontWeight: "800"
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color
          }
        }
      },
      MuiInputAdornment:{
        styleOverrides: {
          root: {
            marginLeft: "0px",
          }
        }
      },     
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color,
            fontSize: "0.88rem",
            fontFamily:'Plus Jakarta Display',
          }
        }
      }
    }
  }
);
