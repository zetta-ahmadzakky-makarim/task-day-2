// *************** Angular Imports ***************
import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
})
export class ChipsComponent {
  // *************** Decorator Variables ***************
  @Input() categories: string[] = [];
  @Output() categorySelected = new EventEmitter<string>();

  // *************** Misc Variables ***************
  selectedCategory: string = 'All';

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
