# crossrm

The [UNIX command](http://en.wikipedia.org/wiki/Rm_(Unix)) `rm -rf` for Node.js in a cross-platform implementation. Significantly smaller than `rimraf`!

## Usage

```sh
npx crossrm ./path
```

### Why no JavaScript API?

Node.js v14.14 and up supports [the built-in `fs.rm` function](https://nodejs.org/api/fs.html#fspromisesrmpath-options), which does everything you need. This package is just a thin CLI wrapper around the function.

```ts
import { rm } from 'node:fs/promises';
import { rmSync } from 'node:fs';

// This will throw an error if the path does not exist.
await rm(path, { recursive: true });
rmSync(path, { recursive: true });

// This will do nothing if the path does not exist.
await rm(path, { recursive: true, force: true });
rmSync(path, { recursive: true, force: true });
```
