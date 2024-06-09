import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import estilos from './CadastrarSensor.module.css';

const schemaSensor = z.object({
    tipo: z.string().nonempty('Tipo é obrigatório'),
    mac_address: z.string().max(20, 'Máximo de 20 caracteres').nullable(),
    latitude: z.string().refine(val => !isNaN(parseFloat(val)), 'Latitude inválida'),
    longitude: z.string().refine(val => !isNaN(parseFloat(val)), 'Longitude inválida'),
    localizacao: z.string().max(100, 'Máximo de 100 caracteres'),
    responsavel: z.string().max(100, 'Máximo de 100 caracteres'),
    unidade_medida: z.string().max(20, 'Máximo de 20 caracteres').nullable(),
    status_operacional: z.boolean(),
    observacao: z.string().nullable(),
});

export function CadastrarSensor() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schemaSensor)
    });

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/sensores/', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            alert('Sensor cadastrado com sucesso!');
            navigate('/inicial'); // Redireciona para a página inicial após o cadastro
        } catch (error) {
            console.error('Erro no cadastro de sensor', error);
        }
    }

    return (
        <div className={estilos.container}>
            <h2 className={estilos.title3}>Cadastrar Sensor</h2>
            <form className={estilos.form} onSubmit={handleSubmit(obterDadosFormulario)}>
                <select {...register('tipo')} className={estilos.input}>
                    <option value="">Selecione o tipo de sensor</option>
                    <option value="Temperatura">Temperatura</option>
                    <option value="Contador">Contador</option>
                    <option value="Luminosidade">Luminosidade</option>
                    <option value="Umidade">Umidade</option>
                </select>
                {errors.tipo && <p className={estilos.error}>{errors.tipo.message}</p>}

                <input {...register('mac_address')} className={estilos.input} placeholder="MAC Address" />
                {errors.mac_address && <p className={estilos.error}>{errors.mac_address.message}</p>}

                <input {...register('latitude')} className={estilos.input} placeholder="Latitude" />
                {errors.latitude && <p className={estilos.error}>{errors.latitude.message}</p>}

                <input {...register('longitude')} className={estilos.input} placeholder="Longitude" />
                {errors.longitude && <p className={estilos.error}>{errors.longitude.message}</p>}

                <input {...register('localizacao')} className={estilos.input} placeholder="Localização" />
                {errors.localizacao && <p className={estilos.error}>{errors.localizacao.message}</p>}

                <input {...register('responsavel')} className={estilos.input} placeholder="Responsável" />
                {errors.responsavel && <p className={estilos.error}>{errors.responsavel.message}</p>}

                <input {...register('unidade_medida')} className={estilos.input} placeholder="Unidade de Medida" />
                {errors.unidade_medida && <p className={estilos.error}>{errors.unidade_medida.message}</p>}

                <label className={estilos.checkbox}>
                    Status Operacional:
                    <input {...register('status_operacional')} type="checkbox" />
                </label>

                <textarea {...register('observacao')} className={estilos.input} placeholder="Observação"></textarea>
                {errors.observacao && <p className={estilos.error}>{errors.observacao.message}</p>}

                <button className={estilos.button}>Cadastrar</button>
            </form>
        </div>
    );
}
