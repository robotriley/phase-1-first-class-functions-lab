const returnFirstTwoDrivers = (param) => {
return param.slice(0, 2)
}

const returnLastTwoDrivers = (param) => {
return param.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return (fare) => {
     return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (names, func) => {
    return func(names)
}