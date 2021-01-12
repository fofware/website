import { HttpClient } from '@angular/common/http';
import { PipeTransform, Pipe } from "@angular/core";
//import { Observable } from 'rxjs';
//import "rxjs/add/operator/catch";

@Pipe({ name: "image" })
export class ImagePipe implements PipeTransform {
  defaultImage: string = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==";

  constructor(private http: HttpClient ) {}

  transform(url: string): any {
    return this.http.get(url).subscribe( res => {
      console.log("encontro imagen")
      return url;
    },
    error => {
      console.log("No encontro imagen")
      return "https://cdn3.iconfinder.com/data/icons/abstract-1/512/no_image-512.png"
//      return this.defaultImage;
    });
/*
      .map(res => {
        //return url if valid
        return url;
      })
      .catch(error => {
        return Observable.of(() => {
          //return default image if url not valid
          return this.defaultImage;
        });
      });
    */
  }
}
