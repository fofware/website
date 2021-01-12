import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImageFallBack]'
})
export class ImageFallBackDirective {
  @Input('appImageFallBack') data: any; 
  @Input() idx: string = "0";
  index: number = 0;
//  defaultImage: string = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==";
  defaultImage: string = "https://cdn3.iconfinder.com/data/icons/abstract-1/512/no_image-512.png"

  constructor(private el: ElementRef) { }

  @HostListener('error')
  LoadFallBackOnErr(){
    const data = this.data.split(',');
    const element: HTMLImageElement = <HTMLImageElement>this.el.nativeElement;
    const idx:number = parseFloat( this.idx == undefined ? '0' : this.idx );
    if(idx < data.length)
      element.src = data[idx];
    else 
      element.src = this.defaultImage;
    this.idx = `${idx+1}`;
  }
}
