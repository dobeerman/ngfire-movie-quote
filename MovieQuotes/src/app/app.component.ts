import { Component } from '@angular/core';

interface movieQuote {
  movie: string;
  quote: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieQuote: movieQuote = {
    quote: '',
    movie: ''
  }

  onSubmit(): void {
    console.log('TODO submit:', this.movieQuote);

    this.movieQuote = {
      quote: '',
      movie: ''
    }
  }
};
