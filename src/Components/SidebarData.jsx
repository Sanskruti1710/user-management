import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UpdateIcon from '@mui/icons-material/Update';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';

const SidebarData = [
 {   title:"UserProfile",
    icon:<AccountCircleIcon/>,
    link:"/home"
},
{
    title:"Settings",
    icon:<SettingsIcon/>,
    link:"/home"
},
{
    title:"Updates",
    icon:<UpdateIcon/>,
    link:"/home"
},
{
    title:"Help",
    icon:<HelpOutlineIcon/>,
    link:"/help"
}
];

export default SidebarData;
