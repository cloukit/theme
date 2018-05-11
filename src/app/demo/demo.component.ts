import { Component } from '@angular/core';

@Component({
  selector: 'cloukit-demo',
  templateUrl: './demo.component.html',
  styles: [ '.demo { font-family: sans-serif; padding:10px; }' ],
})
export class DemoComponent {
  public static sharedStyles = [ ];
}
