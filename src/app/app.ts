import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

import {RouterModule} from '@angular/router';

import { FooterComponent } from "./footer-component/footer-component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App implements AfterViewInit {
  //protected readonly title = signal('museu-app');

/*Para o Materialize*/
  /*ViewChild: pai acessa o component filho dentro da classe */
  @ViewChild('mobile') sideNav?: ElementRef;

  titulo = 'EcoMuseu do Boné';
  versao = 'versão: 1.19';
  opcao = ['Página 1','Página 2','Página 3','Página 4', 'ChatBot'];

  novovalor: number=123;
  background: any;

  ngAfterViewInit(): void {

      M.Sidenav.init(this.sideNav?.nativeElement);
  }


  constructor() {}

}
