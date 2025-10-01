import { Component } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-pagina4-component',
  imports: [RouterLink],
  templateUrl: './pagina4-component.html',
  styleUrl: './pagina4-component.css'
})
export class Pagina4Component {

  titlePagina4 = 'PÁGINA 4'  
  constructor(private route: ActivatedRoute){}
  
}
