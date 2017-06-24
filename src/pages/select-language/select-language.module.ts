import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLanguagePage } from './select-language';

@NgModule({
  declarations: [
    SelectLanguagePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectLanguagePage),
  ],
  exports: [
    SelectLanguagePage
  ]
})
export class SelectLanguagePageModule {}
