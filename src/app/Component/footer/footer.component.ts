import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public createdby:string = "Esta página fue creada por Ángela Rodriguez y Laura Rubalcava";
  public fecha:string = new Date().toString();

  constructor() { }

  ngOnInit(): void {
  }
}