import {
    Avatar,
    Card,
    CardHeader,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@material-ui/core'
import IconNewConfirmed from "@material-ui/icons/AddAlert";
import IconTotalConfirmed from "@material-ui/icons/AirlineSeatFlat";
import IconNewDeaths from "@material-ui/icons/NewReleases";
import IconTotalDeaths from "@material-ui/icons/MoodBad";
import IconNewRecovered from "@material-ui/icons/AccessibilityNew";
import IconTotalRecovered from "@material-ui/icons/EmojiEmotions";
import moment from 'moment'
import "moment/locale/es";
import React from 'react'


const GlobalInfo = ({ Global }) => {

    moment.locale('es')
    return (
        <Card className='card'>
            <CardHeader
                title='Información Global Covid 19'
                subheader={moment(Global && Global.Date).format('LLLL')}
            />
            <div className='card-row'>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className='avatar1'>
                                <IconNewConfirmed className="color1" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={Global && Global.NewConfirmed}
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
                            primary={Global && Global.TotalConfirmed}
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
                            primary={Global && Global.NewDeaths}
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
                            primary={Global && Global.TotalDeaths}
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
                            primary={Global && Global.NewRecovered}
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
                            primary={Global && Global.TotalRecovered}
                            secondary="Total recuperado"
                        />
                    </ListItem>
                </List>
            </div>
        </Card>
    )
}

export default GlobalInfo