export interface UsuarioI{
    Id_Usuario:number;
    Nombres: string;
    Apellido_Paterno:string;
    Apellido_Materno:string;
    Fecha_Nacimiento:Date;
    Telefono_Contacto:bigint;
    Correo_Electronico:string;
    Contrasena:string;
    Id_Puesto:number;
}