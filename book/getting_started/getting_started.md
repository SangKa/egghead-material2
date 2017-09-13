# Lesson 1 - Getting Started

#### Watch The Video (Coming Soon)
To get started with Angular Material you first need to install `@angular/material` and `@angular/cdk`. 

:bulb:  `@angular/cdk` split from `@angular/material` in beta.8

```bash
npm install --save @angular/material @angular/cdk
```

It is suggested you also install `@angular/animations` and `hammerjs`. While these modules are not required you may notice some components behave irregularly if you don't include these packages. One example is the `md-slider` component, whose touch support is compromised without the addition of `hammerjs`.

```bash
npm install --save @angular/animations hammerjs
```

Once installation is complete it's time to set up a custom material module to encapsulate the components you are currently (or plan on using) for your application. This module will import relevant material components for your app. To get started we will include the `MdToolbarModule`:

:bulb: `@angular/material` also exports a `MaterialModule` which includes all material components. It is recommended you do not use this and instead only include the components required by your application in a custom, application specific module. This helps keep your build as small as possible without relying on tree-shaking.

:bulb: We are using the [Angular CLI](https://github.com/angular/angular-cli) for this project but setup would be similar for any of your Angular applications.

*app-material.module.ts*
```ts
import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';

@NgModule({
  exports: [
    MdToolbarModule
  ]
})
export class AppMaterialModule { }
```

Now that the material module is configured you can import it into your app module:

*app.module.ts*
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

If you plan to use `hammerjs` you can import that into your application entry point:

*main.ts*
```ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
```

Last, you need to include a material theme. We will discuss theming in depth in a later chapter but for now you can choose from any of the prebuilt themes found in the `node_modules/@angular/material/prebuilt-themes` folder. Include one of these files in your application:

*styles.css*
```css
@import "~@angular/material/prebuilt-themes/pink-bluegrey.css";
``` 

Let's add a toolbar to the main app component to make sure everything is working correctly:

*app.component.ts*
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <md-toolbar color="primary">
    Structuring Angular Apps with Angular Material Components
  </md-toolbar>
  `,
})
export class AppComponent {}
```

When you run your application you should now see a material toolbar component:

```bash
npm start
```

![First Toolbar](../../demo-app/src/assets/images/getting_started_1.png)

You are now ready to start utilizing Angular Material components within your application!

## Recap of packages:

### Required

#### [`@angular/cdk`](https://www.npmjs.com/package/@angular/cdk)

This module offers the building blocks of `@angular/material` package, offering more generic tools for building components such as accessibility, tables, overlays and more. 

#### [`@angular/material`](https://www.npmjs.com/package/@angular/material)

This module builds off `@angular/cdk`, including all of the prominent material design themed components. 

### Highly Suggested

#### [`@angular/animations`](https://www.npmjs.com/package/@angular/animations)

This module exposes Angular's animation API, providing smooth animations and transitions to `@angular/material` components. 

### Probably Needed

#### [`hammerjs`](https://www.npmjs.com/package/hammerjs)

This module adds support for touch gestures in your `@angular/material` components. You can exclude this package if you don't plan on using  

## Material Design Background
- [Making Material Design: Crafting Material](https://www.youtube.com/watch?v=Y0UEGsvcYvk)
- [Making Material Design: Smart Paper](https://www.youtube.com/watch?v=BUzUoc2ZOIo)