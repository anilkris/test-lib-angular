import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeroJobAdComponent } from 'src/app/hero-job-ad.component';
import { HeroProfileComponent } from 'src/app/hero-profile.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';



@NgModule({
  declarations: [
    TestLibComponent,
    AdBannerComponent,
    AdDirective
  ],
  imports: [
    MatCheckboxModule

  ],
  exports: [
    TestLibComponent,  
    AdBannerComponent,
    AdDirective
  ]
})
export class TestLibModule { }
