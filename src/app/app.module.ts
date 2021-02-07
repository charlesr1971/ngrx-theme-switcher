import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSnackBarModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule, MatProgressBarModule, MatInputModule, MatSelectModule, MatDialogModule, MatAutocompleteModule, MatCheckboxModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule,MatRadioModule } from '@angular/material';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { themeSwitcherReducer } from './themeSwitcher.reducer';
import { MyThemeSwitcherComponent } from './my-theme-switcher/my-theme-switcher.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, 
    MyCounterComponent,
    MyThemeSwitcherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    LayoutModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    OverlayModule,
    StoreModule.forRoot({ count: counterReducer, themeSwitch:themeSwitcherReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
