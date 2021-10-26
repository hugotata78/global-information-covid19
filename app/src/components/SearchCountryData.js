import React, { useState } from 'react'
import { Card, CardHeader } from "@material-ui/core";
import CountryData from './CountryData';

const SearchCountryData = ({ Countries }) => {
    const [textValue, setTextValue] = useState('')
    const [country, setCountry] = useState(null)


    const handleFilterTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleOnClick = (e) => {
        e.preventDefault();
        const data = Countries && Countries.find(item => item.Country === textValue)
        setCountry(data)
        setTextValue('')
    };

    return (
        <Card className='card card-form'>
            <CardHeader
                title="Buscar Información por país"
                subheader="Seleccione un país del que desee conocer confirmados, muertes y recuperados"
            />
            <div className="space">
                <form noValidate>
                    <input
                        type="text"
                        list="data"
                        placeholder="Buscar país..."
                        value={textValue}
                        onChange={handleFilterTextChange}
                    />
                    <datalist id="data">
                        {Countries &&
                            Countries.map((item, key) => (
                                <option key={key} value={item.Country} />
                            ))}
                    </datalist>
                    <button onClick={handleOnClick}>Enviar</button>
                </form>
                <div>
                    <div>{!country ? "Sin resultados..." : <CountryData country={country} />}</div>
                </div>
            </div>
        </Card>
    )
}

export default SearchCountryData