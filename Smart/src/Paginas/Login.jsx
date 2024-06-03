import React from 'react';
import axios from 'axios';

import estilos from './Login.module.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
// import { version } from '../assets/Preview.svg';

const schemaLogin = z.object({
    usuario: z.string().min(5, 'Mínimo de 5 caracteres').max(20, 'Máximo de 20 caracteres'),
    senha: z.string().min(6, 'Informe 6 caracteres').max(6, 'Máximo de 8 caracteres'),
});

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schemaLogin)
    });

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username: data.usuario,
                password: data.senha
            });

            const { access, refresh } = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            console.log('Login bem-sucedido!');
            navigate('/inicial'); // Redireciona para a página de sensores
        } catch (error) {
            console.error('Erro de autenticação', error);
        }
    }

    return (
        <div className={estilos.container}>
            <div className="content first-content">
                <div className="first-column">
                    <h2 className="title title-primary">welcome back!</h2>
                    <p className="description description-primary">To keep connected with us</p>
                    <p className="description description-primary">please login with your personal info</p>
                    <button id="signin" className="btn btn-primary">sign in</button>
                </div>    
                <div className="second-column">
                    <h2 className="title title-second">create account</h2>
                    <div className="social-media">
                        <ul className="list-social-media">
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-facebook-f"></i>        
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-google-plus-g"></i>
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-linkedin-in"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <p className="description description-second">or use your email for registration:</p>
                    <form className="form">
                        <label className="label-input" htmlFor="">
                            <i className="far fa-user icon-modify"></i>
                            <input type="text" placeholder="Name" />
                        </label>
                        
                        <label className="label-input" htmlFor="">
                            <i className="far fa-envelope icon-modify"></i>
                            <input type="email" placeholder="Email" />
                        </label>
                        
                        <label className="label-input" htmlFor="">
                            <i className="fas fa-lock icon-modify"></i>
                            <input type="password" placeholder="Password" />
                        </label>
                        
                        
                        <button className="btn btn-second">sign up</button>        
                    </form>
                </div>
            </div>
            <div className="content second-content">
                <div className="first-column">
                    <h2 className="title title-primary">hello, friend!</h2>
                    <p className="description description-primary">Enter your personal details</p>
                    <p className="description description-primary">and start journey with us</p>
                    <button id="signup" className="btn btn-primary">sign up</button>
                </div>
                <div className="second-column">
                    <h2 className="title title-second">sign in to developer</h2>
                    <div className="social-media">
                        <ul className="list-social-media">
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-facebook-f"></i>
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-google-plus-g"></i>
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-linkedin-in"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <p className="description description-second">or use your email account:</p>
                    <form className="form">
                    
                        <label className="label-input" htmlFor="">
                            <i className="far fa-envelope icon-modify"></i>
                            <input type="email" placeholder="Email" />
                        </label>
                    
                        <label className="label-input" htmlFor="">
                            <i className="fas fa-lock icon-modify"></i>
                            <input type="password" placeholder="Password" />
                        </label>
                    
                        <a className="password" href="#">forgot your password?</a>
                        <button className="btn btn-second">sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}



