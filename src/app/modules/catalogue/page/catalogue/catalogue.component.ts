import { Component, AfterViewInit } from '@angular/core';

import { LibraryLoaderService } from '@shared/service/library-loader.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements AfterViewInit {
  scriptElements: HTMLScriptElement[] = [];

  constructor(private libLoader: LibraryLoaderService) { }

  ngAfterViewInit() {
    this.libLoader.loadScript('app-landing.js');
  }
}
