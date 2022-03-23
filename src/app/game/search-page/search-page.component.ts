import { Item, ResponseModel, Stash } from './../../shared/models/response.model';
import { GameService } from './../../shared/services/game.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ItemsDialogComponent } from '../items-dialog/items-dialog.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  dataSource!: any;
  stashes$: Observable<ResponseModel>;
  columndefs: any[] = ['stashType', 'league', 'accountName', 'items', 'actions'];
  nextChangeId: string = null;

  shtashItems: Stash[] = [];
  leagues: string[] = [];
  constructor(
    private gameService: GameService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.prepareDataSource();
    setInterval(() => {
      this.prepareDataSource();
    }, 30000);
  }

  prepareDataSource(): void {
    this.stashes$ = this.getData();
    this.stashes$.pipe().subscribe((data) => {
      this.dataSource = data.stashes;
      this.nextChangeId = data.next_change_id;
      data.stashes.forEach(el => {
        if (el.league) {
          this.leagues.push(el.league);
        } else { this.leagues.push('Not Specified'); }
      });

      this.leagues = [...new Set(this.leagues)];
    });
  }

  getData(): Observable<ResponseModel> {
    return this.gameService.getPublicStashTabs(this.nextChangeId).pipe();
  }
  filterStashes(event: any): void {
    this.stashes$.pipe().subscribe((data) => {
      if (event.value === 'Not Specified') {
        this.dataSource = data.stashes.filter(el => el.league === null);
      }
      else {
        this.dataSource = data.stashes.filter(el => el.league === event.value);
      }
    });
  }

  clearFilters(): void {
    this.stashes$.pipe().subscribe((data) => {
      this.dataSource = data.stashes;
    });
  }

  openDialog(items: Item[]): void {
    const dialogRef = this.dialog.open(ItemsDialogComponent, {
      width: '50%',
      data: items,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // returnUniqueEl(items: Item[]): any[] {
  //   const unique = {};
  //   items.map(el => {
  //     unique[el.icon] = (unique[el.icon] || 0) + 1;
  //   });
  //   return [...new Set(Object.entries(unique))];
  // }

}
