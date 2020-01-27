import { Component, AfterViewInit } from '@angular/core';
import { concatMap } from 'rxjs/operators';

import { LibraryLoaderService } from '@shared/service/library-loader.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements AfterViewInit {
  scriptElements: HTMLScriptElement[] = [];

  constructor(private libLoader: LibraryLoaderService) { }

  ngAfterViewInit() {
    const links = [
      'functions.js',
      'app-landing.js'
    ];
    from(links)
      .pipe(
        concatMap(link => this.libLoader.loadScript(link))
      )
      .subscribe();
  }
}
