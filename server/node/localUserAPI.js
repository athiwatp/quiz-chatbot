let usersData = {}

/**
 * Set state of user in usersData
 * @param {string} senderID 
 * @param {object} state 
 */
async function setState(senderID, state) {
    if (!usersData.hasOwnProperty(senderID)) {
        usersData[senderID] = state 
    } else {
        usersData[senderID] = state
    }
}

// async function setRound(senderID, round) {
//     if (usersData.hasOwnProperty(senderID) === false) {
//         usersData[senderID] = { round }
//     } else {
//         usersData[senderID].round = round
//     }
// }

/**
 * Get state of user in usersData
 * @param {string} senderID 
 *
 */
async function getState(senderID) {
    if (!usersData.hasOwnProperty(senderID)) {
        return null
    } else {
        return usersData[senderID]
    }
}

module.exports = {setState, getState}