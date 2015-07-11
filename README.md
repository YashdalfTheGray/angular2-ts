# angular2-ts
Angular 2, the new router and Typescript!

## Installation (?)

This project requires `tsd` and `typescript` to be installed. Both can be installed via a `(sudo) npm install -g tsd@^0.6.0 typescript@^1.5.0-beta`. 

Once installed, run `tsd install angular2 es6-promise rx rx-lite` to bring in the `d.ts` files required for typescript. 

## Running

Running this requires `http-server`.

Run `tsc -m commonjs -t es5 --emitDecoratorMetadata src/app.ts` to compile the Typescript into Javascript. Then, from the console, run `http-server src/`. 