import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = ''
  @Output() loaded = new EventEmitter<string>()

  constructor() {
    //before render
    //async -- once time
    console.log('constructor', 'imgValue=>', this.img);
  }

  ngOnChanges() {
    //before render
    //changes inputs -- times
    console.log('onChanges', 'imgValue=>', this.img);
  }

  ngOnInit(): void {
    //before render
    //async - fetch,API,promises -- once time
    console.log('ngOnInit', 'imgValue=>', this.img);
  }

  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = "https://www.w3schools.com/howto/img_avatar.png"
  }

  imgLoaded() {
    console.log('log hijo')
    this.loaded.emit(this.img)
  }
}
