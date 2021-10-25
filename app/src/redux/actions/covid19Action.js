import axios from 'axios'

const url = 'https://api.covid19api.com/summary'
export const GET_INFO_COVID = 'GET_INFO_COVID'

export const getInfoCovid = ()=>{
    return async (dispatch)=>{
        const response = await axios.get(url)
        dispatch({
            type:GET_INFO_COVID,
            payload:response.data
        })
    }
}