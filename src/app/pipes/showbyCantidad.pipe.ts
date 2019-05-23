import { Pipe, PipeTransform } from "@angular/core";
import Swal from 'sweetalert2'
import { Globals } from '../global';

@Pipe({
  name: "show"
})
export class ShowCantidadPipe  implements PipeTransform {


  constructor(public globals: Globals) {
    }



  transform(array: any[] , cantidad: number): any[]{


   if(cantidad == 10){

  let timerInterval
    Swal({
      title: 'Mostrando 10 elementos',
      timer: 1000,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }) 
    

   this.globals.pageSize =10;

     
      
    }else if(cantidad ==20){

      let timerInterval
      Swal({
        title: 'Mostrando 20 elementos',
        timer: 1000,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      })

      this.globals.pageSize = 20;
  

    }else if (cantidad == 30){

      let timerInterval
      Swal({
        title: 'Mostrando 30 elementos',
        timer: 1000,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      })

      this.globals.pageSize = 30;



    }else if(cantidad == 40){

      let timerInterval
      Swal({
        title: 'Mostrando 40 elementos',
        timer: 1000,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      })

      this.globals.pageSize = 40;



    }

    return array;

    } 


  }

 