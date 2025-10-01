import { Component } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-pagina3-component',
  imports: [RouterLink],
  templateUrl: './pagina3-component.html',
  styleUrl: './pagina3-component.css'
})
export class Pagina3Component {

  titlePagina3 = 'PÁGINA 3'  
  constructor(private route: ActivatedRoute){}
  
}
