import * as React from "react";
import { useState, useRef } from 'react';
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider } from "@mui/material/styles";
import dayjs from "dayjs";
import { DateField } from '@mui/x-date-pickers/DateField';
import {
  usePickerLayout,
  PickersLayoutRoot,
  PickersLayoutContentWrapper,
  pickersLayoutClasses,
} from '@mui/x-date-pickers/PickersLayout';
import { theme } from "./theme";



export default function DatePick() {
  const [value, setValue] = React.useState(dayjs());
  
  const [showCalendar, setShowCalendar] = useState(true);

  const MyCustomLayout = (props) => {
    const { toolbar, content, actionBar } = usePickerLayout(props);
    return (
      <PickersLayoutRoot
        className={pickersLayoutClasses.root}
        ownerState={props}
        sx={{
          [`.${pickersLayoutClasses.contentWrapper}`]: {
            "& .Mui-selected": {
              backgroundColor: "#ffffff",
              color: "#000000",
            },
            "& .Mui-selected:hover": {
              backgroundColor: "#ffffff",
              color: "#ffffff",
            },
            "& .Mui-selected:focus": {
              backgroundColor: "#ffffff",
              color: "#000000",
            },
            "& .Mui-disabled": {
              color: "rgb(255 255 255 / 20%) !important",
            },
            
            "& .css-7fmqmg-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)": {
              border: "1px solid rgba(255, 255, 255, 0.6)",
            },
          },
        }}
      >
        {toolbar}
        <PickersLayoutContentWrapper className={pickersLayoutClasses.contentWrapper}>
          {showCalendar ? (
            content
          ) : (
            <DateField
            />
          )
        }
        </PickersLayoutContentWrapper>
        {actionBar}
      </PickersLayoutRoot>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Choose Date"
          format="DD/MM/YYYY"
          maxDate =  {dayjs()} 
          minDate = {dayjs('2023-11-01')} 
          views={['year', 'month', 'day']}
          slots={{
            layout: MyCustomLayout
          }}
          slotProps={{
            textField: { 
              size: 'small', 
            }
          }}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => {
            return <TextField {...params} 
            />;
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
