import { Component,Input } from '@angular/core';
import { ThemeProps } from '../types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

   @Input("ftheme") footertheme:ThemeProps= {backgroundColor:"",color:""}
}