import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit, OnDestroy {
  scriptElements: HTMLScriptElement[] = [];
  styleElements: (HTMLScriptElement | HTMLLinkElement)[] = [];

  constructor() { }

  ngOnInit() {
    // set script
    const functionsElement = document.createElement('script');
    functionsElement.src = 'functions.js';
    this.scriptElements.push(functionsElement);

    const appLandingCustomElement = document.createElement('script');
    appLandingCustomElement.src = 'app-landing-custom.js';
    this.scriptElements.push(appLandingCustomElement);

    this.scriptElements.forEach(el => document.body.appendChild(el));

    // set style
    if (environment.production) {
      const appLandingElement = document.createElement('link');
      appLandingElement.href = 'app-landing.css'
      this.styleElements.push(appLandingElement);

      const fontsElement = document.createElement('link');
      fontsElement.href = 'fonts.css';
      this.styleElements.push(fontsElement);

      const colorsElement = document.createElement('link');
      colorsElement.href = 'colors.css';
      this.styleElements.push(colorsElement);

      this.styleElements.forEach(el => document.head.appendChild(el));
    } else {
      const appLandingElement = document.createElement('script');
      appLandingElement.src = 'app-landing.js'
      this.styleElements.push(appLandingElement);

      const fontsElement = document.createElement('script');
      fontsElement.src = 'fonts.js';
      this.styleElements.push(fontsElement);

      const colorsElement = document.createElement('script');
      colorsElement.src = 'colors.js';
      this.styleElements.push(colorsElement);

      this.styleElements.forEach(el => document.body.appendChild(el));
    }
  }

  ngOnDestroy() {
    this.scriptElements.forEach(el => el.parentElement.removeChild(el));
    this.styleElements.forEach(el => el.parentElement.removeChild(el));
  }
}
