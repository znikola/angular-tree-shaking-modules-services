# Tree shaking test

This app tests under which circumstances are services tree shaken in an Angular app.

The goal is to inject services from a library, therefore the `core` lib.

## Running the app

Build: `yarn build`. It will build with the `prod` flag on.

Run: `yarn start`. It will run the app with the `prod` flag on.

## Providing services

As Angular offers two main ways to register (provide) a service, there are two cases:

- When a service is registered un a module: `@Injectable({ providedIn: AModule })`
- When a service is registered in 'root': `@Injectable({ providedIn: 'root' })`

## Check the results

To check the tested results, open the browser's console and check for '...should NOT be tree shaked...' logs.

Another way to check for the tree shaked services is to open the `main.*.js` file from `dist/angular-tree-shaking-modules-services`, and search for console logs from the services that should be tree shaked (it's expected to find none).

## Results

Services that are provided in `root` or in a module, are tree shaked if not injected.

Services that are injected somewhere are not tree shaked.

Note the `another.module.ts` that tests what will happen when the module in which a service is provided in is imported twice.
