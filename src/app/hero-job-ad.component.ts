import { Component, Input } from '@angular/core';
import { AdComponent } from 'projects/test-lib/src/lib/ad.component';


@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}

