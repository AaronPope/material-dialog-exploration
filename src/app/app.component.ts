import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './shared/models/hero';
import { HeroService } from './shared/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // public heroes!: Observable<Hero[]>; // = new Observable<Hero>();
  public heroes!: Observable<Hero[]>;
 // = new Observable<Hero>();
  title = 'material-dialog-exploration';

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
