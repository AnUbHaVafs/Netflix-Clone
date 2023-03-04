import react, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import { firebaseAuth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import BackgroundImage from '../components/BackgroundImage';
import './signup.css';
import { useNavigate } from 'react-router-dom';
// import '../index.css';

const Signup = () => {


    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: " ",
        password: " "
    })

    const handleSignin = async () => {
        // console.log(formValues);
        try {
            const { email, password } = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
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

                <Header login />
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Unlimited movies, TV shows and more</h1>
                        <h4>Watch anywhere, cancel anytime.</h4>
                        <h6>Ready to watch ? Enter your email to create or restart membership.</h6>
                    </div>
                    <form className="form">
                        <input className='input1' type="email" placeholder='Email Address' name="email"

                            onChange={(e) => setFormValues({
                                ...formValues, [e.target.name]: e.target.value
                            })
                            }
                        />
                        <input className='input1' type="password" placeholder='Password' name="password"

                            onChange={(e) => setFormValues({
                                ...formValues, [e.target.name]: e.target.value
                            })
                            } />
                        <button className='button1'>Get Started</button>
                    </form>
                    <button className='button2' onClick={handleSignin} >Sign Up</button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
position: relative;
`;

export default Signup;
