import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GlobalInfo from '../components/GlobalInfo'
import { getInfoCovid } from '../redux/actions/covid19Action'
import CountriesInfo from '../components/CountriesInfo'
import SearchCountryData from '../components/SearchCountryData'

export const Home = () => {

    const dispatch = useDispatch()
    const sumary = useSelector(state => state.covid19Reducers.sumary)

    useEffect(() => {
        dispatch(getInfoCovid())
    }, [dispatch])

    
    return (
        <>
            <header className='app-header'>
                <h1>COVID-19</h1>
            </header>
            <Grid container direction="row" justify="center" alignItems="center">
                <GlobalInfo Global={sumary && sumary.Global} />
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                <SearchCountryData Countries={sumary && sumary.Countries} />
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                <CountriesInfo Countries={sumary && sumary.Countries} />
            </Grid>
            
        </>
    )
}
