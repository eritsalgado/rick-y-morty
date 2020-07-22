import React from 'react'
import {Link} from 'react-router-dom'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import ContactsIcon from '@material-ui/icons/Contacts';
import ListAltIcon from '@material-ui/icons/ListAlt';

const Listas = () => {
    return (
        <div>
            <List
                components='nav'
            >
                <ListItem 
                    button
                    component={Link}
                    to="/personajes"
                >
                    <ListItemIcon>
                        <ContactsIcon/>
                    </ListItemIcon>
                    <ListItemText 
                        primary='Personajes'
                    />
                </ListItem>

                <ListItem 
                    button
                    component={Link}
                    to="/capitulos"
                >
                    <ListItemIcon>
                        <ListAltIcon/>
                    </ListItemIcon>
                    <ListItemText 
                        primary='Capitulos'
                    />
                </ListItem>
            </List>
        </div>
    )
}

export default Listas
