import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent {
  @Input() card: { image: string; title: string; category: string };

  getTypeImage(): string {
    return typeof this.card.image
  }

  getTypeTitle(): string {
    return typeof this.card.title
  }

  getTypeSubtitle(): string {
    return typeof this.card.category
  }
}
