import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements AfterViewInit, OnDestroy {
  scriptElements: HTMLScriptElement[] = [];

  constructor() { }

  ngAfterViewInit() {
    const pluginsElement = document.createElement('script');
    pluginsElement.src = 'plugins.js';
    this.scriptElements.push(pluginsElement);

    const functionsElement = document.createElement('script');
    functionsElement.src = 'functions.js';
    this.scriptElements.push(functionsElement);

    const appLandingCustomElement = document.createElement('script');
    appLandingCustomElement.src = 'app-landing.js';
    this.scriptElements.push(appLandingCustomElement);

    this.scriptElements.forEach(el => document.body.appendChild(el));
  }

  ngOnDestroy() {
    this.scriptElements.forEach(el => el.parentElement.removeChild(el));
  }
}
