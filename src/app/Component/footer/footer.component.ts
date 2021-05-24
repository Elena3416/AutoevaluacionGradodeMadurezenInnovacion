import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public copyright:string = "Copyright 2021 N.L. v0.1.0"; 
  public createby:string = "Desarrollado en conjunto por";
  public name:string = "Raúl Cavajal y Laura Rubalcava";
  public company:string = "Tecnoap";

  constructor() { }

  ngOnInit(): void {
  }
}