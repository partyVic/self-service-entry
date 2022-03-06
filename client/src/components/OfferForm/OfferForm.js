import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createShift } from '../../actions/shifts'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import frLocale from 'date-fns/locale/fr';
import Stack from '@mui/material/Stack'
import buttonIsFalse from '../../helperFunction/buttonIsFalse';
import { pits, startTime, endTime } from '../../constants/formConsts'

const OfferForm = (props) => {

  //used for MUI Autocomplete
  const defaultPitProps = {
    options: pits,
    getOptionLabel: (option) => option,
  };
  const defaultStartTimeProps = {
    options: startTime,
    getOptionLabel: (option) => option,
  }; const defaultEndTimeProps = {
    options: endTime,
    getOptionLabel: (option) => option,
  };

  const [datePickerValue, setDatePickerValue] = useState(null); //used for MUI Datepicker

  // ----- Datepick may cause huge performance issue, every time change form input value, 
  // ----- it will cause re-rendering! 
  // console.log(datePickerValue) //This will keep re-rendering
  // ----- Need to be solved -----
  // ----- New update, May NOT BE a Problem. Because every form using onChange to update the state, it may cause the state keep updating

  const [shiftData, setShiftData] = useState({
    pit: "",
    position: "",
    date: "",
    swap: "",
    creator: "",
    message: "",
    startTime: "",
    endTime: "",
    offer: "shiftOffer",
    offerTo: props.clickShift._id,
    offerDay: "",
    createdTime: new Date()
  })

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createShift(shiftData))
    props.handleSubClose()
  }

  const onChange = (e) => {
    setShiftData({
      ...shiftData,
      [e.target.name]: e.target.value
    })
  }

  //make submit button disable if not been filled
  const isFalse = buttonIsFalse(shiftData.pit, shiftData.startTime, shiftData.endTime, shiftData.position, shiftData.creator)

  return (
    <div className="ShiftForm">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >

        <Stack spacing={2}>
          <TextField
            name="creator"
            fullWidth
            id="creator"
            label="Name"
            variant="standard"
            onChange={onChange}
          />


          <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
            <DatePicker
              label="Pick a Day"
              value={datePickerValue}
              onChange={(newValue) => {
                setDatePickerValue(newValue);
                //make the MUI Datepicker value usable for JS
                setShiftData({ ...shiftData, offerDay: JSON.stringify(newValue).slice(1, 11).split("-").reverse().join("-") })
              }}
              renderInput={(dayPickerParams) => <TextField {...dayPickerParams} />}
            />
          </LocalizationProvider>


          <Autocomplete
            {...defaultPitProps}
            fullWidth
            id="pit"
            clearOnEscape
            renderInput={(params) => (
              <TextField {...params} label="Pit" variant="standard" />
            )}
            onChange={(object, value) => setShiftData({ //!Import !!! use this way to get the value from MUI Autocomplete
              ...shiftData,
              pit: value
            })}
          />

          <Autocomplete
            {...defaultStartTimeProps}
            fullWidth
            id="startTime"
            clearOnEscape
            renderInput={(params) => (
              <TextField {...params} label="Start" variant="standard" />
            )}
            onChange={(object, value) => setShiftData({ //!Import !!! use this way to get the value from MUI Autocomplete
              ...shiftData,
              startTime: value
            })}
          />

          <Autocomplete
            {...defaultEndTimeProps}
            fullWidth
            id="endTime"
            clearOnEscape
            renderInput={(params) => (
              <TextField {...params} label="Finish" variant="standard" />
            )}
            onChange={(object, value) => setShiftData({ //!Import !!! use this way to get the value from MUI Autocomplete
              ...shiftData,
              endTime: value
            })}
          />

          <FormControl sx={{ display: "block" }}>
            <FormLabel id="position">Position</FormLabel>
            <RadioGroup
              row
              name="position"
              onChange={onChange}
            >
              <FormControlLabel value="Dealer" control={<Radio />} label="Dealer" />
              <FormControlLabel value="GSup" control={<Radio />} label="GSup" />
            </RadioGroup>
          </FormControl>

          <TextField
            name="message"
            fullWidth
            sx={{ display: "block" }}
            id="message"
            label="Message"
            variant="standard"
            onChange={onChange}
          />
        </Stack>

        <Button
          disabled={!isFalse}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>

      </Box>
    </div>

  )
}

export default OfferForm