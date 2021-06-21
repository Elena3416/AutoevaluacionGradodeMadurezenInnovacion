export interface UsuarioI{
    Id_Usuario:number;
    Nombres: string;
    Apellido_Paterno:string;
    Apellido_Materno:string;
    Fecha_Nacimiento:string;
    Telefono_Contacto:number;
    Correo_Electronico:string;
    Contrasena:string;
    Estado_Usuario: boolean;
    Tipo_Usuario:string;
    Nombre_Usuario: string;
    FK_Id_Puesto:string;
}