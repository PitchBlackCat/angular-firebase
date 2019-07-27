import {EventEmitter, OnDestroy} from '@angular/core';

export class Destroyable implements OnDestroy {
  protected destroy$: EventEmitter<void> = new EventEmitter<void>();
  ngOnDestroy(): void {
    this.destroy$.emit();
  }
}
