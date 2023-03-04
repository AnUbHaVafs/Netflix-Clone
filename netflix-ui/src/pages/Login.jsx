import react, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import { firebaseAuth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import BackgroundImage from '../components/BackgroundImage';
import './signup.css';
import './login.css';
import { useNavigate } from 'react-router-dom';
// import '../index.css';

const Login = () => {

    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: " ",
        password: " "
    })

    const handleLogIn = async () => {
        // console.log(formValues);
        try {
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        }
        catch (error) {
            console.log(error)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate('/');
    });

    return (
        <Container >
            <BackgroundImage />
            <div className="content">
                <Header />
                <div className="form-container flex column a-center j-center">
                    <div className="form1 flex column a-center j-center">
                        <div className="title">
                            <h3>Login</h3>
                        </div>
                        <div className="container flex column">
                            <form className="form">
                                <input className='input2' type="email" placeholder='Email Address' name="email"

                                    onChange={(e) => setFormValues({
                                        ...formValues, [e.target.name]: e.target.value
                                    })
                                    }
                                />
                                <input className='input2' type="password" placeholder='Password' name="password"

                                    onChange={(e) => setFormValues({
                                        ...formValues, [e.target.name]: e.target.value
                                    })
                                    } />
                                <button onClick={handleLogIn} className='button2'>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
position: relative;
`;

export default Login;
