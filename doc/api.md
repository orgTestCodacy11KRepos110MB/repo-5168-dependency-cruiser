# API

The typical use for dependency-cruiser is on the command line. However, you
might want to use it programmatically. For this, dependency-cruiser has an
API

## Versioning

The API follows the same (semantic) versioning rules and rhythm as the API does

function cruise(pFileAndDirectoryArray, pOptions, pResolveOptions, pTSConfig) {

## Using the API - step by step

### Hello dependencies!

The most basic use for dependency cruiser is to retrieve the dependencies of
and between modules in folder. Here's an example that cruises all files in
the `src` folder and prints the dependencies to stdout:

```typescript
import { cruise, IReporterOutput } from "dependency-cruiser";

const ARRAY_OF_FILES_AND_DIRS_TO_CRUISE: string[] = ["src"];
try {
    const cruiseResult: IReporterOutput = cruise(ARRAY_OF_FILES_AND_DIRS_TO_CRUISE);
} catch(error)


console.dir(cruiseResult.output, { depth: 10 });
```

You might notice a few things when you do this

- the function ruthlessly cruises _everything_ in `src` and whatever it uses,
  recursively - even in your `node_modules`. This takes a long time and might
  not give the information you actually seek. Dependency-cruiser has a bunch of
  options to steer what it actually cruises;
  [passing cruise options](#Passing cruise options) will get you sorted.
- If you're using Babel, Webpack or TypeScript the results you get without
  passing their respective configs might not be what you expect. You can tell
  dependency-cruiser to [adapt to your environment](#Adapt to your environment),
  though.

### Passing cruise options

```typescript
import { cruise, IReporterOutput, ICruiseOptions } from "dependency-cruiser";

const ARRAY_OF_FILES_AND_DIRS_TO_CRUISE: string[] = ["src"];
const cruiseOptions: ICruiseOptions = {
  includeOnly: "src",
};
try {
  const cruiseResult: IReporterOutput = cruise(
    ARRAY_OF_FILES_AND_DIRS_TO_CRUISE,
    cruiseOptions
  );
  console.dir(cruiseResult.output, { depth: 10 });
} catch (error) {
  console.error(error);
}
```

Apart from all the ones mentioned in the [options reference](options-reference.md), you can use these options:

| option     | meaning                                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| validate   | if true, will attempt to validate with the rules in ruleSet - defaults to false.                                                                   |
| ruleSet    | An object containing the rules to validate against. The rules should adhere to the [configuration schema](../src/schema/configuration.schema.json) |
| outputType | One of the output types mentioned in the [--output-format](cli.md#--output-type-specify-the-output-format) command line options                    |

### Adapt to your environment

```typescript
import { cruise, IReporterOutput, ICruiseOptions } from "dependency-cruiser";

const ARRAY_OF_FILES_AND_DIRS_TO_CRUISE: string[] = ["src"];
const cruiseOptions: ICruiseOptions = {
  includeOnly: "src",
};
const webpackResolveOptions = {
  exportsFields: ["exports"],
  conditionNames: ["require"],
};

try {
  const cruiseResult: IReporterOutput = cruise(
    ARRAY_OF_FILES_AND_DIRS_TO_CRUISE,
    cruiseOptions,
    webpackResolveOptions
  );
  console.dir(cruiseResult.output, { depth: 10 });
} catch (error) {
  console.error(error);
}
```

### Utility functions

> Exposition of `extract-xxx` functions is _experimental_. It also will only
> work on node ^12.19 || >=14.7 as those are versions that support the `exports`
> entry points feature in package.json.

```typescript
import { cruise, ICruiseOptions, IReporterOutput } from ".";
import extractDepcruiseConfig from "./src/config-utl/extract-depcruise-config";
import extractTSConfig from "./src/config-utl/extract-ts-config";
import extractWebpackResolveConfig from "./src/config-utl/extract-webpack-resolve-config";

try {
  const ARRAY_OF_FILES_AND_DIRS_TO_CRUISE = ["src"];

  const depcruiseConfig: ICruiseOptions = extractDepcruiseConfig(
    "./.dependency-cruiser.js"
  );
  const webpackResolveConfig = extractWebpackResolveConfig("./webpack.conf.js");
  const tsConfig = extractTSConfig("./tsconfig.json");

  const cruiseResult: IReporterOutput = cruise(
    ARRAY_OF_FILES_AND_DIRS_TO_CRUISE,
    depcruiseConfig,
    webpackResolveConfig,
    tsConfig
  );

  console.dir(cruiseResult.output, { depth: 10 });
} catch (error) {
  console.error(error);
}
```
