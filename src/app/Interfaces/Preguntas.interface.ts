export interface PreguntasI{
    Id_Pregunta:number;
    Pregunta:string;
    Fecha_Registro:Date;
    Estado_Pregunta:boolean;
    FK_Id_Encuesta: number;
}