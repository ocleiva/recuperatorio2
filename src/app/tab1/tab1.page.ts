import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';
import { RespuestaPais } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  respuestapais: RespuestaPais[]=[];
  searchNames:any;
  selectedFilter:string='alfabeticamente'; // Filtro seleccionado inicialmente
  filteredExchange: RespuestaPais[] = [];

    buscar(event: Event){

    }
  constructor(private paisesService:PaisesService) {}
  ngOnInit(){
    this.paisesService.getPaises().subscribe(respuesta =>{
      
      this.respuestapais=respuesta
      console.log(respuesta);
    })
  
  }

  BuscarPais(event:any){
                  // Metodo para filtrar a traves de busqueda por nombre 
                        const text= event.target.value;
                        if (text && text.trim() !=''){
                        this.searchNames = [...this.respuestapais]
                        this.searchNames = this.searchNames.filter((respuestapais: any)=>{
                        return (respuestapais.name.common.toLowerCase().indexOf(text.toLowerCase())) > -1
})
}
}
filterExchange(){
                      // Metodo para filtrar alfabeticamente
if(this.selectedFilter==='a-z'){
this.searchNames = this.respuestapais.sort((a, b) => {
if(a.name.common < b.name.common) {
return -1;
}else if(a.name.common > b.name.common) {
return 1;
}else{
return 0;
}
});
}
}

}
