# Error Faced and Resolution

## Error 1
Got this error after imported ng-bootstrap,
```
SCRIPT5022: SCRIPT5022: It looks like your application or one of its dependencies is using i18n.
Angular 9 introduced a global `$localize()` function that needs to be loaded.
Please run `ng add @angular/localize` from the Angular CLI.
(For non-CLI projects, add `import '@angular/localize/init';` to your `polyfills.ts` file.
For server-side rendering applications add the import to your `main.server.ts` file.)
```
**Resolution**
As advised, executed command `ng add @angular/localize`

