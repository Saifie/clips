import { ModalService } from './../services/modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public modal: ModalService){
  }
  openModal(e:MouseEvent){
  e.preventDefault();
  this.modal.toggleModal('auth')
  
  
  }
}
