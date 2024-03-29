export default {
  modules: [
    {
      source: "test/cli/fixtures/cjs/root_one.js",
      valid: true,
      dependencies: [
        {
          resolved: "test/cli/fixtures/cjs/one_only_one.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "./one_only_one",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
        {
          resolved: "test/cli/fixtures/cjs/one_only_two.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "./one_only_two",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
        {
          resolved: "test/cli/fixtures/cjs/shared.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "./shared",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
        {
          resolved: "test/cli/fixtures/cjs/sub/dir.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "./sub/dir",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
        {
          resolved: "fs",
          coreModule: true,
          followable: false,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "fs",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
        {
          resolved:
            "test/cli/fixtures/cjs/node_modules/somemodule/src/somemodule.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "somemodule",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
      ],
    },
    {
      source: "fs",
      valid: true,
      followable: false,
      coreModule: true,
      couldNotResolve: false,
      dependencyTypes: ["local"],
      dependencies: [],
    },
    {
      source: "test/cli/fixtures/cjs/one_only_one.js",
      valid: true,
      dependencies: [
        {
          resolved: "path",
          coreModule: true,
          followable: false,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "path",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
      ],
    },
    {
      source: "path",
      valid: true,
      followable: false,
      coreModule: true,
      couldNotResolve: false,
      dependencyTypes: ["local"],
      dependencies: [],
    },
    {
      source: "test/cli/fixtures/cjs/one_only_two.js",
      valid: true,
      dependencies: [
        {
          resolved: "path",
          coreModule: true,
          followable: false,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "path",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
      ],
    },
    {
      source: "test/cli/fixtures/cjs/shared.js",
      valid: true,
      dependencies: [
        {
          resolved: "path",
          coreModule: true,
          followable: false,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "path",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
      ],
    },
    {
      source: "test/cli/fixtures/cjs/sub/dir.js",
      valid: true,
      dependencies: [
        {
          resolved: "test/cli/fixtures/cjs/sub/depindir.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "./depindir",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
        {
          resolved: "path",
          coreModule: true,
          followable: false,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "path",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
      ],
    },
    {
      source: "test/cli/fixtures/cjs/sub/depindir.js",
      valid: true,
      dependencies: [
        {
          resolved: "path",
          coreModule: true,
          followable: false,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "path",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
      ],
    },
    {
      source: "test/cli/fixtures/cjs/node_modules/somemodule/src/somemodule.js",
      valid: true,
      dependencies: [
        {
          resolved:
            "test/cli/fixtures/cjs/node_modules/somemodule/src/moar-javascript.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "./moar-javascript",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
        {
          resolved:
            "test/cli/fixtures/cjs/node_modules/somemodule/node_modules/someothermodule/main.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          module: "someothermodule",
          moduleSystem: "cjs",
          matchesDoNotFollow: false,
          circular: false,
          dynamic: false,
          valid: true,
        },
      ],
    },
    {
      source:
        "test/cli/fixtures/cjs/node_modules/somemodule/src/moar-javascript.js",
      valid: true,
      dependencies: [],
    },
    {
      source:
        "test/cli/fixtures/cjs/node_modules/somemodule/node_modules/someothermodule/main.js",
      valid: true,
      dependencies: [],
    },
  ],
  summary: {
    violations: [],
    error: 0,
    warn: 0,
    info: 0,
    ignore: 0,
    totalCruised: 11,
    optionsUsed: {
      outputTo: "test/cli/output/cjs.file.json",
      exclude: { path: "" },
      moduleSystems: ["amd", "cjs", "es6"],
      outputType: "json",
    },
  },
};
