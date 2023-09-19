import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingIndicatorService } from './services/loading-indicator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  loading$: Observable<boolean>;
  constructor(
    private loadingIndicatorService: LoadingIndicatorService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loading$ = this.loadingIndicatorService.isLoading();
  }

  onHome(): void {
    this.router.navigate(['/']);
  }

  onSuperheroPowerList(): void {
    this.router.navigate(['/superhero-powers']);
  }
}
