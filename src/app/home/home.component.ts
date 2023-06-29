import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  img: string =  "";

  img1: string = "../../assets/img/Perugia.jpg";
  img2: string = "../../assets/img/roma.jpg";



  ngOnInit(): void {
      this.img = this.img1;
      setInterval(() => {
        if(this.img === this.img2){
          this.img = this.img1
        } else {
          this.img = this.img2;
        }
      }, 6000)
    }

  }




