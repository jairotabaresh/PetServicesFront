import { Time } from '@angular/common';
import { Estado } from './Estado';
import { Servicio } from './Servicio';

export class Cita{
    id: number;
    fecha: Date;
    hora: Time;
    comentario: string;
    estado: Estado;
    servicio: Servicio;
}