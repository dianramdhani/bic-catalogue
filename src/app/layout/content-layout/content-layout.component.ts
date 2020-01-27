import { Component, OnInit } from '@angular/core';

import { LibraryLoaderService } from '@shared/service/library-loader.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  constructor(private libLoader: LibraryLoaderService) { }

  ngOnInit() {
    this.libLoader.loadScript('functions.js');
  }
}