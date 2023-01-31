import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage {
  maxDateCalendar = new Date();
  range!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.range = this.initForm();
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      start: [null, Validators.required],
      end: [null, Validators.required],
    });
  }

}
