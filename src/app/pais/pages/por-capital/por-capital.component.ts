import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  constructor(private paisService: PaisService ) { }

  error  = false;
  terminoABuscar = '';
  Capital: Pais[] = [];

  buscar(termino: string){
    this.error = false;
      this.terminoABuscar = termino;
      this.paisService.buscarCapital(this.terminoABuscar)
      .subscribe(capital => 
        {
        console.log(capital);
        this.Capital = capital;
        this.error = false;
      },
      
      
      err => {
        this.error = true;
        this.Capital = [];
      });
  }
  
  sugerencias(evento: string){}


  ngOnInit(): void {
  }

}
