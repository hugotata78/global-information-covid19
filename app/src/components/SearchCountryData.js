import React, { useState } from 'react'
import { Card, CardHeader } from "@material-ui/core";
import CountryData from './CountryData';

const SearchCountryData = ({ Countries }) => {
    const [textValue, setTextValue] = useState()
    const [ country, setCountry ] = useState(null)
    
    
    const handleFilterTextChange = (e) => {
        setTextValue(e.target.value);
      };
    
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const data = Countries && Countries.find(item=> item.Country === textValue)
          setCountry(data)
        }
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
                        onKeyPress={handleKeyPress}
                        onChange={handleFilterTextChange}
                    />
                    <datalist id="data">
                        {Countries &&
                            Countries.map((item, key) => (
                                <option key={key} value={item.Country} />
                            ))}
                    </datalist>
                </form>
                <div>
                    <div>{!country ? "Sin resultados..." : <CountryData country={country} />}</div>
                </div>
            </div>
        </Card>
    )
}

export default SearchCountryData