import { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useCustomStates } from "../Provider/States";
import { Login } from "./Login";
import { Container } from "../assets/styles/styled-Header";
import {ReactComponent as UserIcon} from '../assets/img/user_icon.svg';

export const Header = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const { setLoginVisible } = useCustomStates()

    useEffect(() => {
        if (location.pathname === '/') {
            setLoginVisible(true)
        } else {
            setLoginVisible(false)
        }
    }, [navigate])

    return(
        <Container>
            <div>
                <nav>
                    <span onClick={() => navigate('/')}>Home</span>
                    <span onClick={() => navigate('/register')}>Cadastro</span>
                </nav>
                {location.pathname !== '/user' 
                
                ?   <Login/> 
                
                :   <section>
                        <UserIcon />
                        <a onClick={() => navigate('/')}>Logout</a>
                    </section>
                }
            </div>
        </Container>
    )
}