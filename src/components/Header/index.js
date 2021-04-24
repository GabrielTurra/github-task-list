import { GoMarkGithub, GoChevronDown } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom'

import { 
    Container, 
    Content, 
    InputContent, 
    ButtonMenu,
    LogoutButton
} from './styles';

import SlashInput from '../../assets/search-key-slash.svg';

import { destroySession } from '../../store/Session/Session.actions';


const Header = () => {
    const session = useSelector(state => state.session);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(destroySession());
    }

    return (
        <Container>
            <Content>
                <nav>
                    <GoMarkGithub />
                    <ul>
                        <li>Why GitHub? <GoChevronDown /></li>
                        <li>Team</li>
                        <li>Enterprise</li>
                        <li>Explore <GoChevronDown /></li>
                        <li>Marketplace</li>
                        <li>Pricing <GoChevronDown /></li>
                    </ul>
                </nav>
                <div>
                    {session[0]?.name 
                    ?   <>
                            <ButtonMenu type="button">{session[0]?.name}</ButtonMenu>
                            <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
                        </>
                    :   <>
                            <InputContent>
                                <input type="text" placeholder="Search GitHub"  />
                                <img alt="Search Region"src={SlashInput} />
                            </InputContent>

                            
                            <Link to="/login"> 
                                <ButtonMenu type="button">Sign in</ButtonMenu>
                            </Link>                           
                            <ButtonMenu type="button" isBordered={true}>Sign up</ButtonMenu>
                        </>
                    }
                </div>
            </Content>
        </Container>
    );
}

export default Header;