import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionnairesRoutingModule} from './questionnaires-routing.module';
import {QuestionnairesComponent} from './questionnaires.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [QuestionnairesComponent],
  imports: [
    CommonModule,
    QuestionnairesRoutingModule,
    MatButtonModule
  ]
})
export class QuestionnairesModule {
}
