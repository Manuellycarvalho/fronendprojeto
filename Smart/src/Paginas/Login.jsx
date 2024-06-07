import React from 'react';
import axios from 'axios';
import estilos from './Login.module.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const schemaLogin = z.object({
    usuario: z.string().min(5, 'Mínimo de 5 caracteres').max(20, 'Máximo de 20 caracteres'),
    senha: z.string().min(6, 'Informe 6 caracteres').max(8, 'Máximo de 8 caracteres'),
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
        <div className={estilos.containerLogin}>
            <div className={estilos.containerImage}></div>
            <div className={estilos.containerFormLogin}>
                <div className={estilos.headerTitle}>
                    <h1>Login</h1>
                    <p className='desc'>Bem vindo</p>
                </div>

                <form onSubmit={handleSubmit(obterDadosFormulario)}>
                    <div className={estilos.contentInput}>
                        <label htmlFor="usuarioText">Usuário</label>
                        <input
                            type="text"
                            id="usuarioText"
                            {...register('usuario')}
                        />
                        {errors.usuario && <span>{errors.usuario.message}</span>}
                    </div>
                    <div className={estilos.contentInput}>
                        <label htmlFor="passwordText">Senha</label>
                        <input
                            type="password"
                            id="passwordText"
                            {...register('senha')}
                        />
                        {errors.senha && <span>{errors.senha.message}</span>}
                    </div>
                    <button type='submit'>Entrar</button>
                </form>

                <div className={estilos.containerNav}>
                    <p>Novo Usuario? <a id='cadastre aText' href='#'>Cadastre-se</a></p>
                    <a id='esqueceuSenha aText' href="#">Esqueceu a senha</a>
                </div>
            </div>
        </div>
    );
}
