import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
