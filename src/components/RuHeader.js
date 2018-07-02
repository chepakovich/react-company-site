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
    <NavLink to="/" style={pStyle1}>in English</NavLink>
    <NavLink to="/" id="name">Face and Body treatments</NavLink>
    <div class="attn1">call for an appointment: 647-988-8989</div>
    <div className="clear"></div>
</div>

export default Header