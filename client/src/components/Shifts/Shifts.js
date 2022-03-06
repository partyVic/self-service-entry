import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getShifts } from '../../actions/shifts'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import './Shifts.css'
import OfferForm from "../OfferForm/OfferForm";

const Shifts = ({ dateStr }) => {
    const [open, setOpen] = useState(false); // used for MUI show all shifts Dialog
    const [subOpen, setSubOpen] = useState(false); // used for MUI show shift creation form Dialog
    const [clickShift, setClickShift] = useState({})

    const shifts = useSelector((state) => state.shifts)

    const currentDayShifts = shifts.filter((shift) => (shift.date === dateStr && shift.swap === "shiftSwap"))
    // if(currentDayShifts.length) console.log(currentDayShifts.map((shift)=>shift._id))  //first API fetch may have enpty []

    const offerShifts = shifts.filter((shift) => (shift.offerTo === clickShift._id && shift.offer === "shiftOffer"))

    // console.log(clickShift._id)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getShifts())
    }, [dispatch])

    // console.log(shifts)

    // used for MUI show all shifts Dialog
    const handleOpen = (shift) => {
        setOpen(true)
        setClickShift(shift)
        // console.log(shift)
    }
    const handleClose = () => { setOpen(false) }

    const handleSubClose = () => { // used for MUI show shift creation form Dialog
        setSubOpen(false);
    };
    const handleSunOpen = () => { // used for MUI show shift creation form Dialog
        setSubOpen(true)
    }

    return (
        !shifts.length  //check shifts from API call, if NO data come back, show MUI loader
            ?
            <Stack alignItems="center" mt={6}>
                <CircularProgress />
            </Stack>
            :

            <div className='Shifts'>
                <div>
                    {currentDayShifts.map((shift) => (
                        <button
                            className="Shifts-button"
                            key={shift._id}
                            onClick={() => handleOpen(shift)} // ***IMPORTANT***passed in shift as para to get the clicked shift
                        >
                            <div className="Shifts-info">
                                <span className="Shifts-info-pit">Pit {shift.pit}</span>
                                <span className="Shifts-info-time">{shift.startTime} - {shift.endTime}</span>
                                <span className="Shifts-info-position">{shift.position}</span>
                                <span className="Shifts-info-creator">{shift.creator}</span>
                            </div>
                        </button>
                    ))}
                </div>

                <Dialog
                    fullWidth
                    open={open}
                    onClose={handleClose} //disable the Dialog when click outside
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
                    <DialogTitle id="alert-dialog-title" sx={{ paddingTop: "0", paddingBottom: "0" }}>
                        <p className="ShiftSwap-para">{clickShift.creator} Says:</p>
                    </DialogTitle>
                    <div
                    // sx={{ minHeight: "200px", minWidth: "200px" }}
                    >
                        <div className="Shift-message">
                            <p>{clickShift.message}</p>
                        </div>
                        <p className="Shift-offers">SUBMITTED &nbsp; OFFERS</p>
                        <DialogContent sx={{ paddingTop: "10px" }}>
                            {offerShifts.map((shift) => (
                                <button
                                    className="Shifts-offer"
                                    key={shift._id}
                                >
                                    <div className="Shifts-info" >
                                        <span className="Shifts-info-offerDay">{shift.offerDay}</span>
                                        <span className="Shifts-info-pit">Pit {shift.pit}</span>
                                        <span className="Shifts-info-time">{shift.startTime} - {shift.endTime}</span>
                                        <span className="Shifts-info-position">{shift.position}</span>
                                        <span className="Shifts-info-creator">{shift.creator}</span>
                                    </div>
                                    {shift.message.length > 0
                                        ?
                                        <div className="Shifts-offerMessage">
                                            <p>{shift.message}</p>
                                        </div>
                                        : ""}

                                </button>
                            ))}
                        </DialogContent>
                    </div >
                    <DialogActions sx={{ justifyContent: "center" }}>
                        <Button
                            variant='contained'
                            onClick={handleSunOpen} >
                            Make Your Offer
                        </Button>
                    </DialogActions>
                </Dialog>

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
                        <p className="ShiftSwap-formTitle">For Shift Offer</p>
                    </DialogTitle>
                    <DialogContent
                        sx={{ minHeight: "200px" }}
                    >
                        {<OfferForm
                            handleSubClose={handleSubClose}
                            clickShift={clickShift}
                        />}
                    </DialogContent>
                </Dialog>

            </div>
    )
}


export default Shifts