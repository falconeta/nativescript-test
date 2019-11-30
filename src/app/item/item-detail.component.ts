import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  item: Item;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private readonly api: ApiService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.item = this.itemService.getItem(id);
    console.log('test detail', id);
    this.api.getTodos(id).subscribe(data => {
      console.log('data', data);
    });
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }
}
