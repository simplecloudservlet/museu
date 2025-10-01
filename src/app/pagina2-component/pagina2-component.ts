import { Component } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-pagina2-component',
  imports: [RouterLink],
  templateUrl: './pagina2-component.html',
  styleUrl: './pagina2-component.css'
})
export class Pagina2Component {

  titlePagina2 = 'PÁGINA 2'  
  constructor(private route: ActivatedRoute){}
  
}
