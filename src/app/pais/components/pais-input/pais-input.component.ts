import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  
   @Input() placeholder: string = 'probando';
  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300) //aqui especificamos cuanto tiempo debe pasar para que se ejecute el sucribe algom como el setTimeOut
    )
    .subscribe( valor => {
      this.onDebounce.emit(valor);
    });
  }

  terminoABuscar: string = '';

  @Output() onInput: EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  buscar(){
    console.log(this.terminoABuscar);
    this.onInput.emit(this.terminoABuscar); 
  }

  teclaPresionada( ){
    
  }

  

}
