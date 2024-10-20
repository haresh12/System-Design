                                                         /** BUNDLER THE LIT */

/**
 *    EXPLAIN ME package.json IN DEPTH:
 * 
 *    - package.json is the manifest file for any Node.js project.
 *    - It contains metadata about the project, like its name, version, and description.
 *    - Key Sections:
 *      1. `name`: Project name (must be unique in npm registry).
 *      2. `version`: The version of the project (follows semantic versioning).
 *      3. `scripts`: Custom scripts that can be run using `npm run <script-name>`.
 *      4. `dependencies`: List of production dependencies required for the app to run.
 *      5. `devDependencies`: Dependencies needed only during development (e.g., testing, building).
 *      6. `engines`: Specifies the required versions of Node.js or npm to ensure compatibility.
 *      7. `main`: Entry point file for the application.
 *      8. `license`: The license type of the project.
 * 
 *    - What are ~, ^, * in versioning?
 *      1. `~` (Tilde): Allows only patch-level updates. Example: `~1.2.3` will allow `1.2.x` but not `1.3.0`.
 *      2. `^` (Caret): Allows minor and patch-level updates. Example: `^1.2.3` will allow `1.x.x` but not `2.0.0`.
 *      3. `*` (Wildcard): Allows any version of a dependency, without restrictions.
 */

/**
 *    IF WE HAVE package.json, WHY DO WE NEED package-lock.json? (IN DEPTH)
 *    
 *    - package-lock.json is auto-generated by npm to lock the exact versions of dependencies.
 *    - It ensures that the same version of every dependency and sub-dependency is installed on every environment (even if version ranges are defined in package.json).
 *    - Purpose:
 *      1. It prevents discrepancies in dependencies across different environments (important in large teams or CI/CD).
 *      2. Ensures that even transitive dependencies (dependencies of dependencies) have consistent versions.
 *    - package-lock.json guarantees reproducible builds. Without it, npm might install slightly different versions based on the ranges in package.json.
 */

/**
 *    WHAT DO WE MEAN BY TRANSITIVE DEPENDENCY?
 *    
 *    - A transitive dependency is a dependency that your direct dependencies rely on.
 *    - Example: If your project depends on `A`, and `A` depends on `B`, `B` is a transitive dependency.
 *    - These are automatically installed when you install a direct dependency, but they are often managed through package-lock.json.
 */

/**
 *    WHY DO WE USE `npm install -D` SOMETIMES, BUT NOT ALWAYS?
 *    
 *    - `npm install -D` (or `npm install --save-dev`) is used to install *development dependencies*.
 *    - These are tools required during development, like testing libraries or bundlers (e.g., Webpack, Jest).
 *    - If we don't use `-D`, the dependency is considered a production dependency and gets listed in the `dependencies` section of package.json.
 *    - Not using `-D` can lead to larger production bundles, as tools only required for development might be included in production environments.
 */

/**
 *    SUPPOSE I HAVE ONE DEPENDENCY THAT SHOULD BE A DEV DEPENDENCY, BUT I DON'T USE `-D` WHILE INSTALLING?
 *    
 *    - If you install a dev tool as a regular dependency (without `-D`), it will be included in production builds.
 *    - This can cause issues such as:
 *      1. Increased bundle size, leading to slower loading times.
 *      2. Unnecessary dependencies in production, which can increase attack surfaces and security risks.
 *      3. More memory consumption on the server or client-side (due to bloated bundles).
 *      4. Development tools could potentially break production environments if misused.
 */

/**
 *    APART FROM DEV DEPENDENCY, WHAT OTHER TYPES OF DEPENDENCIES CAN WE HAVE IN package.json?
 *    
 *    - `dependencies`: Required for the app to run in production. Example: Express.js for a Node.js app.
 *    
 *    - `devDependencies`: Needed only during development (e.g., linters, testing frameworks).
 *    
 *    - `peerDependencies`: Specifies which version of a dependency is compatible with your project. 
 *      - Peer dependencies are not auto-installed but are expected to be installed by the parent project.
 *      - Example: If you create a React library, you may set React as a peer dependency to ensure compatibility with the user's React version.
 *    
 *    - `optionalDependencies`: Dependencies that are not mandatory for the app to work.
 *      - If an optional dependency fails to install, it won’t break the project.
 *      - Example: A library that adds additional features if a specific optional library is available.
 */

/**
 *    IN-DEPTH UNDERSTANDING OF package-lock.json? SHOULD IT BE PUSHED TO GIT?
 *    
 *    - package-lock.json ensures that exact versions of all dependencies and sub-dependencies (transitive dependencies) are locked.
 *    - It overrides the version ranges defined in package.json to ensure consistency across environments.
 *    - Why push it to Git?
 *      1. It guarantees reproducible builds.
 *      2. It prevents unexpected changes in dependency versions when other developers or CI environments install dependencies.
 *      3. It avoids *"works on my machine"* problems.
 *    - If you don't push package-lock.json, you risk different environments installing different dependency versions, leading to unpredictable issues.
 */

/**
 *    15 ADVANCED POINTS THAT ONLY 0.001% OF DEVELOPERS UNDERSTAND ABOUT package.json AND package-lock.json:
 * 
 *    1. package-lock.json ensures that even sub-dependencies’ versions are locked, preventing accidental updates.
 * 
 *    2. Semantic versioning symbols (~, ^) can lead to different versions of a library being installed in different environments unless package-lock.json is used.
 * 
 *    3. Peer dependencies are not automatically installed, and developers often forget to document or install them.
 * 
 *    4. Optional dependencies allow graceful failure if a dependency is not available, but not all developers utilize this correctly.
 * 
 *    5. package.json's `scripts` section can run shell commands and node commands, making it a lightweight task runner (similar to npm-run-all).
 * 
 *    6. You can specify OS-specific dependencies using the `os` field, ensuring certain packages are only installed on specific operating systems.
 * 
 *    7. The `engines` field in package.json ensures that your app only runs on specific versions of Node or npm, but many developers don’t use it.
 * 
 *    8. package-lock.json helps resolve *phantom dependency issues* where packages may conflict or disappear due to version mismatches.
 * 
 *    9. Using `npm ci` is much faster than `npm install` because it uses the exact versions in package-lock.json without resolving dependencies.
 * 
 *    10. Many developers overlook the fact that package-lock.json can still include devDependencies when `--production` is used without excluding them manually.
 * 
 *    11. The `optionalDependencies` section can sometimes fail without breaking the build, and developers often don't test for this failure scenario.
 * 
 *    12. Not all developers know that package.json supports defining custom npm script hooks (like `preinstall` and `postinstall`).
 * 
 *    13. Circular dependency issues can sometimes be caught through lockfile conflicts when using package-lock.json.
 * 
 *    14. Some developers don’t realize that npm has a separate lockfile format in npm v7+ to support workspaces, and this requires different tooling.
 * 
 *    15. The `bundledDependencies` field can be used to explicitly bundle certain packages with your project, which is rarely utilized effectively.
 */


/**
 *  WHAT THE HECK DO WE MEAN BY BUNDLER? WHY DO WE NEED THAT?
 *  
 *  - A bundler takes multiple JavaScript (and other asset) files and combines them into a single file (or smaller set of files).
 *  - It ensures that your application can be split into modules and dependencies, but eventually combined into a format that browsers can handle efficiently.
 *  - Why we need it:
 *    1. JavaScript modules may not be supported in all environments or need specific formats.
 *    2. Bundlers help with performance optimizations like minification, code-splitting, and tree-shaking.
 *    3. It simplifies dependency management and optimizes assets for production.
 */

/**
 *  TOP 5 BUNDLERS OF 2024:
 *  
 *  1. **Webpack**: The most popular and flexible bundler, used in many large projects.
 *  2. **Parcel**: Zero-config bundler, known for simplicity and speed, great for small to mid-sized projects.
 *  3. **Vite**: Modern bundler that is fast and optimized for development with ES modules.
 *  4. **Rollup**: Efficient for bundling libraries, focusing on ES module bundling with tree-shaking.
 *  5. **esbuild**: Extremely fast bundler, written in Go, known for its blazing-fast build speeds.
 */

/**
 *  CAN'T WE BUILD OUR REACT APP WITHOUT A BUNDLER?
 *  
 *  - Technically, yes, you can build React apps without a bundler by using modern JavaScript features like native ES modules and CDNs.
 *  - However, without a bundler:
 *    1. You’ll miss out on important optimizations (minification, code-splitting).
 *    2. Dependency management becomes difficult for large apps.
 *    3. Development experience suffers (no hot module reloading, for example).
 *    4. Transpilation (Babel, TypeScript) for older browser support becomes harder to manage.
 *    5. Handling assets (CSS, images, etc.) becomes cumbersome.
 */

/**
 *  15 THINGS THAT MOST BUNDLERS HANDLE:
 *  
 *  1. **Module resolution**: Resolves imports/exports in your code and combines them.
 *  2. **Code splitting**: Splits your app into smaller bundles to load only the necessary code (on-demand).
 *  3. **Minification**: Removes unnecessary characters (whitespace, comments) to reduce bundle size.
 *  4. **Tree shaking**: Removes unused code from your bundles, optimizing for performance.
 *  5. **CSS bundling**: Merges and optimizes CSS files along with JavaScript.
 *  6. **Asset bundling**: Handles non-JS assets like images, fonts, etc.
 *  7. **Hot module replacement (HMR)**: Updates your code in the browser without a full page reload.
 *  8. **Transpiling**: Converts modern JavaScript (ES6+) into code that older browsers can understand.
 *  9. **Source maps**: Helps in debugging by mapping compiled code back to the original source.
 *  10. **Environment variables**: Bundlers often allow you to inject environment-specific variables into your app.
 *  11. **File watching**: Automatically rebuilds your app when changes are detected.
 *  12. **Caching**: Speeds up build times by reusing unchanged code in subsequent builds.
 *  13. **Dead code elimination**: Removes code that is not used anywhere in the app.
 *  14. **Consistent hashing**: Ensures bundle file names change only when the content does, improving caching.
 *  15. **Polyfilling**: Automatically adds polyfills for features not supported in older browsers.
 */

/**
 *  IN-DEPTH UNDERSTANDING OF PARCEL:
 *  
 *  - **Zero configuration**: Parcel requires no config files (no webpack.config.js, etc.). It automatically detects and optimizes based on file types.
 *  - **Super fast**: Parcel leverages multi-core processing, file caching, and is highly optimized for speed.
 *  - **Out-of-the-box HMR**: It supports Hot Module Replacement natively, without additional plugins.
 *  - **Built-in support for CSS, images, and more**: It automatically bundles assets like CSS and images without needing additional loaders.
 *  - **Tree-shaking and code splitting**: Parcel automatically tree-shakes and splits your code into optimized chunks.
 *  - **Supports TypeScript, Babel, JSX**: Parcel works with most modern JavaScript features, like TypeScript, without needing extra configuration.
 */

/**
 *  IS PARCEL A GOOD CHOICE FOR LARGE ENTERPRISE PROJECTS?
 *  
 *  - **Pros**:
 *    1. Fast build speeds and HMR make Parcel appealing for development.
 *    2. Simplicity of configuration is great for small to medium-sized projects.
 *    3. Its performance on multi-core machines is impressive.
 *  
 *  - **Cons**:
 *    1. For very large enterprise apps, Webpack might offer more granular control over optimizations.
 *    2. Parcel lacks some advanced features that Webpack plugins offer.
 *    3. Customizability is limited—beyond a certain scale, this could be a drawback.
 *  
 *  - Verdict: Parcel is great for small to mid-sized apps but might not be the best for highly complex or enterprise-level apps where you need full control.
 */

/**
 *  HOW DID PEOPLE BUILD PROJECTS BEFORE BUNDLERS?
 *  
 *  - In the early days, JavaScript was written in a single file, and developers manually managed dependencies.
 *  - For larger apps, developers often included external scripts using `<script>` tags.
 *  - They relied on build tools like Grunt/Gulp to automate tasks (minification, concatenation) but without bundling.
 *  - Older browsers had no concept of ES modules, so libraries like RequireJS were used for module loading.
 */

/**
 *  WHAT IS TREE-SHAKING, CONSISTENT HASHING, CODE-SPLITTING, AND MINIFICATION?
 *  
 *  - **Tree-shaking**: Removes dead, unused code from your bundle, resulting in smaller files and better performance.
 *  
 *  - **Consistent hashing**: Generates unique hash values based on the content of the file. The hash only changes when the content changes, allowing for better long-term caching.
 *  
 *  - **Code-splitting**: Breaks up large bundles into smaller chunks that are loaded on-demand (lazy loading), improving page load times.
 *  
 *  - **Minification**: Compresses code by removing unnecessary characters (like whitespace) to reduce the file size.
 */

/**
 *  WHY DOES A BUNDLER USE FILE-WATCHING ALGORITHMS? WHY DO WE NEED THAT AND WHICH ONE IS BEST?
 *  
 *  - **Why**: File-watching algorithms monitor your code files for changes during development. When a file changes, the bundler rebuilds only the necessary parts of your app.
 *  - **Need**: This improves development speed, providing instant feedback, and eliminating the need to restart the entire build process.
 *  - **Best algorithm**: Many bundlers use the OS's file system API for file watching. More advanced bundlers (e.g., Parcel, Vite) optimize this with multi-threading or caching mechanisms.
 */

/**
 *  10 THINGS THAT ONLY 0.001% OF DEVELOPERS KNOW ABOUT BUNDLERS:
 *  
 *  1. Advanced caching mechanisms in bundlers can drastically improve build performance.
 *  2. Bundlers like esbuild achieve their speed by using native languages (Go) rather than JavaScript itself.
 *  3. Webpack's module federation allows you to load multiple independent applications as separate bundles.
 *  4. Bundlers can optimize not only JavaScript but also images, fonts, and CSS files.
 *  5. Some bundlers can perform dependency analysis to prefetch modules before they are required.
 *  6. Code-splitting is often automatically handled by bundlers when using dynamic imports.
 *  7. Modern bundlers support incremental builds, meaning only the modified code is recompiled.
 *  8. Tree-shaking doesn't just eliminate unused imports but also unused functions and variables within a file.
 *  9. Parcel uses caching on a per-file basis, allowing unchanged files to be skipped during rebuilds.
 *  10. Many bundlers, like Rollup, were designed specifically for libraries, making them optimal for ES modules rather than full web apps.
 */



/**
 *  WHAT IS ES MODULE (ECMAScript Module)?
 * 
 *  - ES Modules (ESM) are the official standardized module system introduced in ES6 (ECMAScript 2015).
 *  - They provide a way to organize and encapsulate JavaScript code into reusable, modular units.
 *  - Before ES modules, there were other popular module systems like CommonJS (used in Node.js) and AMD (used in browsers), but they were not part of the JavaScript specification.
 *  - ES Modules provide a native way for JavaScript to handle modularity in both browsers and Node.js environments.
 *
 *  IN-DEPTH BREAKDOWN:
 *  
 *  1. **Named Exports and Imports**:
 *     - You can export specific functions, objects, or variables from a module and import them selectively where needed.
 *     - Syntax:
 *       - `export`: Declares what is to be exported from a module.
 *       - `import`: Imports exported members from another module.
 *     - Example:
 *       ```js
 *       // math.js
 *       export const add = (a, b) => a + b;
 *       export const subtract = (a, b) => a - b;
 *       ```
 *       ```js
 *       // main.js
 *       import { add } from './math.js';
 *       console.log(add(2, 3)); // 5
 *       ```
 *     - **Named exports** allow multiple exports per file, enabling you to selectively import the pieces you need.
 *  
 *  2. **Default Exports**:
 *     - ES modules also support default exports, where a module can export a single value (like a function, class, or object) as the "default" export.
 *     - Syntax:
 *       - `export default`: Declares the default export for the module.
 *       - `import <name>`: Imports the default export from another module.
 *     - Example:
 *       ```js
 *       // math.js
 *       export default function multiply(a, b) {
 *         return a * b;
 *       }
 *       ```
 *       ```js
 *       // main.js
 *       import multiply from './math.js';
 *       console.log(multiply(2, 3)); // 6
 *       ```
 *     - **Default exports** are useful when a module primarily exports one thing.
 *
 *  3. **Module Scope**:
 *     - Variables, functions, or classes defined in a module are **scoped** to that module by default.
 *     - They are not globally accessible unless explicitly exported.
 *     - This reduces global namespace pollution and makes your code more maintainable and secure.
 *
 *  4. **Static Structure**:
 *     - ES modules have a **static structure**, meaning the imports and exports are analyzed at compile time rather than at runtime.
 *     - This allows tools like bundlers (Webpack, Rollup) to optimize code better (e.g., tree-shaking) because they know exactly what parts of the code are being used.
 *     - **Benefits**:
 *       1. Better performance due to optimizations (like dead code elimination).
 *       2. Errors related to modules can be caught early in the compile phase rather than at runtime.
 *       3. Faster startup times because module loading is more predictable.
 *  
 *  5. **Strict Mode**:
 *     - ES modules always run in **strict mode** (like `'use strict';`), even if you don't explicitly declare it.
 *     - This helps prevent silent errors and enables more reliable code, e.g., preventing accidental globals or assigning to non-writable properties.
 *  
 *  6. **Module Resolution**:
 *     - In browsers, modules are loaded via URLs. This means file paths are important, and you must include the file extension.
 *     - Example:
 *       ```js
 *       import { add } from './math.js'; // Correct (note the .js)
 *       ```
 *     - In Node.js, module resolution for ES modules involves file path and file extension resolution.
 *  
 *  7. **Async Loading in Browsers**:
 *     - When using ES modules in the browser, they are loaded **asynchronously** by default.
 *     - This ensures non-blocking execution, meaning the page doesn't freeze while the module is being fetched and executed.
 *     - Example:
 *       ```html
 *       <script type="module" src="main.js"></script>
 *       ```
 *     - By specifying `type="module"`, the browser knows it’s loading an ES module, and it will treat the script asynchronously.
 *
 *  8. **Top-Level `await`**:
 *     - As of ES2022, you can use `await` at the top level of ES modules without wrapping it inside an async function.
 *     - Example:
 *       ```js
 *       // main.js
 *       const data = await fetch('/api/data');
 *       console.log(await data.json());
 *       ```
 *     - This is only available in modules and not in regular scripts.
 *
 *  9. **Dynamic Imports**:
 *     - ES modules allow **dynamic imports**, meaning you can load modules on-demand rather than at the start of your program.
 *     - Syntax:
 *       ```js
 *       import('./module.js').then(module => {
 *         module.someFunction();
 *       });
 *       ```
 *     - This allows **code-splitting**, where large applications load only the modules needed for the current view, improving performance.
 *
 *  10. **Module Interoperability**:
 *     - ES modules can work alongside other module systems like CommonJS, but there are limitations.
 *     - In Node.js, CommonJS (`require`) is still supported, but mixing CommonJS with ES modules can lead to some quirks, especially in the way default exports are handled.
 *     - For example:
 *       ```js
 *       // CommonJS module
 *       const fs = require('fs');
 *       module.exports = someFunction;
 *       
 *       // ES module
 *       import someFunction from './someFile.js'; // Can still import CommonJS, but with caution.
 *       ```
 *
 *  11. **ES Module in Browsers**:
 *     - Browsers now natively support ES modules. You no longer need bundlers to handle basic module loading for small projects.
 *     - Example:
 *       ```html
 *       <script type="module">
 *         import { hello } from './module.js';
 *         console.log(hello());
 *       </script>
 *       ```
 *     - You can also use **modulepreload** to preload modules for performance gains:
 *       ```html
 *       <link rel="modulepreload" href="/scripts/main.js">
 *       ```
 *
 *  12. **Compatibility**:
 *     - ES modules are fully supported in modern browsers (Chrome, Firefox, Safari, Edge) and in Node.js (since version 12+).
 *     - For older environments, tools like Babel can be used to transpile ES module syntax into other formats like CommonJS.
 *
 *  13. **Tree-Shaking**:
 *     - A key feature of ES modules is that they are **statically analyzable**.
 *     - This enables **tree-shaking** (removing unused code) because bundlers know exactly which parts of a module are being used.
 *     - Example: If you import only `add` from `math.js`, the rest of the module (like `subtract`) can be excluded from the final bundle.
 *
 *  14. **Cross-Origin Module Loading**:
 *     - When loading ES modules from a different domain, you might need to include `crossorigin` attributes and handle CORS (Cross-Origin Resource Sharing) settings correctly.
 *     - Browsers enforce stricter security when dealing with modules loaded across domains.
 *  
 *  15. **ES Module Caching**:
 *     - Once a module is loaded, it is **cached**. Even if you import the module multiple times, the browser will load it only once and reuse the cached version.
 *     - This improves performance and ensures consistency across your application.
 */

