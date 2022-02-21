import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-matrix-layout-in-family-chart',
  templateUrl: './matrix-layout-in-family-chart.component.html',
  styleUrls: ['./sample.css']
})
export class MatrixLayoutInFamilyChartComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items = [
    new FamItemConfig({ id: 1, parents: [], title: "Corp 1", label: "Corp 1", description: "Parent 1", image: "./assets/photos/p.png" }),
    new FamItemConfig({ id: 2, parents: [], title: "Corp 2", label: "Corp 2", description: "Parent 2", image: "./assets/photos/p.png" }),
    new FamItemConfig({ id: 101, parents: [], title: "Corp 3", label: "Corp 3", description: "Parent 3", image: "./assets/photos/p.png" }),
    new FamItemConfig({ id: 102, parents: [], title: "Corp 4", label: "Corp 4", description: "Parent 4", image: "./assets/photos/p.png" }),
    new FamItemConfig({ id: 3, parents: [1, 2, 101, 102], title: "Sibling 1", label: "Sibling 1", description: "Sibling 1", image: "./assets/photos/s.png" }),
    new FamItemConfig({ id: 4, parents: [1, 2, 101, 102], title: "Sibling 2", label: "Sibling 2", description: "Sibling 2", image: "./assets/photos/s.png" }),
    new FamItemConfig({ id: 5, parents: [1, 2, 101, 102], title: "Sibling 3", label: "Sibling 3", description: "Sibling 3", image: "./assets/photos/s.png" }),
    new FamItemConfig({ id: 6, parents: [1, 2, 101, 102], title: "Sibling 4", label: "Sibling 4", description: "Sibling 4", image: "./assets/photos/s.png" }),
    new FamItemConfig({ id: 7, parents: [1, 2, 101, 102], title: "Sibling 5", label: "Sibling 5", description: "Sibling 5", image: "./assets/photos/s.png" }),
    new FamItemConfig({ id: 8, parents: [1, 2, 101, 102], title: "Sibling 6", label: "Sibling 6", description: "Sibling 6", image: "./assets/photos/s.png" }),
    new FamItemConfig({ id: 9, parents: [1, 2, 101, 102], title: "Sibling 7", label: "Sibling 7", description: "Sibling 7", image: "./assets/photos/s.png" }),
    new FamItemConfig({ id: 10, parents: [3, 4, 5, 6, 7, 8, 9], title: "Grand Child 1", label: "Grand Child 1", description: "Grand Child 1", image: "./assets/photos/c.png" }),
    new FamItemConfig({ id: 11, parents: [3, 4, 5, 6, 7, 8, 9], title: "Grand Child 2", label: "Grand Child 2", description: "Grand Child 2", image: "./assets/photos/c.png" }),
    new FamItemConfig({ id: 12, parents: [3, 4, 5, 6, 7, 8, 9], title: "Grand Child 3", label: "Grand Child 3", description: "Grand Child 3", image: "./assets/photos/c.png" }),
    new FamItemConfig({ id: 13, parents: [3, 4, 5, 6, 7, 8, 9], title: "Grand Child 4", label: "Grand Child 4", description: "Grand Child 4", image: "./assets/photos/c.png" })
  ];
}
