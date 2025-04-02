import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CrwnLogo from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import {signOutUser} from '../../utils/firebase/firebase.utils';

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () =>{
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <img src={CrwnLogo} className='logo' alt='Logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>

                    {currentUser ? (<NavLink as='span' onClick={signOutHandler} >SIGN OUT</NavLink>) : (<NavLink to='/auth'>
                        SIGN IN
                    </NavLink>)}
                    
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown /> }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;