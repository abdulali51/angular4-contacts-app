import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdlModule,MdlDialogModule } from '@angular-mdl/core';



import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { ContactListComponent } from './app/contact-list/contact-list.component';
import { ContactListItemComponent } from './app/contact-list/contact-list-item/contact-list-item.component';
import { StorageService } from './app/storage-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    ContactListItemComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    FormsModule,
    ReactiveFormsModule,
    MdlDialogModule.forRoot()
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
