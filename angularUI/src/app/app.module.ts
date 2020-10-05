import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { MatSliderModule } from '@angular/material/slider';
import { CustomDirective } from './directives/custom.directive';
import { CustomPipe } from './pipes/custom.pipe';
import {MatCardModule} from '@angular/material/card';
import { LandingComponent } from './pages/landing/landing.component';
import { StoreModule } from '@ngrx/store';
import { HeaderModule } from './pages/core/header/header.module';
import { ContainerComponent } from './pages/shared/container/container.component';
import { BasketComponent } from './pages/shared/basket/basket.component';
import { SharedModule } from './pages/shared/shared/shared.module';
import { BasketModule } from './pages/shared/basket/basket.module';
import { FirstSectionComponent } from './pages/features/first-section/first-section.component';
import { FirstSectionModule } from './pages/features/first-section/first-section.module';
import { RequestSectionModule } from './pages/features/request-section/request-section.module';
import { FeatureSectionModule } from './pages/features/feature-section/feature-section.module';
import { ServiceSectionComponent } from './pages/features/service-section/service-section.component';
import { ServiceSectionModule } from './pages/features/service-section/service-section.module';
import { WhatwedoSectionModule } from './pages/features/whatwedo-section/whatwedo-section.module';
import { FaqSectionModule } from './pages/features/faq-section/faq-section.module';
import { ContactSectionModule } from './pages/features/contact-section/contact-section.module';
import { requestOrderReducer, trackOrderReducer } from './Store/reducers/requestOrderReducer';
import { RequestinterceptorService } from './Interceptors/requestinterceptor.service';
import { httpIntercetptorProvider } from './Interceptors';
import { EffectsModule } from '@ngrx/effects';
import { TrackOrderEffect } from './effects/trackOrderEffect';
import {MatDialogModule} from '@angular/material/dialog';
import { StarModule } from './pages/features/star/star/star.module';
import { DialogModule } from './pages/features/modal/dialog/dialog.module';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    CustomDirective,
    CustomPipe,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot(
      {orders:requestOrderReducer,trackOrder: trackOrderReducer}
    ),
    EffectsModule.forRoot([TrackOrderEffect]),
    HeaderModule,
    SharedModule,
    BasketModule,
    FirstSectionModule,
    FeatureSectionModule,
    RequestSectionModule,
    ServiceSectionModule,
    WhatwedoSectionModule,
    FaqSectionModule,
    ContactSectionModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatDialogModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    RequestinterceptorService,
    httpIntercetptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

