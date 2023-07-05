import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = styled.p`
    background-color:#385994;
    padding-bottom:20px;

`
const Image = styled.img`
padding-top:-20px;
justify-content:start;
padding-left:60px;

`

const UnorderList = styled.ul`
    
`
const List = styled.li`
 display:flex;
 justify-content:end;
 padding-top:-70px;
 margin-right:250px;
 list-style:none;
margin-top:-30px;
 padding-bottom:20px;

 @media(max-width:738px){
        display:block;
        margin:30px 0;
        line-height:50px;
        

 }

 .links{
    text-decoration:none;
    color:black;
    font-size:17px;
    padding-left:30px;
    color:#ffff;

    @media(max-width:738px){
        font-size:24px;
    }

    &:hover{
        color:#B9A788 !important;
    }
 }


 
 
`
// function toggleMenu() {



// }
export default function Header() {
    return (
        <NavigationBar>



            <UnorderList>
                <Image src='./assets/Images/Logo.png' alt=''></Image>
                <List className=''>

                    <li><Link className='links fw-bold' to='/'>Home</Link></li>
                    <li><Link className='links  fw-bold' to='/about-us'>About us</Link></li>
                    <li><Link className='links  fw-bold' to='/gallery'>Gallery</Link></li>
                    <li><Link className='links  fw-bold' to='/contact-us'>Contact us</Link></li>


                </List>



            </UnorderList>

        </NavigationBar>
    )
}