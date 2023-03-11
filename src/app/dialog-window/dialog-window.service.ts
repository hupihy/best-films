import {Injectable} from "@angular/core";
import {DialogWindowComponent} from "./dialog-window.component";
import {MatDialog} from "@angular/material/dialog";




@Injectable({providedIn: 'root'})

export class DialogWindowService {
  dialogFilm:{
    id: number,
    name: string,
    year: string,
    description: string,
    genre: number[],
  }
  constructor(private matDialog: MatDialog) {
  }

  onOpenDialog(film) {
    this.matDialog.open(DialogWindowComponent)
     this.dialogFilm = film
  }
  onCloseDialog(){
    this.matDialog.closeAll()
  }
}
