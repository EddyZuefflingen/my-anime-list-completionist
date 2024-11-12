//Angular Material Stuff
import {MaterialModule} from './modules/material/material.module';
import {FormsModule} from '@angular/forms';

//Other Stuff
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

//Own Components
import {MissingAnimesComponent} from './components/missing-animes/missing-animes.component';

//flex-layout library
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
	declarations: [AppComponent, MissingAnimesComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule, HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
