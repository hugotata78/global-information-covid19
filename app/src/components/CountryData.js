import React from 'react'
import IconNewConfirmed from "@material-ui/icons/AddAlert";
import IconTotalConfirmed from "@material-ui/icons/AirlineSeatFlat";
import IconNewDeaths from "@material-ui/icons/NewReleases";
import IconTotalDeaths from "@material-ui/icons/MoodBad";
import IconNewRecovered from "@material-ui/icons/AccessibilityNew";
import IconTotalRecovered from "@material-ui/icons/EmojiEmotions";
import {
    List,
    Avatar,
    ListItemAvatar,
    ListItem,
    ListItemText,
} from "@material-ui/core";

const CountryData = ({ country }) => {
    return (
        <>
            <h2>Información de {country && country.Country}</h2>
            <div className='card-row'>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className='avatar1'>
                                <IconNewConfirmed className="color1" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={country && country.NewConfirmed}
                            secondary='Nuevos casos confirmados'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className='avatar1'>
                                <IconTotalConfirmed className="color1" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={country && country.TotalConfirmed}
                            secondary='Total casos confirmados'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className='avatar2'>
                                <IconNewDeaths className="color2" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={country && country.NewDeaths}
                            secondary='Nuevos descesos'
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className='avatar2'>
                                <IconTotalDeaths className="color2" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={country && country.TotalDeaths}
                            secondary='Total descesos'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="avatar3">
                                <IconNewRecovered className="color3" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={country && country.NewRecovered}
                            secondary="Nuevos recuperado"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className="avatar3">
                                <IconTotalRecovered className="color3" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={country && country.TotalRecovered}
                            secondary="Total recuperado"
                        />
                    </ListItem>
                </List>
            </div>
        </>
    )
}

export default CountryData