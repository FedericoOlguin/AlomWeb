import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ChatIcon from "@mui/icons-material/Chat";
import "./drawer.css"

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        className="drawerContainer"
      >
        {/* <ListItemText className='tituloMenu' primary="Átom" /> */}
        <h2 className="tituloMenu">Átom</h2>
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon className="iconMenu" />
            </ListItemIcon>
            <ListItemText className="linkMenu" primary="Inicio" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <BusinessCenterIcon className="iconMenu" />
            </ListItemIcon>
            <ListItemText className="linkMenu" primary="Portafolio" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <DeveloperModeIcon className="iconMenu" />
            </ListItemIcon>
            <ListItemText className="linkMenu" primary="Servicios" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <GroupsIcon className="iconMenu" />
            </ListItemIcon>
            <ListItemText className="linkMenu" primary="Sobre nosotros" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ChatIcon className="iconMenu" />
            </ListItemIcon>
            <ListItemText className="linkMenu" primary="Contacto" />
          </ListItem>

          {/* {['Prueba1', 'prueba2', 'prueba4', 'prueba5'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        </List>
        {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuOpenIcon className='iconMenu' /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}