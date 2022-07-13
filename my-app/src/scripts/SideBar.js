import Avatar from '@mui/material/Avatar'
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar'
import { FaGem } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import 'react-pro-sidebar/dist/css/styles.css'

import yo from '../me.jpeg';
function Sidebar() {
  return (
    <>
      <ProSidebar style={{width:"30vw",minWidth:"20vw", maxWidth:"20em",height:'90vh'}}>
        <SidebarHeader>

        </SidebarHeader>
        <SidebarContent>
          {
            <Menu iconShape="square">
              <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
              <SubMenu title="Biografía" icon={<FaHeart />}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>
            </Menu>
          }
        </SidebarContent>
        <SidebarFooter>
          {/**
           *  You can add a footer for the sidebar ex: copyright
           */}
        </SidebarFooter>
      </ProSidebar>
    </>
  )
}

export default Sidebar;
