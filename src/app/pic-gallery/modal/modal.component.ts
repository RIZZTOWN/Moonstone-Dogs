import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalSrc: string = '';
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  onClose() {
    this.close.emit();
  }

}
