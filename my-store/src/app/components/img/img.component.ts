import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = ''
  @Output() loaded = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = "https://www.w3schools.com/howto/img_avatar.png"
  }

  imgLoaded() {
    console.log('log hijo')
    this.loaded.emit(this.img)
  }
}
