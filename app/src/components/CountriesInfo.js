import { Card } from '@material-ui/core'
import React, { useState } from 'react'
import TableCountries from './TableCountries'

const CountriesInfo = ({ Countries }) => {
    const [order, setOrder] = useState('')
    const [ title, setTitle ]= useState('')
    const [listCountries, setListCountries] = useState([])
    const [page, setPage] = useState(0)
    const [rowsPage, setRowsPage] = useState(5)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPage(+event.target.value);
        setPage(0);
    };

    const handleFilterTextChange = (e) => {
        setOrder(e.target.value);
    };

    const sortListCountries = (value) => {
        switch (value) {
            case 'A-Z':
                listCountries.length > 0 ?
                setListCountries(listCountries.sort((a, b) => {
                    if (a.Country > b.Country) {
                        return 1
                    }
                    if (a.Country < b.Country) {
                        return -1
                    }
                    return 0
                }))
                :
                setListCountries(Countries)
                break
            case 'Z-A':
                setListCountries(Countries.sort((a, b) => {
                    if (a.Country < b.Country) {
                        return 1
                    }
                    if (a.Country > b.Country) {
                        return -1
                    }
                    return 0
                }))

                break
            case '+ Casos Confirmados':
                setListCountries(Countries.sort((a, b) => {
                    return b.TotalConfirmed - a.TotalConfirmed
                }))
                break

            case '- Casos Confirmados':
                setListCountries(Countries.sort((a, b) => {
                    return a.TotalConfirmed - b.TotalConfirmed
                }))
                break

            case '+ Muertes Confirmadas':
                setListCountries(Countries.sort((a, b) => {
                    return b.TotalDeaths - a.TotalDeaths
                }))
                break

            case '- Muertes Confirmadas':
                setListCountries(Countries.sort((a, b) => {
                    return a.TotalDeaths - b.TotalDeaths
                }))
                break

            default:
                setListCountries(Countries)
        }
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        setTitle(order)
        sortListCountries(order, Countries)
        setOrder('')
    }


    return (
        <Card className='card card-form-table'>
            <h3>Tabla de datos por pais</h3>
            <div className="space">
                <h2>Ordenar lista de Paises</h2>
                <form noValidate>
                    <input
                        type="text"
                        list="order"
                        placeholder="Ordenar Lista"
                        value={order}
                        onChange={handleFilterTextChange}
                    />
                    <datalist id="order">
                        <option value='A-Z' />
                        <option value='Z-A' />
                        <option value='+ Casos Confirmados' />
                        <option value='- Casos Confirmados' />
                        <option value='+ Muertes Confirmadas' />
                        <option value='- Muertes Confirmadas' />
                    </datalist>
                    <button onClick={handleOnClick}>Enviar</button>
                </form>
                <h4>{title}</h4>
            </div>
            <TableCountries
                page={page}
                rowsPage={rowsPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                Countries={
                    listCountries.length > 0 ?
                        listCountries :
                        Countries
                }
            />
        </Card>
    )

}
export default CountriesInfo