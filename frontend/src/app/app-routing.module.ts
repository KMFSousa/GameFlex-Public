import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { PlayspaceComponent } from './playspace/playspace.component';
import { DeckEditorComponent } from './deck-editor/deck-editor.component';
<<<<<<< HEAD
import { ConfigEditorComponent } from './config-editor/config-editor.component';
=======
import { DummyComponent } from './dummy/dummy.component';
>>>>>>> origin/develop


const routes: Routes = [
  { path: '', redirectTo: 'playspace', pathMatch: 'full' },
  { path: 'playspace', component: PlayspaceComponent},
  { path: 'deckeditor', component: DeckEditorComponent},
<<<<<<< HEAD
  { path: 'configeditor', component: ConfigEditorComponent},
=======
  { path: 'dummy', component: DummyComponent},
>>>>>>> origin/develop

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
