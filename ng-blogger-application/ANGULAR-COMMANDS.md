# Angular Commands user in this Application

## Pre-Requisite to start this application development
* nodejs - 
* npm - 
* anglular@cli - 

## Angular cli commands used in this application
* `ng new blogger-application` - to create this application.
* `ng generate module blogger` - to create module for this entire site.
    * `ng generate component blogger/home --module blogger` - Create home page component blogger module.
    * `ng generate module blogger/shared --module blogger` - Create shared module inside blogger module.
    * `ng generate component blogger/header --module blogger` - Create Header Component inside blogger module.
    * `ng generate module blogger/material --module blogger` - Create Module for angular material import.
    * `ng generate module blogger/routing --module blogger` - Create Module for routing configuration.
* `ng generate service blogger/shared/httpservice` - Create HttpService.

## Third Party Angular Modules Installed in this application
* `npm install --save @ng-bootstrap/ng-bootstrap` - Install Bootstrap Angular Module.
* `npm install --save @angular/material @angular/cdk` - Install Angular Material Module.

## Local Run
* `ng serve --open` to run this application locally.

## Production Build
* `npm build --prod` - to build application for production deployment.