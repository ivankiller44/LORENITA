export interface casaCreacionDTO {
    nombre: string;
    descripcion: string;
    precio: number;
    dimensiones: string;
    ubicacion: string;
    contacto: number;
    foto: File;
}

export interface casaDTO {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    dimensiones: string;
    ubicacion: string;
    contacto: number;
    foto: string;
}