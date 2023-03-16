import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <kendo-chart>
        <kendo-chart-title text="Units sold"></kendo-chart-title>
        <kendo-chart-category-axis>
            <kendo-chart-category-axis-item
                [categories]="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']"
                [title]="{ text: 'Months' }">
            </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>

        <!-- CODICE CHE PERMETTE LA DEFINIZIONE DELLO STEP SU ASSE Y -->
          <kendo-chart-value-axis>
          <kendo-chart-value-axis-item>
            <!-- Y axis label -->
            <kendo-chart-category-axis-item-title
              [text]="'Y Axis Title'"
            ></kendo-chart-category-axis-item-title>
            <kendo-chart-value-axis-item-labels
              [step]="3"
            >
            </kendo-chart-value-axis-item-labels>
          </kendo-chart-value-axis-item>
        </kendo-chart-value-axis>


        <kendo-chart-series>
          <kendo-chart-series-item type="line" [data]="[123, 276, 310, 212, 240, 156, 98]">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `,
})
export class AppComponent {}
