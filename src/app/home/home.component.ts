import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  imgXL: string = "";
  imgS: string = "";
  imgXS: string = "";

  pic1Big: string = "../../assets/img/Perugia.jpg";
  pic2Big: string = "../../assets/img/roma.jpg";
  pic1Small: string = "../../assets/img/Perugia copia.jpg";
  pic2Small: string = "../../assets/img/roma copia.jpg";
  pic1XS: string = "../../assets/img/Perugia copia 2.jpg";
  pic2XS: string = "../../assets/img/roma copia 2.jpg";

 /*  img: string =  "";

  img1: string = "../../assets/img/Perugia.jpg";
  img2: string = "../../assets/img/roma.jpg"; */

  ngOnInit(): void {
    this.imgXL = this.pic1Big;
    this.imgS = this.pic1Small;
    this.imgXS = this.pic1XS;
    setInterval(() => {
      if(this.imgXL === this.pic2Big && this.imgS === this.pic2Small && this.imgXS === this.pic2XS){
        this.imgXL = this.pic1Big;
        this.imgS = this.pic1Small;
        this.imgXS = this.pic1XS;
      } else {
        this.imgXL = this.pic2Big;
        this.imgS = this.pic2Small;
        this.imgXS = this.pic2XS;
      }
    }, 5940);


     /*  this.img = this.img1;
      setInterval(() => {
        if(this.img === this.img2){
          this.img = this.img1
        } else {
          this.img = this.img2
        }
      }, 5940) */
    }

  }




