import { Component, OnInit, Output } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ 
  ]
})
export class PorPaisComponent  {
  constructor(private paisService: PaisService) { }
  pais: Pais[] = [];
  error = false;
  terminoABuscar: string = '';
  
    
    buscar( terminoOutput: string){
      this.error = false;
      this.terminoABuscar = terminoOutput;
      this.paisService.buscarPais(this.terminoABuscar)
      .subscribe(paises => 
        {
        console.log(paises);
        this.pais = paises;
        this.error = false;
      },
      
      
      err => {
        this.error = true;
        this.pais = [];
      });
    }
  
    sugerencias(event: string) {
      this.error = false;
    }
}
