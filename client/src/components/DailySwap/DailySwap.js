import { useState } from 'react'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';

import DailyShifts from '../DailyShifts/DailyShifts';
import DailyForm from '../DailyForm/DailyForm';
import StyleWrapper from '../StyleWrapper/StyleWrapper'
import NavBar from '../NavBar/NavBar';
import '../ShiftSwap/ShiftSwap.css'

// let todayStr = new Date().toISOString().replace(/T.*$/, '')        // YYYY-MM-DD of today
// console.log(todayStr)


const DailySwap = () => {
    const [dayClick, setDayClick] = useState("") // set State when click on the day of the calendar
    const [open, setOpen] = useState(false); // used for MUI show all shifts Dialog
    const [subOpen, setSubOpen] = useState(false); // used for MUI show shift creation form Dialog


    const handleClickOpen = (e) => { // used for MUI Dialog
        setOpen(true);
        const dateStr = e.dateStr.split("-").reverse().join("-") // make e.dateStr to Aus format DD/MM/YYYY
        // console.log(dateStr)
        setDayClick(dateStr)
    };
    const handleClose = () => { // used for MUI show all shifts Dialog
        setOpen(false);
    };
    const handleSubClose = () => { // used for MUI show shift creation form Dialog
        setSubOpen(false);
    };
    const handleSunOpen = () => { // used for MUI show shift creation form Dialog
        setSubOpen(true)
    }

    return (
        <div className='ShiftSwap'>
            <NavBar />
            <div className='ShiftSwap-calendar'>
                <StyleWrapper>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        firstDay={1}
                        dateClick={handleClickOpen}

                        headerToolbar={{
                            right: 'prev,next',
                            left: 'title',
                        }}

                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true} // make the calendar shrink on smaller screen
                    />
                </StyleWrapper>

                {/* show all shifts */}
                <Dialog
                    fullWidth
                    open={open}
                    onClose={handleClose} //disable the Dialog when click outside
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <CancelIcon
                        sx={{
                            margin: "0.5rem 0.5rem 0 auto",
                            color: "#e91e63",
                            ':hover': {
                                transition: "0.25s",
                                transform: "scale(1.25)"
                            }
                        }}
                        onClick={handleClose}
                    />
                    <DialogTitle id="alert-dialog-title" sx={{ paddingTop: "0" }}>
                        <p className="ShiftSwap-para">
                            <span className='ShiftSwap-span' style={{ backgroundColor: "#dc1928" }}>{dayClick}</span>
                            &nbsp;&nbsp;&nbsp;Pit/Time Swap
                        </p>
                    </DialogTitle>
                    <DialogContent
                        sx={{ minHeight: "200px", minWidth: "200px" }}
                    >
                        {<DailyShifts
                            dateStr={dayClick}
                        />}
                    </DialogContent >
                    <DialogActions sx={{ justifyContent: "center" }}>
                        <Button
                            variant='contained'
                            onClick={handleSunOpen} >
                            Add Shift
                        </Button>
                    </DialogActions>

                </Dialog>

                {/* show shift creation form */}
                <Dialog
                    open={subOpen}
                    // onClose={handleSubClose} //disable the Dialog when click outside
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <CancelIcon
                        sx={{
                            margin: "0.5rem 0.5rem 0 auto",
                            color: "#e91e63",
                            ':hover': {
                                transition: "0.25s",
                                transform: "scale(1.25)"
                            }
                        }}
                        onClick={handleSubClose}
                    />
                    <DialogTitle id="alert-dialog-title" sx={{ paddingTop: "0", pb: "0" }}>
                        <p className="ShiftSwap-formTitle" style={{ color: "#f73378" }}>For Daily Swap</p>
                    </DialogTitle>
                    <DialogContent
                        sx={{ minHeight: "200px" }}
                    >
                        {<DailyForm
                            handleSubClose={handleSubClose}
                            date={dayClick}
                        />}
                    </DialogContent>
                    {/* <DialogActions sx={{ justifyContent: "center" }}>
                        <Button
                            variant='contained'
                            onClick={handleSubClose} >
                            Submit
                        </Button>
                    </DialogActions> */}
                </Dialog>

            </div>
        </div>
    )
}

export default DailySwap