import { CurriculumService } from './../../curriculum.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit{

  nombre = '';
  apellidos ='';

  form!: FormGroup;


  url = 'https://pmando.onrender.com/v1/encuesta/'
  url2 = 'http://localhost:8000/v1/encuesta/'

  curriculum: any



  isSubmitted  =  false;


  constructor(

     private curriculumService: CurriculumService,
     private fb: FormBuilder


     ){}

  ngOnInit(): void {
    this.form  =  this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required]
  });
    console.log('hola')
    this.getCurriculum(this.url)
  }


  postData(){
    const datos = {
      nombre: this.nombre,
      apellidos: this.apellidos
    };
    console.log(datos)
    this.curriculumService.postData(this.url,datos).subscribe(
      res=> console.log(res)
    )
  }

  getCurriculum(url: string) : void {
    console.log('llamando metodo')
    this.curriculumService.getData(url)
    .subscribe( curriculum => {
      this.curriculum = curriculum;
      console.log('response',curriculum)
    });
  }
  enviar(){

    console.log('enviando datos')

  }

}
