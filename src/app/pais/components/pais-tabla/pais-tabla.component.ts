import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent  {

  @Input() paisTabla: Pais[] = [];
  error = false;
  constructor() { }

 

}
