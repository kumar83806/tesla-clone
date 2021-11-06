import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Fade from 'react-reveal/Fade';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>

            <Menu>
                <a herf="#">Model S</a>
                <a herf="#">Model Y</a>
                <a herf="#">Model 3</a>
                <a herf="#">Model X</a>
                <a herf="#">About Us</a>
            </Menu>

            <RightMenu>
            <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a herf="#">Mail</a></li>
                <li><a herf="#">Environmental Data</a></li>
                <li><a herf="#">Bidding</a></li>
                <li><a herf="#">Technical</a></li>
                <li><a herf="#">Star Quiz</a></li>
                <li><a herf="#">Dealer Login</a></li>
                <li><a herf="#">FAQ</a></li>
                <li><a herf="#">Contact Us</a></li>
                <li><a herf="#">UPI Pay</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
cursor: pointer;

a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}

a:hover {
    border-radius: 5px;
    background-color: white;
}

@media (max-width: 768px) {
    display: none;
}
`

const RightMenu = styled.div`
display: flex;
align-item: center;

a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
}
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`

const BurgerNav = styled.div`
cursor: pointer;
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ease-in-out;

li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);


    a {
        font-weight: 600;
    }
}
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
