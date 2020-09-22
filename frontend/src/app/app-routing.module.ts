import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { PlayspaceComponent } from './playspace/playspace.component';
import { DeckEditorComponent } from './deck-editor/deck-editor.component';
import { GameBrowserComponent } from './game-browser/game-browser.component';
import { DummyComponent } from './dummy/dummy.component';


const routes: Routes = [
  { path: '', redirectTo: 'playspace', pathMatch: 'full' },
  { path: 'playspace', component: PlayspaceComponent },
  { path: 'deckEditor', component: DeckEditorComponent },
  { path: 'gameBrowser', component: GameBrowserComponent },
  
  { path: 'dummy', component: DummyComponent},

  { path: 'lists', component: TaskViewComponent },
  { path: 'lists/:listId', component: TaskViewComponent },
  { path: 'new-list', component: NewListComponent },
  { path: 'lists/:listId/new-task', component: NewTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
