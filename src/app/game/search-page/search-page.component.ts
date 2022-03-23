import { Item, ResponseModel, Stash } from './../../shared/models/response.model';
import { GameService } from './../../shared/services/game.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ItemsDialogComponent } from '../items-dialog/items-dialog.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  dataSource!: Stash[];
  stashes$: Observable<ResponseModel>;
  columndefs: string[] = ['stashType', 'league', 'accountName', 'items', 'actions'];
  nextChangeId: string = null;
  filters: FormGroup;
  leagues: string[] = [];
  constructor(
    private gameService: GameService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.buildFormGroup();
    this.prepareDataSource();
    setInterval(() => {
      this.prepareDataSource();
    }, 30000);
    this.filters.controls.itemName.valueChanges.subscribe(name => {
      this.stashes$.pipe().subscribe((data) => {
        this.dataSource = data.stashes.filter(el => el.items.some(item => item.name.includes(name)));
      });
    });
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

  buildFormGroup(): void {
    this.filters = this.fb.group({
      league: new FormControl(''),
      itemName: new FormControl('')
    });
  }
  getData(): Observable<ResponseModel> {
    return this.gameService.getPublicStashTabs(this.nextChangeId).pipe();
  }
  filterStashes(event: MatSelectChange): void {
    this.stashes$.pipe().subscribe((data) => {
      if (event.value && event.value === 'Not Specified') {
        this.dataSource = data.stashes.filter(el => el.league === null);
      }
      else if (event.value) {
        this.dataSource = data.stashes.filter(el => el.league === event.value);
      }
    });
  }

  clearFilters(): void {
    this.filters.reset();
    this.stashes$.pipe().subscribe((data) => {
      this.dataSource = data.stashes;
    });
  }

  openDialog(items: Item[]): void {
    const dialogRef = this.dialog.open(ItemsDialogComponent, {
      width: '80%',
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
