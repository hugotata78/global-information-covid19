import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React, { useState } from 'react'

const CountriesInfo = ({ Countries }) => {

    const [page, setPage] = useState(0)
    const [rowsPage, setRowsPage] = useState(5)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPage(+event.target.value);
        setPage(0);
    };

    return (
        <Card className='card card-form-table'>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Paises</TableCell>
                            <TableCell>Nuevos Confirmados</TableCell>
                            <TableCell>Total Confirmados</TableCell>
                            <TableCell>Nuevas Muertes</TableCell>
                            <TableCell>Total Muertes</TableCell>
                            <TableCell>Nuevos Recuperados</TableCell>
                            <TableCell>Total Recuperados</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Countries && Countries.slice(
                                page * rowsPage,
                                page * rowsPage + rowsPage
                            ).map((country, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{country.Country}</TableCell>
                                        <TableCell>{country.NewConfirmed}</TableCell>
                                        <TableCell>{country.TotalConfirmed}</TableCell>
                                        <TableCell>{country.NewDeaths}</TableCell>
                                        <TableCell>{country.TotalDeaths}</TableCell>
                                        <TableCell>{country.NewRecovered}</TableCell>
                                        <TableCell>{country.TotalRecovered}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                labelRowsPerPage="Páginas: "
                rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
                component="div"
                count={Countries && Countries.length}
                rowsPerPage={rowsPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Card>
    )
}

export default CountriesInfo