import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: '<ngx-foo></ngx-foo>',
  templateUrl: './index.component.html'
})
export class IndexComponent {

}

@NgModule({
  declarations: [IndexComponent],
  entryComponents: [IndexComponent],
  imports: [BrowserModule]
})
export class IndexModule {
}