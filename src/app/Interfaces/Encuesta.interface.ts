export interface EncuestaI{
    Id_Encuesta:number;
    Nombre_Encuesta:string;
    Fecha_Vigente: Date;
    Fecha_Registro: Date;
    Estado_Encuesta:boolean;
    FK_Id_Usuario: number;
}