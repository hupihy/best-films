import {Component} from '@angular/core';
import {DialogWindowService} from "./dialog-window.service";
import {FilmFormService} from "../film-form/film-form.service";

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
})
export class DialogWindowComponent {
  constructor( public  dialogWindowService:DialogWindowService, public filmFormService:FilmFormService) {
  }
}
