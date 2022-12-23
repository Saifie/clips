import { Injectable } from '@angular/core';

interface Imodal{
id: string;
visible:boolean
}
@Injectable({
  providedIn: 'root'
})
export class ModalService {
 private modals:Imodal[]=[]

  constructor() { }
  
  register(id:string){
  this.modals.push({id,visible:false})
  console.log(this.modals)
  }
  unregister(id:string){
    this.modals= this.modals.filter(modal => modal.id !== id)
  }
  isModalOpen(id: string): Boolean {
  return !!this.modals.find(modal => modal.id === id)?.visible
  }
  
  toggleModal(id: string){
    const modal= this.modals.find(modal => modal.id === id)
    if(modal){
    modal.visible = !modal.visible
    }
  }
  
}
