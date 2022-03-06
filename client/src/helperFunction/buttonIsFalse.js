const buttonIsFalse = (pit, startTime, endTime, position, creator) => {
    return (pit !== "" && pit !== null) && (startTime !== "" && startTime !== null) && (endTime !== "" && endTime !== null) && (position !== "" && position !== null) && (creator !== "" && creator !== null)
}

export default buttonIsFalse