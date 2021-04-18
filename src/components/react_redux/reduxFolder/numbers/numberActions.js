import {ADD_LINE, COUNT, DEL_LINE, ADD_NUMBER, CH_PERSENT, LEAVE} from './numberTypes'


export const addLine = (count) => {
	return {
		type: ADD_LINE,
		payload: count
	}
}

export const delLine = (count) => {
	return {
		type: DEL_LINE,
		payload: count
	}
}

export const addNumber = (id, number) => {
	return {
		type: ADD_NUMBER,
		payload1: id,
		payload2: number
	}
}


export const putCount = (count, item) => {
	return {
		type: COUNT,
		payload : count,
		payload2: item
	}
}

export const changeWidht = (item, el, index) => {
    return {
        type: CH_PERSENT,
        payload1: item,
        payload2: el,
        payload3: index 
    }
}

export const fLeave = (item, el, index) => {
    return {
        type: LEAVE,
        payload1: item,
        payload2: el,
        payload3: index 
    }
}