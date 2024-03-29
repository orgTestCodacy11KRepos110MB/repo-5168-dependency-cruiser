export default {
  modules: [
    {
      source: "src/foo/bar/baz.js",
      dependencies: [],
      dependents: ["src/foo/bar/qux.js"],
      orphan: false,
      valid: true,
    },
    {
      source: "src/foo/bar/bar.template.js",
      dependencies: [],
      dependents: ["src/foo/bar/index.js"],
      orphan: false,
      valid: true,
    },
    {
      source: "src/foo/bar/index.js",
      dependencies: [
        {
          dynamic: false,
          module: "./bar.template",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/bar.template.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
        {
          dynamic: false,
          module: "./quux",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/quux.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
        {
          dynamic: false,
          module: "./quuz",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/quuz.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
        {
          dynamic: false,
          module: "./corge",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/corge.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
        {
          dynamic: false,
          module: "./grault",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/grault.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
        {
          dynamic: false,
          module: "./qux",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/qux.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
      ],
      dependents: [],
      orphan: false,
      valid: true,
    },
    {
      source: "src/foo/bar/quux.js",
      dependencies: [
        {
          dynamic: false,
          module: "./qux",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/qux.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
      ],
      dependents: [
        "src/foo/bar/index.js",
        "src/foo/bar/quuz.js",
        "src/foo/bar/corge.js",
        "src/foo/bar/grault.js",
      ],
      orphan: false,
      valid: true,
    },
    {
      source: "src/foo/bar/qux.js",
      dependencies: [
        {
          dynamic: false,
          module: "./baz",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/baz.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
      ],
      dependents: ["src/foo/bar/index.js", "src/foo/bar/quux.js"],
      orphan: false,
      valid: true,
    },
    {
      source: "src/foo/bar/quuz.js",
      dependencies: [
        {
          dynamic: false,
          module: "./quux",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/quux.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
      ],
      dependents: ["src/foo/bar/index.js"],
      orphan: false,
      valid: true,
    },
    {
      source: "src/foo/bar/corge.js",
      dependencies: [
        {
          dynamic: false,
          module: "./quux",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/quux.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
      ],
      dependents: ["src/foo/bar/index.js"],
      orphan: false,
      valid: true,
    },
    {
      source: "src/foo/bar/grault.js",
      dependencies: [
        {
          dynamic: false,
          module: "./quux",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "src/foo/bar/quux.js",
          coreModule: false,
          followable: true,
          couldNotResolve: false,
          dependencyTypes: ["local"],
          matchesDoNotFollow: false,
          circular: false,
          valid: true,
          cycle: [],
        },
      ],
      dependents: ["src/foo/bar/index.js"],
      orphan: false,
      valid: true,
    },
  ],
  summary: {
    violations: [],
    error: 0,
    warn: 0,
    info: 0,
    ignore: 0,
    totalCruised: 8,
    totalDependenciesCruised: 11,
    optionsUsed: {
      combinedDependencies: false,
      doNotFollow: {
        path: "node_modules",
      },
      exclude: {
        path: "mocks|fixtures|test/integration|src/cli/tools/svg-in-html-snippets/script.snippet.js",
      },
      externalModuleResolutionStrategy: "node_modules",
      includeOnly: "^src/report/dot",
      moduleSystems: ["cjs", "es6"],
      outputTo: "-",
      outputType: "json",
      preserveSymlinks: false,
      rulesFile: ".dependency-cruiser.json",
      tsPreCompilationDeps: true,
      exoticRequireStrings: ["tryRequire", "requireJSON"],
      enhancedResolveOptions: {
        exportsFields: ["exports"],
        conditionNames: ["require"],
        extensions: [".js", ".d.ts"],
      },
      args: "src/report/dot",
    },
    ruleSetUsed: {
      forbidden: [
        {
          name: "utl-module-not-shared-enough",
          comment: "(sample rule to demo demo rules based on dependents)",
          severity: "info",
          from: {
            path: "^src",
          },
          module: {
            path: "^src/utl",
            numberOfDependentsLessThan: 3,
          },
        },
      ],
    },
  },
};
