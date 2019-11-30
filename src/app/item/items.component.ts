import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';
import { EventData } from '@nativescript/core/ui/page/page';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  onTap(data: EventData) {
    const button = data.object;
    alert('Tapped  times!');
    console.log(button);
  }
}
