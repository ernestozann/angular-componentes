import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = ''

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg
    console.log('change just img =>', this.img)
    //code
  }
  @Input() alt: string = ''
  @Output() loaded = new EventEmitter<string>()

  // counter = 0
  // counterFn: number|undefined

  constructor() {
    //before render
    //async -- once time
    console.log('constructor', 'imgValue=>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //before render
    //changes inputs -- times
    console.log('onChanges', 'imgValue=>', this.img);
    console.log('changes',changes)
    //if (changes.) {
      //code
    //}
  }

  ngOnInit(): void {
    //before render
    //async - fetch,API,promises -- once time
    // console.log('ngOnInit', 'imgValue=>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter +=1;
    //   console.log('run counter')
    // }, 1000)
  }

  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn)
  }

  imgError() {
    this.img = "https://www.w3schools.com/howto/img_avatar.png"
  }

  imgLoaded() {
    console.log('log hijo')
    this.loaded.emit(this.img)
  }
}
