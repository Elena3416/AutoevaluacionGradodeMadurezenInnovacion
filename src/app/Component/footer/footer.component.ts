import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public copyright:string = "Copyright";
  public version:string = "N.L. 4.0"; 
  public createby:string = "Desarrollado en conjunto por:";
  public name1:string = "Telintec, Raúl Cavajal"
  public name2:string = "Laura Rubalcava";
  public company:string = "Tecnoap";
  public Fecha = new Date().getFullYear();  

  constructor() { }

  ngOnInit(): void {
  }
}