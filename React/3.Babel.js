                                                                /** Babel can not live without you */


/**
 *  WHAT IS A REACT ELEMENT?
 * 
 *  - A React Element is a **plain object** that represents a part of the UI.
 *  - It describes what you want to see on the screen. Elements are immutable (they cannot be changed once created).
 *  - React Elements are the building blocks of React apps and are used to construct a Virtual DOM tree.
 *  - It is created by using `React.createElement()` or JSX syntax, which gets transformed into `React.createElement()` calls.
 *  
 *  - **Example**:
 *    ```js
 *    const element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!');
 *    ```
 *    - This creates a React element representing an `<h1>` tag with a class of `greeting` and the text 'Hello, world!'.
 *  
 *  - **With JSX**:
 *    JSX is a syntactic sugar for `React.createElement()`, making it easier to write.
 *    ```js
 *    const element = <h1 className="greeting">Hello, world!</h1>;
 *    ```
 *  
 *  - **React Element characteristics**:
 *    1. **Plain Object**: It’s a simple JavaScript object that describes what to render and has no behavior.
 *    2. **Immutability**: Once an element is created, it cannot be changed.
 *    3. **Lightweight**: It is a snapshot of the DOM at a point in time and is cheap to create.
 *    4. **Rendering**: Elements are eventually rendered into the actual DOM by ReactDOM.
 * 
 * 
 *  WHAT IS COMPONENT COMPOSITION ?
 * 
 * Component composition is a design pattern in React (and many other UI frameworks) that involves combining simple components to build more 
 * complex user interfaces. This pattern emphasizes the idea of creating reusable and modular components that can be composed together to
 * create a cohesive UI. Here’s a more in-depth look at component composition:


 */

/**
 *  WHAT IS A REACT COMPONENT?
 *  
 *  - A React Component is a **function** or **class** that returns React elements, describing what should appear on the UI.
 *  - Components are reusable building blocks that contain logic and UI description. They are the heart of React's declarative nature.
 *  - React components can accept inputs called `props`, and manage their own state (with functional or class components).
 *  
 *  - **Two main types of components**:
 *  
 *    1. **Function Components**:
 *       - These are simple JavaScript functions that return React elements.
 *       - **Example**:
 *         ```js
 *         function Greeting(props) {
 *           return <h1>Hello, {props.name}!</h1>;
 *         }
 *         ```
 *  
 *    2. **Class Components**:
 *       - These are ES6 classes that extend `React.Component` and have a `render()` method to return React elements.
 *       - **Example**:
 *         ```js
 *         class Greeting extends React.Component {
 *           render() {
 *             return <h1>Hello, {this.props.name}!</h1>;
 *           }
 *         }
 *         ```
 *
 *  - **Different Ways to Write Components**:
 *    1. **Functional Components with Hooks**:
 *       ```js
 *       function Counter() {
 *         const [count, setCount] = React.useState(0);
 *         return (
 *           <div>
 *             <p>You clicked {count} times</p>
 *             <button onClick={() => setCount(count + 1)}>Click me</button>
 *           </div>
 *         );
 *       }
 *       ```
 *  
 *    2. **Class Components**:
 *       ```js
 *       class Counter extends React.Component {
 *         constructor(props) {
 *           super(props);
 *           this.state = { count: 0 };
 *         }
 *  
 *         render() {
 *           return (
 *             <div>
 *               <p>You clicked {this.state.count} times</p>
 *               <button onClick={() => this.setState({ count: this.state.count + 1 })}>
 *                 Click me
 *               </button>
 *             </div>
 *           );
 *         }
 *       }
 *       ```
 *
 *  - **Differences Between React Elements and Components**:
 *    1. **React Elements**:
 *       - A React Element is a simple object representation of a DOM element (i.e., what you want to see).
 *       - Elements are **immutable** and cannot be changed once created.
 *       - They represent the UI structure at a given moment.
 *       - Syntax: `React.createElement(type, props, children)`.
 *       - **Example**:
 *         ```js
 *         const element = <h1>Hello, world!</h1>;
 *         ```
 *
 *    2. **React Components**:
 *       - A React Component is a **function** or **class** that describes the UI and its logic.
 *       - Components are **reusable** and can have their own internal state and lifecycle methods.
 *       - Components **return elements**.
 *       - Syntax: `function MyComponent(props) { return <div>...</div>; }`.
 *       - **Example**:
 *         ```js
 *         function Greeting() {
 *           return <h1>Hello, world!</h1>;
 *         }
 *         ```
 */

/**
 *  15 IN-DEPTH THINGS THAT 0.001% OF DEVELOPERS KNOW ABOUT REACT ELEMENTS AND COMPONENTS:
 *  
 *  1. **React Elements are not HTML**: They are JavaScript objects that describe what you want to see in the UI. They are later turned into actual DOM elements.
 *  
 *  2. **Immutability of Elements**: Once a React element is created, it cannot be changed. This ensures stability in rendering and optimizations in reconciliation.
 *  
 *  3. **React.createElement() vs JSX**: JSX is not required but is syntactic sugar for `React.createElement()`. JSX is transformed at build time.
 *  
 *  4. **Component Re-rendering**: Functional components re-render whenever their state or props change. Class components re-render on state/props change via `this.setState()`.
 *  
 *  5. **Virtual DOM**: React creates a Virtual DOM tree of elements and components that represent the current state of the UI, and only updates the real DOM when necessary.
 *  
 *  6. **Functional Components are not just "stateless"**: Since the introduction of Hooks, functional components can have their own state (`useState`) and side effects (`useEffect`).
 *  
 *  7. **Function Components and Pure Functions**: Functional components are often pure functions, meaning they return the same output given the same input (props).
 *  
 *  8. **Class Components Lifecycle**: Class components have several lifecycle methods (`componentDidMount`, `shouldComponentUpdate`, `componentDidUpdate`, `componentWillUnmount`) which are not available in functional components.
 *  
 *  9. **JSX is Optional**: You can build a React app without using JSX, though JSX makes the syntax more readable and concise.
 *  
 *  10. **Refs in Functional Components**: Refs can be used in functional components using `useRef()` to directly access DOM elements or component instances.
 *  
 *  11. **React.memo()**: This is a higher-order component that prevents functional components from re-rendering if their props haven't changed. It optimizes performance.
 *  
 *  12. **Context API for Component Communication**: React’s Context API allows components to share state and data without needing to pass props down manually through each level of the component tree.
 *  
 *  13. **Error Boundaries**: Only class components can serve as error boundaries by implementing `componentDidCatch` and `getDerivedStateFromError`.
 *  
 *  14. **Portals for rendering outside the DOM hierarchy**: React Portals allow components to render children outside their parent DOM hierarchy.
 *  
 *  15. **Fragments**: React `Fragment` allows grouping children without adding extra nodes to the DOM, improving performance and keeping the DOM tree clean.
 */


/**
 *  WHAT IS JSX?
 *  
 *  - JSX (JavaScript XML) is a **syntactic extension** of JavaScript that allows you to write code that looks similar to HTML but is actually JavaScript.
 *  - It was introduced by React to make writing UI elements simpler and more intuitive. Rather than using `React.createElement()` for every single UI element, JSX allows you to write UI in a more **declarative** way, closely resembling HTML.
 *  - JSX is neither a string nor HTML; it is a **syntactic sugar** that is transpiled into JavaScript.
 *  
 *  - **Example**:
 *    ```js
 *    const element = <h1>Hello, World!</h1>;
 *    ```
 *    This compiles to:
 *    ```js
 *    const element = React.createElement('h1', null, 'Hello, World!');
 *    ```
 *    - Behind the scenes, JSX is converted into JavaScript objects using `React.createElement()`, which React uses to create and manage the Virtual DOM.
 *  
 *  WHY DO WE NEED JSX?
 *  
 *  - JSX provides a more **natural** and **intuitive** way to describe the UI structure, similar to HTML but with full access to JavaScript.
 *  - Writing UI elements in plain JavaScript using `React.createElement()` can be cumbersome, especially for large applications. JSX simplifies this by offering a **declarative syntax** that is easier to read and maintain.
 *  - Without JSX, developers would need to write something like this:
 *    ```js
 *    const element = React.createElement('div', {className: 'container'}, 
 *      React.createElement('h1', null, 'Hello, World!'),
 *      React.createElement('p', null, 'This is a paragraph.')
 *    );
 *    ```
 *    - JSX makes this much simpler:
 *    ```js
 *    const element = (
 *      <div className="container">
 *        <h1>Hello, World!</h1>
 *        <p>This is a paragraph.</p>
 *      </div>
 *    );
 *    ```

 *  IS JSX PART OF REACT?
 *  
 *  - **No**, JSX is **not** a part of the React library or JavaScript language. It is an optional syntactic extension that most React developers use.
 *  - JSX was introduced to **simplify** the process of writing React components by combining HTML-like syntax with JavaScript’s logic.
 *  - JSX needs to be **transpiled** into JavaScript by a compiler (like Babel) because browsers do not understand JSX. This means JSX is part of the **development experience** but not part of React's core runtime.
 *  
 *  CAN'T WE WRITE REACT CODE WITHOUT JSX?
 *  
 *  - Yes, you can write React code without JSX. In fact, React internally does not need JSX, but it makes writing UI elements much easier for developers.
 *  - Without JSX, developers would use `React.createElement()` directly:
 *    ```js
 *    const element = React.createElement('h1', null, 'Hello, World!');
 *    ```
 *    - While this is completely valid, JSX significantly reduces the verbosity of the code, especially when dealing with complex UI structures.
 *  
 *  DOES BROWSERS UNDERSTAND JSX?
 *  
 *  - **No**, browsers do not understand JSX because it is not part of the JavaScript specification or any web standard.
 *  - JSX must be **transpiled** into regular JavaScript (usually using Babel) before it can be executed by the browser.
 *  - For example, the JSX:
 *    ```js
 *    const element = <h1>Hello, World!</h1>;
 *    ```
 *    - Will be transpiled into:
 *    ```js
 *    const element = React.createElement('h1', null, 'Hello, World!');
 *    ```
 *    - This transpiled code is what the browser can run, not the JSX itself.
 *  
 *  IS JSX === HTML?
 *  
 *  - **No**, JSX is **not** the same as HTML. While JSX closely resembles HTML, it has some important differences:
 *    - JSX allows you to embed JavaScript expressions inside the markup using curly braces (`{}`).
 *    - JSX uses **camelCase** for attribute names (e.g., `className` instead of `class`).
 *    - JSX is compiled into JavaScript objects, while HTML is a markup language interpreted by browsers.
 *    - JSX can be used to describe **components**, not just static DOM elements.
 *  
 *  IF BROWSER DOES NOT UNDERSTAND JSX, HOW DOES IT GET COMPILED?
 *  
 *  - JSX is transpiled by **Babel** or similar tools into regular JavaScript during the build process.
 *  - This transformation occurs before the JavaScript code is sent to the browser, so by the time it runs in the browser, all JSX has been converted into `React.createElement()` calls.
 *  - The build tools compile JSX into JavaScript at **development time** so that browsers can execute the compiled code efficiently at **runtime**.
 *
 *  WHY CAN WE WRITE ANY JS CODE INSIDE JSX BUT NOT INSIDE HTML?
 *  
 *  - JSX allows embedding JavaScript expressions inside curly braces (`{}`), making it possible to write dynamic, interactive UIs.
 *    ```js
 *    const name = "John";
 *    const greeting = <h1>Hello, {name}!</h1>;
 *    ```
 *  - HTML, on the other hand, is a **static** markup language that doesn’t support embedded JavaScript logic. For example, you can’t directly write variables or expressions in HTML.
 *  - JSX bridges the gap between **logic** (JavaScript) and **structure** (UI), providing the flexibility to combine them seamlessly.
 *
 *  WHY DO WE SAY JSX HANDLES A LOT OF THINGS FOR US LIKE XSS AND MORE?
 *  
 *  - JSX **automatically escapes** any JavaScript values that are inserted into the UI, preventing potential XSS (Cross-Site Scripting) attacks.
 *  - For example, if a user input contains malicious code, JSX ensures that it is treated as a **string** and not executable JavaScript:
 *    ```js
 *    const input = "<script>alert('Hacked!')</script>";
 *    const element = <div>{input}</div>; // JSX will escape this
 *    ```
 *  - JSX escapes values to prevent **code injection** attacks. Other things JSX does for us:
 *    1. Prevents **dangerous injection** of user-controlled data.
 *    2. Escapes **special characters** like `&`, `<`, `>`.
 *    3. Converts invalid attributes to `null`, avoiding potential security issues.
 *  
 *  DOES JSX MAKE COMPILATION SLOWER?
 *  
 *  - JSX does introduce an additional step in the build process since it needs to be transpiled into JavaScript.
 *  - This can add some overhead to the build time during development, but modern tools like Babel optimize this step efficiently.
 *  - However, during **runtime**, there is no additional overhead as the JSX has already been compiled into optimized JavaScript.
 *
 *  WHY DO WE SAY JSX CAN HIT PERFORMANCE SOMETIMES, AND WHY SHOULD WE USE `REACT.CREATEELEMENT`?
 *  
 *  - JSX itself does not introduce performance issues at runtime, but in **large-scale applications**, using JSX everywhere can sometimes lead to inefficiencies if not managed properly.
 *  - Some developers argue that using `React.createElement()` directly gives them **fine-grained control** over the element creation process, allowing for more optimized performance in edge cases.
 *  - Additionally, using `React.createElement()` can be useful when handling **dynamic components** or when you want to avoid the overhead of the JSX transpilation process in certain parts of the application.
 */


/**
 *  15 THINGS THAT 0.001% OF DEVELOPERS KNOW ABOUT JSX:
 *  
 *  1. **JSX is just syntactic sugar**: JSX is not HTML; it is syntactic sugar for `React.createElement()`. Every JSX expression gets compiled into JavaScript function calls.
 *  
 *  2. **JSX must have a single parent element**: When returning JSX, there must be one enclosing tag (like a `div` or React Fragment), or the code will fail to compile.
 *  
 *  3. **JSX supports fragments (`<>...</>`)**: You can use empty tags (`<>`) to group multiple JSX elements without adding extra nodes to the DOM. This helps avoid unnecessary `<div>` wrappers.
 *    ```js
 *    return (
 *      <>
 *        <h1>Title</h1>
 *        <p>Subtitle</p>
 *      </>
 *    );
 *    ```
 *  
 *  4. **JSX allows JavaScript expressions, not statements**: You can only use JavaScript expressions inside JSX, such as variables, functions, or ternary operators. Regular `if` statements or loops can't be used directly inside JSX.
 *    ```js
 *    const element = <h1>{condition ? 'True' : 'False'}</h1>;
 *    ```
 *  
 *  5. **Attributes with JSX are camelCased**: In JSX, HTML attributes like `class` and `for` are written as `className` and `htmlFor`, respectively. This is because JSX is JavaScript, and JavaScript uses camelCase for object properties.
 *  
 *  6. **JSX compiles to JavaScript objects**: When JSX is transpiled, it creates an object representing the element. This object includes the `type` (element type), `props` (attributes), and `children` (nested elements).
 *  
 *  7. **JSX automatically escapes**: Any JavaScript code within JSX is automatically escaped, meaning that strings like `<script>alert('XSS')</script>` are treated as plain text, preventing XSS vulnerabilities.
 *  
 *  8. **JSX supports dynamic children**: You can pass arrays or other iterables into JSX, and they will be rendered as children. This is often used for rendering lists of items.
 *    ```js
 *    const items = ['Item 1', 'Item 2'];
 *    return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>;
 *    ```
 *  
 *  9. **JSX does not map directly to the DOM**: JSX is transformed into React elements that exist in a virtual DOM. React then efficiently reconciles the virtual DOM with the real DOM, minimizing updates.
 *  
 *  10. **JSX allows functions and inline event handlers**: You can define functions inside JSX and pass them as event handlers or dynamic attributes. This enables fine control over how elements respond to user interactions.
 *    ```js
 *    <button onClick={() => console.log('Clicked!')}>Click me</button>;
 *    ```
 *  
 *  11. **JSX can use self-closing tags**: If an element has no children, you can use a self-closing tag in JSX, similar to XML:
 *    ```js
 *    const image = <img src="image.jpg" alt="Description" />;
 *    ```
 *  
 *  12. **JSX supports spread attributes**: You can use the JavaScript spread operator (`...`) to pass all the properties of an object as props to an element in JSX:
 *    ```js
 *    const props = { className: 'my-class', id: 'element' };
 *    const element = <div {...props} />;
 *    ```
 *  
 *  13. **JSX evaluates before rendering**: JSX expressions are evaluated **before** the element is rendered to the DOM, allowing you to dynamically determine attributes or content before the element is created.
 *  
 *  14. **JSX can pass functions as props**: Since JSX is JavaScript, you can pass functions as props, enabling advanced patterns like higher-order components or render props:
 *    ```js
 *    const MyComponent = ({ render }) => <div>{render()}</div>;
 *    const result = <MyComponent render={() => <h1>Hello</h1>} />;
 *    ```
 *  
 *  15. **JSX is not required in React**: You don't need JSX to use React. You can write your entire React application using `React.createElement()` directly, but JSX is much more developer-friendly and easier to read.
 */





/**
 *    WHAT IS BABEL?
 *  
 *    - Babel is a **JavaScript compiler** that enables developers 
 *      to use modern JavaScript features (ES6+) and JSX syntax.
 *    - It transforms code into a backward-compatible version for older 
 *      browsers that lack support for new features.
 *    - Babel uses a plugin-based architecture for flexibility in 
 *      handling various syntax features and transformations.
 *    - It acts as a bridge, allowing the use of cutting-edge JavaScript 
 *      while ensuring compatibility across different environments.
 *  
 *    WHY DO WE NEED BABEL?
 *  
 *    - Babel lets developers write code with the latest standards 
 *      without worrying about browser compatibility.
 *    - It provides backward compatibility by transpiling new syntax 
 *      into older equivalents.
 *    - Babel simplifies the development process by enabling the use 
 *      of modern JavaScript functionalities.
 *    - It also transforms JSX syntax into JavaScript for React, 
 *      making components more readable.
 *    - Overall, Babel enhances developer experience and future-proofs 
 *      the codebase.
 *  
 *   SUPPOSE I WANTED TO RUN MY APP ON CHROME BROWSER 
 *   THAT SUPPORTS ALL ES6 FEATURES, SHOULD I STILL USE BABEL?
 *  
 *    - Even if targeting Chrome, Babel is still useful for several 
 *      reasons:
 *    - **Future-Proofing**: Babel allows usage of future JavaScript 
 *      proposals (ESNext) without breaking compatibility.
 *    - **Consistency**: It ensures uniform behavior across all 
 *      environments, even with different browser versions.
 *    - **Tooling**: Babel integrates well with various tools, 
 *      streamlining development workflows.
 *    - **Code Quality**: Babel helps identify issues during 
 *      transpilation, ensuring better code quality.
 *  
 *   HOW DOES BABEL HELP IN CASE OF JSX?
 *  
 *    - JSX needs to be transformed into valid JavaScript; Babel does 
 *      this through presets (e.g., `@babel/preset-react`).
 *    - It converts JSX elements into `React.createElement()` calls, 
 *      making components easier to write and read.
 *    - This transformation allows developers to use a more intuitive, 
 *      HTML-like syntax without manual conversion.
 *  
 *   THINGS THAT BABEL IS BEST AT?
 *  
 *    - **Transpiling Modern Syntax**: Babel excels in converting ES6+ 
 *      syntax to backward-compatible code.
 *    - **Transforming JSX**: It efficiently transforms JSX into valid 
 *      JavaScript function calls.
 *    - **Plugin Ecosystem**: Babel's extensible plugin system allows 
 *      for tailored transformations.
 *    - **Polyfilling Features**: It can include necessary polyfills 
 *      for newer methods in older environments.
 *    - **Integration with Build Tools**: Works seamlessly with 
 *      popular tools like Webpack and Parcel.
 *  
 *   THINGS THAT BABEL DON'T DO WELL?
 *  
 *    - **Runtime Performance**: Transformed output can be larger, 
 *      potentially affecting performance.
 *    - **Complexity in Configuration**: Babel's setup can become 
 *      complex in larger projects with many plugins.
 *    - **No Type Checking**: Babel does not provide type-checking 
 *      like TypeScript.
 *    - **Potential for Over-Transformation**: Misconfigurations can 
 *      lead to unnecessary complexity or bugs.
 *  
 *   IS IT NECESSARY TO HAVE BABEL IN A REACT PROJECT?
 *  
 *    - Babel is highly recommended for React projects to simplify 
 *      JSX and modern JavaScript usage.
 *    - Without Babel, developers would write more verbose code using 
 *      `React.createElement()`, leading to less readable components.
 *    - Babel enhances development by allowing the use of modern 
 *      syntax and improving cross-browser compatibility.
 *  
 *   HOW JSX AND BABEL ARE CONNECTED?
 *  
 *    - JSX relies on Babel for transformation into valid JavaScript; 
 *      without Babel, browsers cannot interpret JSX.
 *    - Babel compiles JSX into function calls that React uses, 
 *      allowing intuitive component writing.
 *  
 *   15 THINGS THAT 99.99% DEVELOPERS DON'T KNOW ABOUT BABEL:
 *  
 *    1. **Custom Plugins**: Developers can create custom Babel 
 *       plugins for specific transformations.
 *    2. **Polyfills Management**: Babel can manage polyfills 
 *       based on code usage to avoid bloat.
 *    3. **Babel Presets**: Presets like `@babel/preset-env` save 
 *       time by bundling multiple plugins.
 *    4. **Babel Standalone**: Babel can run in the browser for quick 
 *       prototyping without builds.
 *    5. **Source Maps**: Babel generates source maps for easier 
 *       debugging of original code.
 *    6. **React Refresh**: Integrates with React Refresh for fast 
 *       development without losing state.
 *    7. **Runtime Performance**: Babel transforms code at compile 
 *       time, avoiding runtime overhead.
 *    8. **Tree Shaking Compatibility**: Works well with tree-shaking 
 *       tools to eliminate unused code.
 *    9. **Integration with Testing Tools**: Works seamlessly with 
 *       testing frameworks like Jest.
 *    10. **Using with TypeScript**: Can be used alongside TypeScript 
 *        for types while leveraging Babel's ecosystem.
 *    11. **Babel Configurations**: Config can be managed via 
 *        `.babelrc` or `package.json`.
 *    12. **Contextual Transformations**: Can transform code 
 *        differently based on the environment.
 *    13. **Babel Macros**: Allows compile-time transformations using 
 *        macros.
 *    14. **Support for Stage 0-4 Features**: Can support experimental 
 *        features at various stages.
 *    15. **Code Modifications**: Babel can automate code 
 *        modifications across large codebases.
 */

/**
 *  const component = lazy(() => import('path'));
 * 
 *  <suspance fallback> <LoadLater> </suspnace>
 * 
 *  chunking
 *  on demand loading
 *  Code spliting
 *  coding problem with talwind css
 *  
 */


/**
 *  React compiler is release we can use it with next js connery and start using it
 * 
 *  now we can remove all the useMemo and useCallback from our code base 
 * 
 *  Also there is possibility that react compiler can do things that we don't need 
 * 
 *  For that we need to for that we can add 
 * 
 *  comiletionMode : "annotation" // ADD THIS IN CONFIG
 * 
 *  NOW WHERE YOU THING YOU NEED COMPILER JUST USE THIS TWO ANNOTATION
 *  
 *  "use memo" // IF YOUR COMPONENT NEEDED TO USE MEMO THIS WILL GIVE IDEA TO COMPILER
 * 
 *  "use callBack" // SAME AS ABOVE JUST FOR useCallBack
 */


/**
 *  Suppose you have one compoenent A and Component A has child component B now IN component A
 *  you have one text <div> haresh </div> and in compent B you have button now task was click
 *  when we are pressing button from compenent B text from A should be changed AND THAT IS EASY
 *  BUT WEIRD IS THAT ON PRESS OF B A WAS GETTING CALLED AGAIN WE DON'T DON'T NEED THAT FOR THAT
 *   
 *      >>> FOR ABOVE QUESTION IF I WOULD HAVE CLEAR UNDERSTANDING OF useCallBack then i would not
 *          have faced any issue ONLY WE HAVE TO DO IS PASS WRAP THAT FUNCTION WITH useCallback
 */

/**
 *  Understadning hoisting and all this one think solving problems related those is totally LIT focus more on that
 */

/**
 *  FROM DAY ONE I KNOW THAT JS IS SYCRONUS SINGLE THREADED LAGUAGE AND STILL
 * 
 *    asyc function a(){
 *     console.log("hello");
 *    }
 *    a()
 *    console.log("world");
 * 
 *  i said output will be hello world ARE you out of your mind do you think js will wailt for asyc function AGAIN do more practies in that code snippet 
 */


/**
 *  one weird mistake done in case of closure also even it was simple one see closures stays there for same function but if you create
 *  different reference for that the its like totally new memory new fucntion creation. DO MORE PRECTIES 
 */

/**
 *  Last but not least understand proper useMemo and useCallback renderding
 */