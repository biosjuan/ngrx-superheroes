import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingIndicatorService } from './services/loading-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading$: Observable<boolean>;
  constructor(private loadingIndicatorService: LoadingIndicatorService) {}
  ngOnInit(): void {
    this.loading$ = this.loadingIndicatorService.isLoading();
  }
}
