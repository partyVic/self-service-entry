import mongoose from 'mongoose'

const ShiftSchema = mongoose.Schema({
    pit: {
        type: String,
        required: true
    },
    position: {
        type: String,
        enum: ['Dealer', 'GSup'],
        required: true
    },
    date: String,
    creator: {
        type: String,
        required: true
    },
    message: String,
    swap: String,
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    offer: String,
    offerTo: String,
    offerDay:String,
    createdTime: String
})

const Shifts = mongoose.model('Shifts', ShiftSchema)

export default Shifts