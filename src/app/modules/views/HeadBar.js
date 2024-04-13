import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Image from "next/image";
import Divider from '@mui/material/Divider';

export default function AppAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed" style={{"box-shadow": "none"}}>
                <Toolbar className="Toolbar">
                    <Image
                        className="HeaderLogo"
                        src="./header_logo.svg"
                        alt="Поплавок"
                        width={154}
                        height={49}
                        priority
                    />
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            className="ToolButtonGroup"
                        >
                            <div className="MenuButtonGroup">
                                <Image
                                    src="./tool_button_help.svg"
                                    alt="Поплавок Помощь"
                                    width={15}
                                    height={15}
                                    priority
                                />
                                <Image
                                    src="./tool_button_user.svg"
                                    alt="Поплавок Пользователь"
                                    width={15}
                                    height={15}
                                    priority
                                />
                            </div>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Зарегистрироваться</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Войти</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Разместить<br/>предложение</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Служба поддержки</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}