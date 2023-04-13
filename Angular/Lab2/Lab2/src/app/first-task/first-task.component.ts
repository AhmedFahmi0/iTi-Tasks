import { Component } from '@angular/core';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent {
  fName = "";
  imgSrc:number=1;
  interval:any=0;
  next(){
    if(this.imgSrc<5){
      this.imgSrc++;
    }else{
      this.imgSrc=5;
    }
  }
  previous(){
    if(this.imgSrc>1){
      this.imgSrc--;
    }else{
      this.imgSrc=1;
    }
    
  }

  slide(){
    this.interval=setInterval(()=>{
      if(this.imgSrc<5){
        this.imgSrc++;
      }else{
        this.imgSrc=1;
      }
    },500);
  }
  stop(){
    clearInterval(this.interval)
}
}
