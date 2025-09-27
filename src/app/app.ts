import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import * as M from 'materialize-css';

import {RouterModule} from '@angular/router';

import {Home} from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App implements AfterViewInit {
  protected readonly title = signal('museu-app');

/*Para o Materialize*/
  /*ViewChild: pai acessa o component filho dentro da classe */
  @ViewChild('mobile') sideNav?: ElementRef;

  //title = 'controle-cidades';
  titulo = 'Museu do Boné';
  opcao = ['Página 1','Página 2','Página 3','Página 4'];

  googleDriveImageUrl: string = 'https://www.dropbox.com/scl/fi/h27kv6t75ih37mk8e8z5x/LOGOECOMUSEU.jpg?rlkey=e1nxodqbdkrfe37x7uqlw1362&st=8g6h0tta&dl=0';
  //googleDriveImageUrl: string = 'https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg';
  
  novovalor: number=123;
  background: any;

  ngAfterViewInit(): void {

      M.Sidenav.init(this.sideNav?.nativeElement);
  }


  constructor() {}

}
