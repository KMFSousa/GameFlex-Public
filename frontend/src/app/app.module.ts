import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { PlayspaceComponent } from './playspace/playspace.component';
import { DeckEditorComponent } from './deck-editor/deck-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DummyComponent } from './dummy/dummy.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent, DialogForgotPassword } from './login/login.component';
import { MiddleWare } from './services/middleware';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    PlayspaceComponent,
    DeckEditorComponent,
    DummyComponent,
    SignupComponent,
    LoginComponent,
    DialogForgotPassword,
    ChangepasswordComponent
  ],
  entryComponents: [
    DialogForgotPassword
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [MiddleWare, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
