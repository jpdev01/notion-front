import { Component, OnInit } from '@angular/core';
import { TreeField } from 'src/app/shared/model/tree-field.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  items: TreeField[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
