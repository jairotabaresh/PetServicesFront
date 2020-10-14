import { Rol } from './Rol';

export class Usuario{
    id: number;
    nombre: string;
    celular: string;
    correo: string;
    direccion: string;
    contrasena: string;
    rol: Rol;
}