import { Component, Input, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnDestroy {
  @Input() card: { image: string; title: string; category: string };
  @Output() cardDeleted = new EventEmitter<void>();

  ngOnDestroy(): void {
    console.log(`${this.card.title} has been deleted.`);
  }
}
