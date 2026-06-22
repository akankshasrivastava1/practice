import { Component, signal, WritableSignal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  batchModel = signal ({
    batchID: 0,
    batchName: '',
    createDate: ''
  });

  batchList: WritableSignal<any[]> = signal ([])

  batchForm = form(this.batchModel)
}
