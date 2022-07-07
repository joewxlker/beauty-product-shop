export const checkObj = (input: any) => {
    const dataArray = Object.keys(input);
    
    if (dataArray.length === 0 || input === null || input === undefined) return true
    for (let v in dataArray) {
        if (input[dataArray[v]] === '') {
            input[dataArray[v]]
            return true
        }
        if (input[dataArray[v]] === 'Day' || input[dataArray[v]] === 'Month' || input[dataArray[v]] === 'Year') {
            input[dataArray[v]]
            return true
        }
    }
    return false 
}