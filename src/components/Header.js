import React from 'react'
//import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../stylesheets/menus.scss'

const pStyle1 = {
    display: 'block',
    float: 'right',
    margin: '5px 0 -5px',
    paddingRight: '15px',
    textDecoration: 'underline'
}
const pStyle2 = {
    marginTop: '15px',
    paddingLeft: '20px'
}

const Header = () =>
<div>
    <NavLink to="/ru" style={pStyle1}>на русском</NavLink>
    <div className="clear"></div>
    <NavLink to="/" id="name">Face and Body treatments</NavLink>
    <div class="attn1">call for an appointment: 647-988-8989</div>
    <p style={pStyle2}>
        <NavLink to="/">Home</NavLink>&nbsp; / &nbsp;
        <NavLink to="/bdr">Beauty defect repair</NavLink>&nbsp; / &nbsp;
        <NavLink to="/cost">Price list</NavLink>
    </p>
    <div className="clear"></div>
</div>

export default Header