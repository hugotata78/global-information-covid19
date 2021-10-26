import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@material-ui/core'

const TableCountries = ({
    page,
    rowsPage,
    handleChangePage,
    handleChangeRowsPerPage,
    Countries
}) => {
    return (
        <div className='container-table'>
            <TableContainer className='table-info'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
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
                                        <TableCell>{index + 1}</TableCell>
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
        </div>
    )
}

export default TableCountries