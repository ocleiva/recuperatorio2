import { Component } from '@angular/core';
import { PaisesService } from '../services/paises.service';
import { RespuestaPais } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  respuestapais: RespuestaPais[]=[];
  searchNames:any;
  selectedFilter:string='trust-score-rank'; // Filtro seleccionado inicialmente
  filteredExchange: RespuestaPais[] = [];
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
    // Metodo para filtrar a traves de top-rank
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

