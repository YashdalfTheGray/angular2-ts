# angular2-ts
Angular 2, the new router and Typescript!

## Installation (?)

This project requires `tsd` and `typescript` to be installed. Both can be installed via a `(sudo) npm install -g tsd@^0.6.0 typescript@^1.5.0-beta`. 

Once installed, run `tsd install angular2 es6-promise rx rx-lite` to bring in the `d.ts` files required for typescript. 

## Running

Running this requires `http-server`.

Run `tsc` to compile the Typescript into Javascript. Then, from the console, run `http-server src/`. 

If a custom port is desired, use `http-server -p <port-number> src/` instead. 

## Branches

* The (relatively) current tutorial code from [angular.io](https://angular.io/docs/js/latest/quickstart.html) lives on `master`.
* The tutorial code from [ng-book 2](https://www.ng-book.com/2/) lives on `ng-book-app`. 

## Observations

* Angular 2 references `<input name="text" #mytextinput>` cannot have capital letters in them. Reference `#myTextInput` will not work!
* Components and classes have to be declared and compiled in order. If `<my-app>` uses `<my-component>`, `<my-component>` has to either appear before `<my-app>` in the file or be included before the file containing `<my-app>`.
