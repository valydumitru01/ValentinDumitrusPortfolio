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

import { useRef, useEffect } from 'react'
import { style } from '@mui/system'
function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}
function Sidebar({ timeout = 50 }) {
  const sidebarCanvas = useRef();
  const style = { backgroundColor: "black", top: "0", position: "absolute", width: "30vw", minWidth: "20vw", maxWidth: "20em", height: '90vh', fontFamily: "monospace", color: "#0f0" }
  useEffect(() => {
    const context = sidebarCanvas.current.getContext('2d');
    const width = document.body.offsetWidth *0.2;
    const height = document.body.offsetHeight;
    console.log(width)
    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    const columns = 2;


    const yPositions = Array.from({ length: columns }).fill(0);

    context.fillStyle = '#000f';
    context.fillRect(0, 0, width, height);
    const matrixEffect = () => {
      context.fillStyle = '#1116';
      context.fillRect(0, 0, width, height);

      context.fillStyle = '#0f0';
      context.font = '15pt monospace';
      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * width;
        context.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 20;
        }
      });
    };
    const interval = setInterval(matrixEffect, timeout);
    return () => {
      clearInterval(interval);
    };

  }, [sidebarCanvas, timeout]);
  return (
    <>

      <ProSidebar style={style} >
        <SidebarHeader>
        
        </SidebarHeader>
        <SidebarContent style={{backgroundColor:"#111"}}>
          {
            <Menu iconShape="round" >
              <canvas style={{position:"absolute"}} ref={sidebarCanvas}/> 
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
      <div style={style}>
        
      </div>

    </>
  )
}

export default Sidebar;
