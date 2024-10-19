                                                     /** Accessibility */

  
/**
 *  **1. What is Web Accessibility and Why Do We Need It?**
 *  - Web accessibility ensures that websites, tools, and technologies are designed and developed so that people with disabilities can use them.
 *  - This includes users with visual, auditory, physical, speech, cognitive, and neurological disabilities.
 *  - Accessibility goes beyond disabilities; it benefits everyone by making content easier to use, improving overall user experience.
 *  - It's a legal requirement in many countries, such as the ADA in the U.S. and the European Accessibility Act in Europe.
 *  - Accessible websites are inclusive and provide equal opportunities to all users, increasing your website's reach.
 *  - Accessibility can also improve SEO, site usability, and even performance.
 *  - It also enhances your brand image by showing that you care about every user and their experience, which can lead to better engagement.
 *
 *  **2. What is WCAG 2?**
 *  - WCAG 2.0 (Web Content Accessibility Guidelines) is a set of standards developed by the W3C (World Wide Web Consortium) for ensuring web accessibility.
 *  - The guidelines are organized around four principles: Perceivable, Operable, Understandable, and Robust (often referred to as the POUR model).
 *  - Perceivable: Users must be able to perceive all information and content, such as images having alt text for screen readers.
 *  - Operable: The interface must be operable by all users, for instance, making sure everything can be navigated via keyboard alone.
 *  - Understandable: The content and interface should be easy to understand for all users, including clear instructions and error recovery.
 *  - Robust: The content must be compatible with assistive technologies and future updates in web standards.
 *  - WCAG 2.0 is technology-independent, meaning it applies to HTML, CSS, and JavaScript, among other technologies.
 *  - There are 12 guidelines in total, and they have different levels of conformance (A, AA, AAA), which represent increasing levels of accessibility.
 *
 *  **3. What are Assistive Technologies and What Types Exist?**
 *  - Assistive technologies are devices, software, or equipment that help individuals with disabilities navigate and interact with digital content.
 *  - Common assistive technologies include screen readers, braille displays, screen magnifiers, and voice recognition software.
 *  - Screen readers, such as JAWS, NVDA, and VoiceOver, convert text to speech or braille, helping visually impaired users navigate a website.
 *  - Screen magnifiers, such as ZoomText, enlarge portions of the screen for users with low vision.
 *  - Speech recognition software, like Dragon NaturallySpeaking, helps users control their computer with their voice instead of a keyboard or mouse.
 *  - Some users rely on eye-tracking systems or adaptive keyboards, especially those with mobility issues.
 *  - Web developers must ensure compatibility with these technologies by using proper semantic HTML, labeling elements, and providing keyboard-friendly navigation.
 *
 *  **4. What Are the Different Levels of Conformance (A, AA, AAA) in WCAG 2?**
 *  - WCAG defines three levels of conformance to accommodate varying levels of accessibility: A, AA, and AAA.
 *  - **Level A (Minimum Level):** The lowest level of accessibility, covering basic needs. If not met, the site is largely unusable for people with disabilities.
 *    - Examples: Provide text alternatives for non-text content, ensure keyboard navigation, and avoid using content that causes seizures.
 *  - **Level AA (Mid Level):** This is often the legal requirement in many countries. It ensures a broader and more user-friendly experience for people with disabilities.
 *    - Examples: Ensure contrast ratios are sufficient, make text resizable, and offer navigation aids like skip links.
 *  - **Level AAA (Highest Level):** The most inclusive standard, which makes content accessible to the broadest range of disabilities. It is ideal but often harder to achieve.
 *    - Examples: No time limits for reading content, ensuring a reading level suitable for the general public, and providing sign language interpretation for audio content.
 *  - The goal is to progressively move from Level A compliance to AA, and for more inclusive designs, AAA.
 *
 *  **5. What is WebAIM?**
 *  - WebAIM (Web Accessibility In Mind) is a non-profit organization that focuses on empowering individuals and organizations to make web content accessible.
 *  - They provide educational resources, tools, and consulting services to help web developers and businesses achieve better accessibility.
 *  - WebAIM also produces tools like the WebAIM Contrast Checker and WAVE (Web Accessibility Evaluation Tool), which help developers identify accessibility issues in their web pages.
 *  - They conduct research into accessibility practices and guidelines, offering reports on the current state of web accessibility.
 *  - Their resources help explain how to meet WCAG standards and make websites more inclusive for people with disabilities.
 *  - WebAIM is known for offering comprehensive guidelines and step-by-step solutions for fixing accessibility problems.
 *
 *  **6. Different Accessibility Standards?**
 *  - Apart from WCAG, there are several accessibility standards globally, with similar goals of ensuring digital content is accessible to everyone.
 *  - **Section 508 (U.S.):** This is part of the Rehabilitation Act in the United States that mandates that all federal websites and electronic communications be accessible to individuals with disabilities.
 *  - **ADA (Americans with Disabilities Act):** Though initially for physical spaces, it has been extended to include websites, ensuring equal access to goods and services.
 *  - **EN 301 549 (Europe):** This is the accessibility standard in the EU, which references WCAG 2.1, and requires that public sector websites and mobile apps be accessible.
 *  - **AODA (Accessibility for Ontarians with Disabilities Act):** A Canadian law that mandates digital accessibility for public and private organizations within Ontario.
 *  - **ISO 9241-171:** A global standard focused on the ergonomics of human-system interaction, it emphasizes accessibility for interactive systems.
 *  - These standards often build upon WCAG guidelines, but they include additional legal and regional requirements.
 */




                                /** SCREEN READER */

                              
/**
 *  **1. What is a Screen Reader? How Does It Help in Accessibility?**
 *  - A screen reader is an assistive technology that reads the content on a screen aloud or outputs it to a braille device, enabling users with visual impairments or blindness to navigate websites and interact with digital content.
 *  - It works by parsing the HTML of a webpage and conveying its structure to the user, allowing them to understand headings, links, images, forms, and dynamic elements.
 *  - Screen readers rely heavily on the semantics of the HTML document to convey meaning, so poorly structured or improperly labeled content can be confusing.
 *  - The role of the screen reader is essential in providing access to the digital world for people who otherwise wouldn't be able to use websites effectively.
 *  - Popular screen readers include **JAWS** (Job Access With Speech) for Windows, **NVDA** (Non-Visual Desktop Access), **VoiceOver** for macOS/iOS, and **TalkBack** for Android.
 *  - For accessibility, developers must ensure their websites are built in a way that these tools can interpret them easily, which involves using proper HTML elements, ARIA attributes, and ensuring interactive content is accessible through the keyboard.
 *  - By ensuring screen reader compatibility, developers can expand their audience and comply with legal regulations such as the **Web Content Accessibility Guidelines (WCAG)** and the **Americans with Disabilities Act (ADA)**.

 *  **2. Is It the Developer's Job to Make Sure Screen Readers Understand Their Web Page?**
 *  - Yes, it is absolutely the developer's responsibility to ensure their website is accessible, including making sure it works properly with screen readers.
 *  - To do this, developers need to write semantic HTML, meaning they must use the correct HTML elements to describe the content. For instance, using `<button>` for clickable buttons rather than `<div>` elements with JavaScript handlers.
 *  - Developers should also use **ARIA (Accessible Rich Internet Applications)** roles and attributes when necessary, to give additional context to screen readers about complex UI elements such as sliders, tabs, or modals.
 *  - One of the most important aspects of screen reader compatibility is making sure the website is **keyboard accessible**, meaning all interactive elements can be navigated using just the keyboard. This is critical because many screen reader users rely on keyboard navigation.
 *  - Failing to make a site accessible can exclude a significant number of users and can also have legal repercussions. Additionally, search engines like Google also favor accessible websites, making this important from an SEO standpoint as well.

 *  **3. Best JS Example That Has 0% Accessibility vs One With 100% Accessibility**
 *  
 *  // Example with 0% Accessibility
 *  ```
 *  <div onclick="submitForm()">Submit</div>  // The div is not semantically correct for a button
 *  <input type="text" placeholder="Your Email">  // No label for the input field
 *  ```
 *  - In this example, using a `<div>` for the submit button is not accessible because screen readers don’t recognize it as a button, and users who navigate via keyboard cannot interact with it properly. The input field also lacks a label, so screen readers will have difficulty identifying its purpose.

 *  // Example with 100% Accessibility
 *  ```
 *  <button type="submit">Submit</button>  // A semantically correct button element
 *  <label for="email">Email</label>
 *  <input type="email" id="email">
 *  ```
 *  - In this improved example, the button is correctly defined with a `<button>` tag, which screen readers will identify as interactive, and the input field has a descriptive label, helping users understand its purpose. 

 *  **4. Why Do We Say HTML5 Semantics Help in Accessibility by Default?**
 *  - HTML5 introduced several semantic elements like `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>`, which provide inherent meaning to the content they enclose.
 *  - These elements help screen readers by giving them predefined roles and context about the content structure, allowing users to navigate through different sections of a page more effectively.
 *  - For example, a screen reader can announce that the user is inside a `<nav>` element, indicating the user is in the navigation area of the page, or inside a `<main>` tag, indicating this is the core content.
 *  - Additionally, elements like `<section>` or `<article>` are helpful in organizing content hierarchically, which assists users in understanding the logical flow of the webpage.
 *  - Developers don’t need to add extra ARIA roles to these elements as screen readers already understand their meaning. However, if complex custom elements are used, ARIA roles and labels might be necessary to describe their functionality.
 *  - Semantic HTML not only benefits screen reader users but also enhances **SEO** because search engines use these elements to better understand and index page content.

 *  **5. List of All HTML5 Semantics That Help in Accessibility (With Examples)**
 *  - **<header>:** Defines introductory content, usually a group of navigational links or a title. Helps screen readers identify the start of the page or section.
 *    Example: 
 *    ```
 *    <header> <h1>Website Title</h1> <nav>...</nav> </header>
 *    ```
 *  - **<nav>:** Specifies a navigation section with links. It helps screen readers announce this as a navigational region.
 *    Example:
 *    ```
 *    <nav> <a href="/home">Home</a> <a href="/about">About</a> </nav>
 *    ```
 *  - **<main>:** Contains the main content of the webpage, signaling to screen readers where the primary information resides.
 *    Example:
 *    ```
 *    <main> <h1>Main Content</h1> <p>Article Body...</p> </main>
 *    ```
 *  - **<article>:** Represents independent, self-contained content like a blog post or a news article. Screen readers will announce this as distinct content.
 *    Example:
 *    ```
 *    <article> <h2>Blog Post Title</h2> <p>Blog content here...</p> </article>
 *    ```
 *  - **<section>:** Defines a section within a document, often with its own heading. Screen readers treat this as a distinct segment of the page.
 *    Example:
 *    ```
 *    <section> <h2>Introduction</h2> <p>Introduction content...</p> </section>
 *    ```
 *  - **<footer>:** Marks the end or footer area of the page, often containing links to legal information, privacy policies, etc.
 *    Example:
 *    ```
 *    <footer> <p>&copy; 2024 My Website</p> <a href="/privacy">Privacy Policy</a> </footer>
 *    ```
 *  - **<aside>:** Used for content tangentially related to the main content, such as sidebars. It helps differentiate between core and auxiliary content.
 *    Example:
 *    ```
 *    <aside> <h3>Related Links</h3> <ul><li><a href="#">Link 1</a></li></ul> </aside>
 *    ```
 *  - These HTML5 semantic elements help provide a clear structure and hierarchy for both users and assistive technologies like screen readers, improving accessibility and usability for all.
 */


/**
 *   NOW SEE WE KNOW THAT HTML SMNYTICS HELP USE BUT NOT 100% SO THAT WHY WE HAVE ARIA 
 *   I WANTED TO UNDERSTAND EVERYTHING ABOUT ARIA TRY 8 DIFFERENT IN DEPTH QUESTION
 */

/**
 *   **1. What is ARIA (Accessible Rich Internet Applications)? Why Do We Need It?**
 *   - ARIA stands for **Accessible Rich Internet Applications**, a set of attributes that developers can add to HTML elements to enhance accessibility for users relying on assistive technologies, like screen readers.
 *   - HTML5 semantics help a lot in accessibility by defining the structure of a page, but ARIA goes further by giving additional meaning to dynamic, interactive elements (e.g., sliders, modals, accordions) that native HTML elements cannot describe fully.
 *   - For example, if you're creating a custom dropdown menu or a tab system using `<div>` or `<span>`, ARIA attributes can specify the role, state, and behavior of those elements for screen readers, ensuring accessibility.
 *   - ARIA helps bridge the gap between modern, complex web interfaces and assistive technologies, making rich content accessible to users with disabilities.
 *   - We need ARIA in scenarios where native HTML elements can't fully communicate a UI element's role or state to screen readers, especially for custom components.
 *   
 *   **2. How to Use ARIA? (Common ARIA Roles and Attributes)**
 *   - ARIA provides three primary categories of attributes: **roles**, **states**, and **properties**.
 *   - **Roles:** Define what kind of UI element a particular HTML element is. For example:
 *     ```
 *     <div role="button">Click me</div>  // Defining a div as a button
 *     ```
 *   - **States:** Indicate the current state of an interactive element. For example, a toggle switch can have an `aria-checked` state:
 *     ```
 *     <button aria-checked="true">Toggle</button>
 *     ```
 *   - **Properties:** Provide additional information about elements. For instance, `aria-label` provides an accessible name to screen readers:
 *     ```
 *     <button aria-label="Submit the form">Submit</button>
 *     ```
 *   - These attributes are crucial when native HTML elements don't suffice for describing custom UI components and interactions to assistive technologies.

 *   **3. When Should You Use ARIA?**
 *   - ARIA should be used sparingly, primarily for non-semantic, custom elements that lack native accessibility support.
 *   - A good rule of thumb is to always prefer native HTML elements (like `<button>`, `<input>`, `<select>`, etc.) over divs or spans with ARIA roles and attributes because native elements already come with built-in accessibility.
 *   - You should use ARIA when you're building custom widgets (like tabs, accordions, and sliders) or non-standard interactions that need to communicate their role, state, or behavior to screen readers.
 *   - For example, if you create a custom dropdown with `<div>`, you would use ARIA to indicate which element is expanded or collapsed with `aria-expanded`, and which is currently selected with `aria-selected`.
 *   - Use ARIA when native elements can't fully express the functionality or interaction model you want to implement.

 *   **4. When Should You NOT Use ARIA?**
 *   - Avoid using ARIA when semantic HTML already provides sufficient accessibility. For example:
 *     - Don't use `role="button"` on an element that is already a `<button>`.
 *     - Avoid adding ARIA attributes to elements that have clear native roles, like forms, links, or lists.
 *   - Overusing ARIA can lead to accessibility issues if misapplied, and it can confuse users of assistive technologies.
 *   - Another critical point: ARIA does not make elements **focusable** by default. You still need to ensure keyboard accessibility (e.g., adding `tabindex` or native controls).
 *   - ARIA should never be a replacement for proper HTML, CSS, or JavaScript; it's an enhancement for accessibility but cannot fix bad code.

 *   **5. What Are Some Key ARIA Properties and Roles Used Day-to-Day?**
 *   - **role="alert"**: This role is used for dynamic content updates that need to be announced by screen readers immediately.
 *     Example:
 *     ```
 *     <div role="alert">Error: Please fill out this field.</div>
 *     ```
 *   - **aria-hidden="true"**: Hides an element from screen readers without affecting visual display. Commonly used for hiding decorative icons or elements that shouldn’t be announced.
 *     Example:
 *     ```
 *     <i class="icon" aria-hidden="true"></i>
 *     ```
 *   - **aria-live**: Announces dynamic changes on a webpage, such as form validation messages or content loaded via AJAX.
 *     Example:
 *     ```
 *     <div aria-live="polite">New message received.</div>
 *     ```
 *   - **aria-expanded**: Indicates the expanded or collapsed state of a collapsible section, accordion, or dropdown.
 *     Example:
 *     ```
 *     <button aria-expanded="false">Toggle Content</button>
 *     ```
 *   - **aria-controls**: Identifies another element that is controlled by the current one. For example, a tab controlling the content panel.
 *     Example:
 *     ```
 *     <button aria-controls="panel1">Open Panel</button>
 *     <div id="panel1" role="region">Panel content here...</div>
 *     ```
 *   - **aria-label**: Provides an accessible name or label to an element when the text is not visible.
 *     Example:
 *     ```
 *     <button aria-label="Close the dialog">X</button>
 *     ```

 *   **6. What Are ARIA Live Regions and Why Are They Important?**
 *   - **ARIA live regions** are sections of the page that are automatically announced by screen readers when their content changes. They are especially important for notifying users about dynamic content like chat messages, form validation, or real-time updates without requiring the user to manually navigate.
 *   - The `aria-live` property can be set to "polite," "assertive," or "off" depending on how urgently the information needs to be conveyed to the user.
 *   - Example of a live region with "polite" announcement:
 *     ```
 *     <div aria-live="polite">Your cart has been updated.</div>
 *     ```
 *   - Live regions ensure that users with disabilities are informed of important changes on the page without losing context or needing to interact manually with the interface.

 *   **7. What Are Some ARIA Attributes That 99% of Developers Don't Know About?**
 *   - **aria-flowto**: Allows users to navigate to a different part of the document using screen readers in a sequential manner, helping them follow content that is not linear.
 *     Example:
 *     ```
 *     <div id="step1" aria-flowto="step3">Step 1</div>
 *     <div id="step2">Step 2</div>
 *     <div id="step3">Step 3</div>
 *     ```
 *   - **aria-roledescription**: Allows developers to provide a custom role description for an element, which screen readers will announce instead of the default role.
 *     Example:
 *     ```
 *     <div role="button" aria-roledescription="Submit Form">Submit</div>
 *     ```
 *   - **aria-current**: Used to indicate the current item in a list of items, such as the current page in a navigation menu.
 *     Example:
 *     ```
 *     <li aria-current="page">Home</li>
 *     ```
 *   - **aria-modal**: Helps assistive technology understand that the content inside a dialog or modal is separate and should be treated as such.
 *     Example:
 *     ```
 *     <div role="dialog" aria-modal="true">Modal Content</div>
 *     ```

 *   **8. How to Avoid Common Mistakes While Using ARIA?**
 *   - One common mistake is using ARIA roles or attributes on elements where they aren't needed, such as adding `role="button"` to a `<button>` element or using `aria-label` on an already labeled form element.
 *   - Another mistake is not ensuring proper keyboard navigation. For instance, just adding ARIA attributes without `tabindex` won’t make a custom control focusable.
 *   - Failing to test the site with a screen reader to verify that ARIA attributes are working as intended is another significant mistake.
 *   - Over-reliance on ARIA without addressing fundamental HTML and CSS accessibility issues can make a site less accessible in practice.
 *   - Ensure ARIA properties are dynamic where necessary, especially states like `aria-expanded`, `aria-selected`, and `aria-checked`—these should change in response to user interaction.
 */



// FEW MORE THINK ABOUT ARIA

/**
 *   **1. What is ARIA-Live?**
 *   - **ARIA-Live** is an attribute used to announce dynamic updates to users of assistive technologies (like screen readers) without them having to manually navigate to the changed content.
 *   - It is critical for making changes in content accessible, particularly in web apps where updates happen without a full page reload (e.g., chats, notifications, form validation).
 *   - ARIA-live can have three values:
 *     - **"off"**: No live updates are announced.
 *     - **"polite"**: Changes are announced when the user is idle or finishes their current task.
 *     - **"assertive"**: The update is announced immediately, interrupting the current task the user is engaged in.
 *   - Example:
 *     ```
 *     <div aria-live="polite">Your message was sent successfully.</div>
 *     ```
 *   - Use ARIA-live for situations where you have dynamically updated content that users need to be aware of, such as a notification after submitting a form.

 *   **2. What Are ARIA Roles?**
 *   - ARIA roles define the purpose of an element, communicating its functionality to assistive technologies.
 *   - For example, if you're using a `<div>` or `<span>` to create a custom button, you can define its role using ARIA to inform screen readers that this element behaves like a button:
 *     ```
 *     <div role="button" tabindex="0">Click me</div>
 *     ```
 *   - Types of ARIA roles include:
 *     - **Widget roles**: Interactive elements (e.g., `button`, `slider`, `checkbox`).
 *     - **Document structure roles**: Define how different parts of a document are structured (e.g., `main`, `article`, `navigation`).
 *     - **Landmark roles**: Define high-level regions of the page (e.g., `banner`, `navigation`, `contentinfo`).
 *   - Use roles when creating non-standard UI elements that don't have a default semantic meaning (e.g., custom sliders, tabs, modals).

 *   **3. What Are ARIA States?**
 *   - ARIA states describe the **current condition** of an interactive element, especially when its state is dynamic and changes based on user interaction.
 *   - States include:
 *     - **aria-checked**: Used with elements like checkboxes to describe whether they are checked or not.
 *       ```
 *       <input type="checkbox" aria-checked="true"> Accept Terms
 *       ```
 *     - **aria-expanded**: Describes whether a collapsible section or dropdown is open.
 *       ```
 *       <button aria-expanded="false">Expand Content</button>
 *       ```
 *     - **aria-disabled**: Indicates that an element is disabled and cannot be interacted with.
 *       ```
 *       <button aria-disabled="true">Submit</button>
 *       ```
 *   - Use ARIA states when you need to describe the dynamic behavior of an element in real-time, ensuring that assistive technologies are aware of state changes.

 *   **4. What Are ARIA Properties?**
 *   - ARIA properties provide additional details about an element that assistive technologies can interpret.
 *   - These properties describe relationships or provide supplementary information. Examples include:
 *     - **aria-label**: Provides an accessible name for an element, useful for icons or elements without visible text.
 *       ```
 *       <button aria-label="Save Document">Save</button>
 *       ```
 *     - **aria-labelledby**: Links the current element to another element that provides a label.
 *       ```
 *       <button aria-labelledby="heading1">Submit</button>
 *       <h1 id="heading1">Submit Form</h1>
 *       ```
 *     - **aria-describedby**: Provides a reference to additional explanatory content.
 *       ```
 *       <button aria-describedby="info">Help</button>
 *       <p id="info">Clicking this will open a help dialog.</p>
 *       ```
 *   - Use ARIA properties to give elements additional accessibility context that isn't present in the standard HTML structure, especially for complex or custom components.

 *   **5. What Is ARIA Type?**
 *   - **ARIA Types** refer to the classification of ARIA attributes based on the kind of value they can take.
 *   - ARIA attributes can be:
 *     - **Boolean** (e.g., `aria-checked`, `aria-expanded`, `aria-hidden`), which is either `true` or `false`.
 *     - **Tristate** (e.g., `aria-checked`), which can have `true`, `false`, or `mixed` values for partially checked states.
 *     - **Token** (e.g., `aria-live`), which can take a list of predefined values (e.g., `"polite"`, `"assertive"`, `"off"`).
 *     - **String** (e.g., `aria-label`), which allows a custom text string.
 *   - When defining ARIA attributes, it’s important to follow the expected type to ensure that assistive technologies can correctly interpret the attribute.

 *   **6. When Should You Use ARIA Roles, States, and Properties?**
 *   - Use **roles** when an element needs to communicate its function but lacks a semantic HTML counterpart (e.g., custom buttons, sliders).
 *   - Use **states** when an element’s behavior or appearance can change dynamically (e.g., toggling a collapsible menu, enabling/disabling form elements).
 *   - Use **properties** when additional context or relationships between elements need to be clarified (e.g., linking labels to form controls, describing additional help text for a button).
 *   - For example, a custom dropdown built with `<div>` elements would use `role="combobox"`, `aria-expanded`, `aria-controls`, and possibly `aria-labelledby` to fully convey its function and state to assistive technologies.

 *   **7. When Should You NOT Use ARIA?**
 *   - Avoid ARIA when semantic HTML elements (e.g., `<button>`, `<form>`, `<input>`) provide built-in accessibility.
 *   - Don’t use ARIA as a substitute for missing HTML functionality. For example, adding `role="button"` to a div is less effective than just using a `<button>`.
 *   - Overusing ARIA attributes can clutter the accessibility tree and confuse users of assistive technologies.
 *   - Always prefer native HTML elements over custom widgets with ARIA when possible because native elements have built-in accessibility behaviors that ARIA attempts to replicate.

 *   **8. Practical Example Combining ARIA Roles, States, and Properties**
 *   - Here’s an example of a custom accordion using ARIA roles, states, and properties:
 *     ```
 *     <div role="button" aria-expanded="false" aria-controls="section1" tabindex="0">
 *       Toggle Section 1
 *     </div>
 *     <div id="section1" role="region" aria-hidden="true">
 *       <p>Accordion content here...</p>
 *     </div>
 *     ```
 *   - In this example:
 *     - The `div` has the role of `button` to indicate that it behaves like a button.
 *     - `aria-expanded` tells the screen reader whether the accordion is open or closed.
 *     - `aria-controls` links the button to the content it controls.
 *     - The content section has `aria-hidden="true"` to ensure it's hidden from screen readers when collapsed.
 *   - By using ARIA attributes appropriately, we ensure that both keyboard users and screen reader users have full access to the functionality.
 */


                                              /** ACCESIBLITY TREE */


  /**
 *   **What is the Accessibility Tree? (In-Depth Explanation)**
 *   
 *   - The **Accessibility Tree** is an abstraction layer between the DOM (Document Object Model) and assistive technologies (like screen readers). 
 *   - It is automatically generated by the browser and is a subset of the DOM, containing only the elements that are relevant for assistive technologies. 
 *   - The accessibility tree represents how the content will be presented to users with disabilities, ensuring that they can interact with the page.
 *   - This tree is structured similarly to the DOM but filtered to show only the essential content such as text, roles, states, and properties.

 *   **How is the Accessibility Tree Generated?**
 *   - The browser analyzes the web page’s DOM and automatically generates the accessibility tree by interpreting the HTML, CSS, and ARIA attributes.
 *   - Native HTML elements like `<button>`, `<input>`, `<form>` automatically contribute to the tree because of their semantic roles.
 *   - The accessibility tree is influenced by:
 *     - **HTML semantics**: Tags like `<h1>`, `<nav>`, `<article>` are automatically added to the tree as they have clear roles.
 *     - **ARIA roles, states, and properties**: These provide extra information or override default behaviors for custom elements.
 *     - **CSS display and visibility**: Elements with `display: none` or `visibility: hidden` are excluded from the tree.
 *     - **tabindex**: Elements with a `tabindex` attribute can become keyboard-navigable and affect the focus order.

 *   **How is the Accessibility Tree Used by Assistive Technologies?**
 *   - Screen readers and other assistive technologies use the accessibility tree to determine what should be announced or focused on.
 *   - The tree abstracts irrelevant elements like decorative images or layout-based `<div>` containers that don’t carry useful information for users.
 *   - For example, screen readers rely on the tree to announce form labels, button actions, and headings in a structured and accessible manner.
 *   - The tree also provides context, such as hierarchical relationships between elements (e.g., which buttons are within which sections).

 *   **Components of the Accessibility Tree**
 *   - **Node Role**: Each node in the tree has a role (e.g., button, checkbox, slider). This is derived from the HTML element or set explicitly with ARIA roles.
 *     - Example: A `<button>` element’s role is automatically interpreted as a "button."
 *   - **Node Name**: The accessible name of the element, which is either inferred from text content or set using attributes like `aria-label` or `aria-labelledby`.
 *     - Example: A button with the text “Submit” would have "Submit" as its accessible name.
 *   - **Node Value**: The current value of a form element or control, such as the checked state of a checkbox (`true`, `false`, or `mixed`).
 *   - **Node States and Properties**: These represent the current state (e.g., `aria-expanded`, `aria-checked`, `aria-disabled`) and properties (e.g., `aria-label`, `aria-describedby`).
 *   - **Hierarchy and Relationships**: The accessibility tree maintains the hierarchical relationship between elements (parent-child relationships) and other linked elements using ARIA properties like `aria-controls` or `aria-labelledby`.

 *   **Differences Between the DOM and Accessibility Tree**
 *   - Not every DOM element appears in the accessibility tree. Elements like `<div>` and `<span>` without ARIA roles are typically ignored unless they contain meaningful content or are interactive.
 *   - **Hidden elements**: DOM elements that are hidden with `display: none` or `visibility: hidden` are not included in the accessibility tree.
 *   - **ARIA overrides**: Elements can have their default roles or properties overridden using ARIA attributes (e.g., using `role="button"` on a `<div>`). These overrides are respected in the accessibility tree.

 *   **Common Issues with Accessibility Trees**
 *   - **Incorrect or missing roles**: If elements lack appropriate roles (e.g., custom buttons without `role="button"`), they may be excluded or misrepresented in the tree, leading to poor accessibility.
 *   - **Misuse of ARIA**: Overuse or incorrect use of ARIA attributes can clutter the tree, making it harder for assistive technologies to interpret the content.
 *   - **Focus issues**: If the focus order is not managed correctly (e.g., using `tabindex` improperly), the accessibility tree may present a confusing navigation experience for keyboard and screen reader users.
 *   - **Hidden content confusion**: Developers sometimes hide important content visually using CSS, but don’t remove it from the accessibility tree, leading to unnecessary announcements by screen readers.

 *   **How to Inspect the Accessibility Tree**
 *   - Modern browser developer tools (e.g., Chrome, Firefox) allow you to inspect the accessibility tree directly.
 *     - **In Chrome**: You can open the developer tools, navigate to the “Elements” tab, and find the “Accessibility” pane for any selected element to see how it appears in the accessibility tree.
 *     - **In Firefox**: Open developer tools, select the “Accessibility” tab, and explore the accessibility tree structure.
 *   - Using these tools, developers can verify how assistive technologies will interpret and interact with their page, ensuring that important elements are correctly represented in the tree.
 *   - This can help you catch potential accessibility issues early in the development process.

 *   **Example: Accessible vs Inaccessible Element**
 *     ```
 *     <!-- Inaccessible button using <div> without ARIA -->
 *     <div>Submit</div>

 *     <!-- Accessible button using <button> -->
 *     <button>Submit</button>

 *     <!-- Accessible custom button using ARIA -->
 *     <div role="button" tabindex="0">Submit</div>
 *     ```
 *   - In the first case, the `<div>` will not appear in the accessibility tree unless it is explicitly marked with a role, making it invisible to screen readers.
 *   - The native `<button>` will automatically appear in the tree with a "button" role.
 *   - In the third example, using `role="button"` ensures that the `<div>` is treated as a button by assistive technologies.

 *   **Why Does the Accessibility Tree Matter?**
 *   - The accessibility tree is crucial because it determines how accessible your site is to users who rely on assistive technologies.
 *   - By understanding and working with the accessibility tree, developers can create inclusive experiences that accommodate all users, regardless of their physical or cognitive abilities.
 *   - Without a well-structured tree, users may miss critical functionality, such as form submissions or navigation, making the site unusable for them.
 *   - In summary, paying attention to the accessibility tree ensures that your application is accessible, usable, and compliant with web accessibility standards.
 */

  

                                       /** FOCUS MANAGEMENT */


  /**
 *   **FOCUS MANAGEMENT in Terms of Accessibility (5 In-Depth Questions)**
 * 
 *   1. **What is Focus Management and Why is it Critical for Accessibility?**
 *      - Focus management refers to the practice of controlling which elements on a web page can receive keyboard focus, allowing users to interact with them.
 *      - It is critical because users with disabilities, particularly those who rely on screen readers or keyboard navigation, use focus to interact with websites.
 *      - Without proper focus management, users may struggle to navigate, missing essential interactive elements like buttons, links, or forms, which negatively impacts accessibility.
 *      - Focus management also helps prevent issues such as focus trapping, where users get stuck within an element or modal without being able to navigate out.

 *   2. **How Do Focusable Elements Affect Accessibility?**
 *      - Focusable elements include buttons, links, form inputs, and any element with a `tabindex` attribute. These elements should be arranged logically for smooth keyboard navigation.
 *      - A lack of focusable elements or improper focus order can create confusion for users, making it difficult for them to navigate through the content.
 *      - An example of poor focus management would be skipping important form fields when navigating with the keyboard, or focusing on hidden or disabled elements.
 *      - Developers must ensure that all interactive elements can be accessed and navigated through a keyboard, ensuring inclusivity for users with motor impairments.

 *   3. **What is `tabindex`, and How Should it be Used for Effective Focus Management?**
 *      - The `tabindex` attribute controls the order in which elements receive focus when navigating via the keyboard (typically using the Tab key).
 *      - A `tabindex` of `0` allows the element to be focusable in the natural document order, while a negative value (e.g., `tabindex="-1"`) makes it focusable programmatically but not through keyboard navigation.
 *      - Misuse of `tabindex`, especially large positive values (e.g., `tabindex="1"`), can disrupt the logical focus flow, confusing users and making navigation difficult.
 *      - Proper use of `tabindex` helps users navigate the content in a logical order, ensuring they don’t miss essential elements or encounter unexpected focus shifts.

 *   4. **How Do Modals and Popups Impact Focus Management, and What Should Developers Do to Handle This Correctly?**
 *      - When a modal or popup appears, focus management must ensure that keyboard users can only interact with elements inside the modal, avoiding focus on underlying content (focus trapping).
 *      - When a modal is closed, focus should return to the element that triggered the modal, maintaining the user's place in the focus order.
 *      - Failing to manage focus within modals can result in users navigating to elements outside the modal, breaking the flow and leading to confusion.
 *      - Developers should use techniques like `focus` trapping (e.g., keeping the focus within the modal) and returning focus to the triggering element to ensure smooth interaction.

 *   5. **What is Focus Visible, and Why is It Important for Accessibility?**
 *      - `:focus-visible` is a CSS pseudo-class that applies styles to an element when it has focus and is being interacted with via keyboard or assistive technology.
 *      - Providing a clear and visible focus indicator (often a focus ring or outline) helps users easily identify which element is currently active when navigating with the keyboard.
 *      - Some developers mistakenly remove focus styles for aesthetic reasons, which can severely hinder accessibility for keyboard users.
 *      - A good practice is to maintain a strong focus outline that visually highlights active elements, ensuring users can easily follow their position as they tab through content.
 */
                                     


                            
                                        /** COLOR CONTRAST */

/**
 *   **Color Contrast (In-Depth Understanding)**
 * 
 *   1. **What the Hell is Color Contrast? Why Should We Care About It and Why Does It Matter?**
 *      - Color contrast refers to the difference in luminance or brightness between the foreground (text, elements) and the background.
 *      - It matters because high contrast ensures that text and elements are legible and visible to users, especially those with visual impairments.
 *      - Poor color contrast can make it difficult for users with low vision or color blindness to distinguish content, which affects accessibility and user experience.
 *      - High contrast is especially crucial for accessibility compliance under WCAG (Web Content Accessibility Guidelines) to ensure inclusivity for all users.
 * 
 *   2. **Are There Some Standards That We Can Follow in Terms of Color Contrast?**
 *      - Yes, the WCAG (Web Content Accessibility Guidelines) defines minimum color contrast ratios to ensure text and elements are accessible.
 *      - For regular text, a contrast ratio of at least 4.5:1 is required, while for large text (14pt bold or 18pt regular), a minimum ratio of 3:1 is acceptable.
 *      - There are three levels of accessibility: A, AA, and AAA. For the highest level (AAA), the contrast ratio for normal text is 7:1 and for large text, it's 4.5:1.
 * 
 *   3. **How Can We Check if Our Color Contrast is Good or Not? Is There a Score in Web Browsers We Can See?**
 *      - Several tools can check color contrast, including browser extensions like "Accessibility Insights" or "axe" by Deque.
 *      - The Chrome DevTools has a built-in color contrast checker in the "Lighthouse" or "Accessibility" tab that provides contrast scores.
 *      - You can use online tools such as WebAIM’s Color Contrast Checker or contrast ratio calculators, which allow you to input colors and receive the contrast ratio.
 * 
 *   4. **What is This 400% Zoom? How is it Helpful and How Can We Achieve This?**
 *      - 400% zoom refers to the requirement in WCAG 2.1 that websites must be usable when zoomed up to 400% without losing functionality or readability.
 *      - It helps users with low vision by allowing them to zoom into content and still be able to interact with all elements effectively.
 *      - Developers can achieve this by ensuring their websites are responsive, using relative units like `em` or `rem` for font sizes, and avoiding fixed layouts.
 * 
 *   5. **What is the Best Ratio for Color Contrast?**
 *      - The best ratio for color contrast depends on the type of text. 
 *      - For normal body text, aim for at least 4.5:1 (AA compliance) or 7:1 for AAA compliance.
 *      - For large text (14pt bold or 18pt normal), aim for at least 3:1 (AA compliance) or 4.5:1 (AAA compliance).
 *      - These ratios ensure that content is readable for users with visual impairments or color blindness.
 * 
 *   6. **How Do `em`, `prefers-color-scheme`, and Media Queries Help in Color Contrast and Fonts?**
 *      - `em` is a relative unit that scales font size based on the parent element's font size, ensuring flexibility when zooming or resizing.
 *      - `prefers-color-scheme` is a media query that allows websites to adapt to the user’s system theme (light or dark mode), providing better contrast for different environments.
 *      - Media queries like `prefers-reduced-motion` or `prefers-contrast` can help adjust the interface based on user preferences, improving accessibility for users who need higher contrast or specific styles.
 * 
 *   7. **Ten Advanced Things That 99% of Developers Don’t Know About This Topic?**
 *      - 1. Some screen readers do not announce content that has poor color contrast, leading to usability issues.
 *      - 2. Color blindness affects 1 in 12 men and 1 in 200 women, making color contrast critical for inclusivity.
 *      - 3. Using text shadows can improve readability for text on complex backgrounds, but it needs careful consideration to avoid making text illegible.
 *      - 4. The `CSS` `filter` property can be used to adjust brightness and contrast dynamically.
 *      - 5. Some fonts themselves have built-in contrast issues; not all typefaces are accessible even at high color contrast.
 *      - 6. Custom color contrast settings: users with low vision may have custom contrast requirements that override default website styles.
 *      - 7. Different color contrasts may behave differently under different lighting conditions (e.g., dark mode, high light).
 *      - 8. Tools like "Accessible Colors" provide auto-generated contrast-friendly color palettes based on input color.
 *      - 9. Not all high-contrast color combinations are aesthetically pleasing; balance between accessibility and design is key.
 *      - 10. ARIA roles or attributes may still require high contrast to be fully accessible when used in interactive elements.
 */





                                         /** TESTING ACCESIBLITY */

/**
 *   **Testing Accessibility (In-Depth Analysis)**
 *   
 *   **There are three key ways to test accessibility:** Automation Tools, Manual Testing, and Out-of-the-Box Testing.
 *   Each method has its role in ensuring an inclusive experience for all users. Let’s break them down in depth.
 * 
 *   1. **Automation Tools**
 *      Automation tools help developers catch accessibility issues during the development phase. These tools analyze code 
 *      against known accessibility guidelines (such as WCAG) and highlight issues early.
 * 
 *      - **axe**: A powerful accessibility testing tool that scans web pages for compliance with accessibility guidelines. 
 *      It integrates into developer tools, providing detailed issue reports and suggestions for fixes.
 *        - *Why it’s important*: Developers can identify common issues such as missing ARIA labels, low color contrast, 
 *        or improper focus management. This helps them catch issues early before manual testing.
 * 
 *      - **ESLint Accessibility Plugins**: Plugins like `eslint-plugin-jsx-a11y` work directly in your IDE or editor, 
 *      warning you of potential accessibility problems during development.
 *        - *Why it’s important*: It provides feedback as you write code, allowing for quick corrections of mistakes like 
 *        missing ARIA roles or improper form labels.
 * 
 *      - **React-ARIA**: A React library that provides accessible components out of the box. React-ARIA helps developers 
 *      create accessible custom components while handling ARIA attributes and keyboard interactions.
 *        - *Why it’s important*: It simplifies building accessible UIs without needing to manually handle the intricacies 
 *        of ARIA patterns or keyboard navigation.
 * 
 *   2. **Manual Testing**
 *      Manual testing is essential to cover the real-world experience of users, especially in complex interactive elements 
 *      where automation may fail.
 * 
 *      - **Lighthouse**: A Google tool integrated into Chrome Developer Tools. Lighthouse runs accessibility audits based 
 *      on WCAG guidelines and generates a score for your site’s accessibility, offering tips for improvement.
 *        - *Why it’s important*: Automated audits alone cannot catch every issue. Lighthouse helps identify problems in 
 *        visual elements (like color contrast) and also checks for ARIA roles and semantic HTML structures.
 * 
 *      - **Keyboard Navigation Testing**: One of the most important manual testing methods is navigating your site using only 
 *      the keyboard. Ensure that all focusable elements (links, buttons, forms) can be reached in a logical order.
 *        - *Why it’s important*: Users who rely on screen readers or cannot use a mouse will navigate using only their keyboard.
 *        If your site isn’t properly structured for keyboard access, it will cause significant issues for these users.
 * 
 *      - **Screen Reader Testing**: Testing with screen readers (like NVDA or VoiceOver) can give a true sense of how 
 *      assistive technologies interact with your site. It allows you to hear the structure of your page and identify 
 *      whether all elements are read properly.
 *        - *Why it’s important*: Screen reader users rely heavily on semantic HTML and ARIA roles to navigate a page. Testing 
 *        manually ensures that users are provided with a coherent experience.
 * 
 *   3. **Out-of-the-Box Testing (UI Libraries)**
 *      Modern UI libraries such as Material UI and Fluent UI come with pre-built accessible components.
 * 
 *      - **Material UI**: A React component library that adheres to accessibility guidelines out of the box. It automatically 
 *      handles keyboard interactions, ARIA attributes, and focus management for most of its components.
 *        - *Why it’s important*: For teams that use Material UI, accessibility is mostly handled by default, ensuring that 
 *        common UI components are fully accessible. This minimizes the manual effort for common elements like buttons, 
 *        modals, and forms.
 * 
 *      - **Fluent UI**: Similar to Material UI, Fluent UI is a design framework built by Microsoft that focuses on accessibility 
 *      and usability, ensuring WCAG compliance for all components.
 *        - *Why it’s important*: Fluent UI provides an accessible baseline for building enterprise-level apps with accessible 
 *        components like grids, buttons, and dropdowns.
 * 
 *      - **Out-of-the-Box Testing Caveats**: Even though these libraries handle a lot of accessibility issues, custom UI 
 *      elements that fall outside of the standard components must still be tested manually. For example, a custom drag-and-drop 
 *      feature or a dynamic chart might still require additional ARIA roles or attributes to be fully accessible.
 * 
 *   **Combining All Methods for Comprehensive Accessibility Testing**
 *      - **Automation tools** can catch the low-hanging fruit by highlighting common accessibility problems.
 *      - **Manual testing** ensures a real-world experience for users with disabilities, focusing on edge cases and 
 *      interactions automation tools might miss.
 *      - **UI Libraries** provide a strong foundation, but custom elements must still be tested both manually and with 
 *      automation to ensure full compliance.
 * 
 *   **Key Takeaways**:
 *      - Automated tools, while powerful, should never be the sole method of testing accessibility. Combining manual 
 *      tests with automated tests provides the best results.
 *      - UI libraries reduce the burden of accessibility but are not foolproof. Custom components must still be tested.
 *      - Accessibility testing should be integrated throughout the development cycle, not treated as an afterthought. 
 *        It’s about providing an inclusive experience to all users, regardless of ability.
 */


                                             /** React Aria And Eslint */

 /**
 *  **React-ARIA** (In-Depth)
 * 
 *  React-ARIA is a powerful library developed by Adobe that provides accessible components and utilities for React applications. 
 *  It simplifies the process of building custom UI components that adhere to accessibility standards.
 * 
 *  - **What does React-ARIA do?**
 *     React-ARIA helps developers add accessibility support to custom components by managing ARIA attributes, keyboard navigation, 
 *     and other common patterns that improve accessibility. It abstracts away a lot of the complexities involved in making interactive 
 *     components accessible.
 * 
 *  - **How does it help?**
 *     - **Keyboard Navigation**: React-ARIA provides utilities that automatically handle keyboard interaction for components like buttons, 
 *     sliders, and dropdowns, ensuring users who cannot use a mouse can still interact with the application.
 *     - **ARIA Attributes**: The library manages ARIA roles and states for your components, ensuring they comply with WCAG standards 
 *     without needing to manually add attributes. For example, it handles complex roles like `aria-expanded`, `aria-pressed`, and `aria-hidden`.
 *     - **Focus Management**: React-ARIA helps manage focus in scenarios like modals or popovers, ensuring that focus is always correctly 
 *     managed, and users can exit or enter focusable areas without issues.
 *     - **Accessibility APIs**: The library abstracts native browser accessibility APIs, helping you implement complex ARIA behaviors 
 *     without deep knowledge of ARIA specifications.
 * 
 *  - **When should you use React-ARIA?**
 *     Use React-ARIA when:
 *     - You are building complex UI components like custom buttons, dropdowns, sliders, or dialogs that require proper keyboard and screen reader support.
 *     - You need to ensure a high level of accessibility in your React applications but want to avoid manually handling ARIA attributes and focus management.
 * 
 *  - **Example of React-ARIA**:
 *  ```jsx
 *  import { useButton } from '@react-aria/button';
 *  import { useRef } from 'react';
 *  
 *  function MyButton(props) {
 *    let ref = useRef();
 *    let { buttonProps } = useButton(props, ref);
 *  
 *    return (
 *      <button {...buttonProps} ref={ref}>
 *        {props.children}
 *      </button>
 *    );
 *  }
 *  ```
 *  In this example, `useButton` from React-ARIA automatically handles the necessary ARIA attributes and keyboard interaction for the button.
 * 
 *  **Advantages**:
 *  - React-ARIA simplifies building accessible components and removes the need for deep ARIA knowledge.
 *  - It supports more complex patterns (like handling focus trapping and keyboard shortcuts) out-of-the-box, which would otherwise 
 *    require custom solutions.
 * 
 *  **Disadvantages**:
 *  - Since React-ARIA focuses purely on accessibility utilities, it doesn’t provide pre-styled components. You'll need to handle 
 *    the CSS separately, unlike libraries like Material UI that offer both style and accessibility.
 * 
 * 
 *  **ESLint Accessibility Plugins (In-Depth)**
 * 
 *  **ESLint** is a popular JavaScript linting tool that helps you catch code issues while writing. The ESLint accessibility plugins, 
 *  such as `eslint-plugin-jsx-a11y`, add accessibility-focused linting rules to your project.
 * 
 *  - **How does ESLint for accessibility help?**
 *     - **Enforces accessibility rules**: ESLint accessibility plugins enforce accessibility best practices directly in your code. 
 *     If you're writing JSX or HTML code, the plugin will catch violations of accessibility standards (like missing alt text on images).
 *     - **Real-time feedback**: You’ll get feedback as you code, helping you catch accessibility issues early in development before 
 *     the project is tested or goes live.
 *     - **Customization**: You can configure rules based on your project's accessibility goals. For example, you can enforce higher 
 *     standards like WCAG AA compliance and get warnings or errors when you violate rules.
 * 
 *  - **Common Rules in `eslint-plugin-jsx-a11y`**:
 *     - **alt-text**: Ensures that every image has an `alt` attribute for screen readers.
 *     - **anchor-is-valid**: Ensures that all anchor tags (`<a>`) have valid `href` attributes, preventing them from being misused.
 *     - **aria-props**: Ensures that ARIA attributes are valid, catching typos or improper usage of ARIA properties.
 *     - **label-has-associated-control**: Ensures that form inputs have associated labels, which is critical for screen readers.
 * 
 *  - **Example of ESLint Accessibility Plugin in Action**:
 *  Consider the following invalid JSX code:
 *  ```jsx
 *  <img src="logo.png" />
 *  ```
 *  Without an `alt` attribute, screen readers won’t be able to describe the image. The `eslint-plugin-jsx-a11y` plugin would raise 
 *  an error or warning, prompting you to fix it like so:
 *  ```jsx
 *  <img src="logo.png" alt="Company Logo" />
 *  ```
 * 
 *  - **When to use ESLint Accessibility Plugins?**
 *     - These plugins are useful in every project, particularly during development, to ensure accessibility issues are addressed early.
 *     - They are essential for React projects where accessibility can be easily overlooked, and small errors like missing ARIA 
 *     attributes can cause major usability issues for assistive technology users.
 * 
 *  - **Benefits of ESLint Accessibility Plugins**:
 *     - Catch common accessibility issues before they even reach manual testing.
 *     - Provide real-time feedback during the development process, reducing the chances of missing accessibility violations.
 *     - Enforce best practices automatically across teams, ensuring consistent accessibility standards.
 * 
 *  - **Disadvantages**:
 *     - ESLint can only catch static analysis issues, like missing ARIA attributes or improper use of HTML elements. 
 *     It cannot verify dynamic behavior such as whether the focus order is logical or if custom components are accessible to screen readers.
 * 
 * 
 *  **Conclusion**:
 *     - **React-ARIA** makes developing accessible custom components much easier by providing built-in ARIA support, 
 *     focus management, and keyboard interaction.
 *     - **ESLint Accessibility Plugins** provide real-time, automated feedback on accessibility issues, allowing developers to 
 *     address these problems as they write code.
 */
                                            



 /**
 *  **15 Essential Accessibility Practices (with Examples)**
 *
 *  1. **Use HTML Semantics**:
 *     - Semantic HTML elements like `<header>`, `<nav>`, `<main>`, and `<footer>` help assistive technologies understand the structure of the page.
 *     - Example:
 *     ```html
 *     <main>
 *        <article>
 *           <header>Article Title</header>
 *           <p>Article content goes here.</p>
 *        </article>
 *     </main>
 *     ```
 *
 *  2. **Add Labels to Form Elements**:
 *     - Every form input should have an associated `<label>` for screen readers.
 *     - Example:
 *     ```html
 *     <label for="username">Username</label>
 *     <input type="text" id="username" name="username">
 *     ```
 *
 *  3. **Provide Alt Text for Images**:
 *     - All images should have descriptive `alt` attributes for users who rely on screen readers.
 *     - Example:
 *     ```html
 *     <img src="logo.png" alt="Company Logo">
 *     ```
 *
 *  4. **Ensure Sufficient Color Contrast**:
 *     - Text should have sufficient contrast against the background to ensure readability for users with visual impairments.
 *     - Aim for a contrast ratio of at least 4.5:1 for body text.
 *     - Example:
 *     ```css
 *     body {
 *        color: #000;
 *        background-color: #fff;
 *     }
 *     ```
 *
 *  5. **Keyboard Navigation**:
 *     - Ensure that all interactive elements (buttons, links, form fields) are accessible via keyboard, not just a mouse.
 *     - Example: Use `tabindex` to control the tab order.
 *     ```html
 *     <button tabindex="1">Submit</button>
 *     <a href="#" tabindex="2">Link</a>
 *     ```
 *
 *  6. **Focus Management**:
 *     - Manage focus correctly, especially for popups, modals, and other dynamic content, so users can navigate easily.
 *     - Example:
 *     ```javascript
 *     document.getElementById("modal").focus();
 *     ```
 *
 *  7. **ARIA Roles and Attributes**:
 *     - Use ARIA attributes like `aria-label`, `aria-hidden`, and `aria-live` for dynamic content and complex interactions.
 *     - Example:
 *     ```html
 *     <button aria-expanded="false" aria-controls="menu">Menu</button>
 *     ```
 *
 *  8. **Use Headings Correctly**:
 *     - Ensure a logical heading structure (e.g., using `<h1>`, `<h2>`, etc.) to help screen readers navigate content hierarchies.
 *     - Example:
 *     ```html
 *     <h1>Main Title</h1>
 *     <h2>Subheading</h2>
 *     <h3>Sub-subheading</h3>
 *     ```
 *
 *  9. **Responsive Design**:
 *     - Ensure the site is accessible and usable across a variety of devices, including desktops, tablets, and mobile phones.
 *     - Example: Use media queries to adjust the layout for different screen sizes.
 *     ```css
 *     @media screen and (max-width: 768px) {
 *       body {
 *         font-size: 18px;
 *       }
 *     }
 *     ```
 *
 *  10. **Accessible Links**:
 *     - Ensure that links are descriptive and provide context. Avoid links that just say "click here."
 *     - Example:
 *     ```html
 *     <a href="/about">Learn more about our company</a>
 *     ```
 *
 *  11. **Avoid Auto-Playing Media**:
 *     - Auto-playing audio or video can be disruptive to users, especially those using screen readers. Provide controls to pause or stop the media.
 *     - Example:
 *     ```html
 *     <video controls>
 *       <source src="video.mp4" type="video/mp4">
 *     </video>
 *     ```
 *
 *  12. **Error Messaging for Forms**:
 *     - Provide clear, accessible error messages when form validation fails. Use ARIA attributes to announce errors to screen readers.
 *     - Example:
 *     ```html
 *     <span id="error" aria-live="assertive">Please enter a valid email.</span>
 *     <input type="email" aria-describedby="error">
 *     ```
 *
 *  13. **Avoid Using `div` or `span` for Interactive Elements**:
 *     - Avoid making `div` or `span` elements behave like buttons or links without adding proper roles and keyboard interaction.
 *     - Example (instead of `div`):
 *     ```html
 *     <button>Click Me</button>
 *     ```
 *
 *  14. **Avoid Time-Sensitive Content**:
 *     - Content that disappears after a short time can be problematic for users who may take longer to read or interact with it.
 *     - If time-sensitive content is necessary, provide a mechanism to extend or remove the time limit.
 *     - Example:
 *     ```html
 *     <p>This message will disappear in 5 seconds.</p>
 *     ```
 *
 *  15. **Use Landmarks for Navigation**:
 *     - Use `<nav>`, `<header>`, `<footer>`, and `<main>` elements to define landmark regions of your site, making it easier for assistive technology users to navigate.
 *     - Example:
 *     ```html
 *     <nav>
 *        <ul>
 *           <li><a href="#home">Home</a></li>
 *           <li><a href="#about">About</a></li>
 *        </ul>
 *     </nav>
 *     ```
 */


 







//  /**
//  *  **Additional Accessibility Considerations (In-Depth)**
//  *
//  *  1. **Skip to Content Links**:
//  *     - Provide a "Skip to Content" link at the top of pages for keyboard users to bypass navigation links and jump straight to the main content.
//  *     - This helps users who rely on keyboard navigation to access content quickly without having to tab through all navigation links.
//  *     - Example:
//  *     ```html
//  *     <a href="#main-content" class="skip-link">Skip to Main Content</a>
//  *     <main id="main-content">Main content goes here...</main>
//  *     ```
//  *
//  *  2. **Accessible Tables**:
//  *     - Ensure tables are accessible by using `<thead>`, `<tbody>`, and proper `<th>` elements for column and row headers.
//  *     - This structure provides clear labeling and improves navigation for screen readers.
//  *     - Example:
//  *     ```html
//  *     <table>
//  *       <thead>
//  *         <tr><th>Name</th><th>Age</th></tr>
//  *       </thead>
//  *       <tbody>
//  *         <tr><td>John</td><td>30</td></tr>
//  *         <tr><td>Jane</td><td>25</td></tr>
//  *       </tbody>
//  *     </table>
//  *     ```
//  *
//  *  3. **Accessible Forms with Fieldsets and Legends**:
//  *     - Use `<fieldset>` and `<legend>` to group related form controls and provide a label for the entire group.
//  *     - This is especially useful for radio buttons and checkboxes, providing context to the screen readers.
//  *     - Example:
//  *     ```html
//  *     <fieldset>
//  *       <legend>Select your preferred contact method:</legend>
//  *       <input type="radio" id="email" name="contact" value="email">
//  *       <label for="email">Email</label>
//  *       <input type="radio" id="phone" name="contact" value="phone">
//  *       <label for="phone">Phone</label>
//  *     </fieldset>
//  *     ```
//  *
//  *  4. **Accessible Modal Dialogs**:
//  *     - Ensure modal dialogs are accessible by trapping focus within the modal and making it dismissible by the `Esc` key.
//  *     - Users using keyboard navigation or screen readers should be able to interact with modals without confusion.
//  *     - Example (JavaScript focus trapping):
//  *     ```javascript
//  *     const modal = document.getElementById('modal');
//  *     modal.addEventListener('keydown', (e) => {
//  *       if (e.key === 'Escape') {
//  *         modal.close();
//  *       }
//  *     });
//  *     ```
//  *
//  *  5. **Text Resizing and Responsive Typography**:
//  *     - Ensure that text is easily resizable by users, especially those with visual impairments, without breaking the layout.
//  *     - Use relative units like `em` or `rem` instead of fixed `px` for font sizes to ensure responsiveness.
//  *     - Example:
//  *     ```css
//  *     body {
//  *       font-size: 1rem; /* Relative to the root element's font size */
//  *     }
//  *     ```
//  *
//  *  6. **Accessible SVGs and Icons**:
//  *     - Ensure that SVGs and icons are accessible by using `aria-label`, `role="img"`, or providing `title` elements inside SVGs.
//  *     - This ensures that non-text content is properly described for screen readers.
//  *     - Example:
//  *     ```html
//  *     <svg role="img" aria-label="Search Icon">
//  *       <title>Search Icon</title>
//  *       <use xlink:href="#icon-search"></use>
//  *     </svg>
//  *     ```
//  *
//  *  7. **Avoid Flashing Content**:
//  *     - Flashing content can trigger seizures in individuals with photosensitive epilepsy.
//  *     - If flashing content is necessary, ensure it complies with the WCAG guidelines (no more than three flashes per second).
//  *     - Example: Avoid using animations or auto-play video that flashes quickly.
//  *
//  *  8. **Support for Custom Themes and High Contrast Mode**:
//  *     - Ensure your site works with custom themes or system-wide high contrast modes that users with visual impairments often enable.
//  *     - CSS example for high contrast mode support:
//  *     ```css
//  *     @media (prefers-contrast: high) {
//  *       body {
//  *         background-color: #000;
//  *         color: #fff;
//  *       }
//  *     }
//  *     ```
//  *
//  *  9. **Accessible Error Recovery**:
//  *     - Help users recover from input errors. Clearly state what went wrong and how they can fix it.
//  *     - Screen readers should announce errors as they occur, so users are aware of issues right away.
//  *     - Example:
//  *     ```html
//  *     <input type="email" aria-invalid="true" aria-describedby="error-message">
//  *     <span id="error-message" role="alert">Please enter a valid email address.</span>
//  *     ```
//  *
//  *  10. **Test with Real Users with Disabilities**:
//  *     - Automated tools are helpful but do not catch everything.
//  *     - Ensure that you test your site with real users who have disabilities to identify any remaining accessibility issues.
//  *     - This helps you understand practical challenges that may not be visible through automated tests.
//  *
//  *  11. **Meaningful Link Text**:
//  *     - Links should be descriptive and clearly indicate their purpose, rather than using vague terms like "click here."
//  *     - Example:
//  *     ```html
//  *     <a href="/pricing">See our pricing plans</a>
//  *     ```
//  *
//  *  12. **Ensure Focus is Visible**:
//  *     - It's important that users can see where the focus is when navigating the page via the keyboard.
//  *     - Always provide a clear focus style using `:focus` pseudo-class in CSS.
//  *     - Example:
//  *     ```css
//  *     a:focus, button:focus {
//  *       outline: 2px solid #000; /* Clearly visible focus */
//  *     }
//  *     ```
//  *
//  *  13. **Provide Meaningful Alt Text for Images**:
//  *     - Provide descriptive `alt` text for images, especially important images that convey information.
//  *     - Avoid redundant `alt` text like "image of..." and instead describe the purpose or content of the image.
//  *     - Example:
//  *     ```html
//  *     <img src="team-photo.jpg" alt="Our company team photo during a summer retreat">
//  *     ```
//  *
//  *  14. **Keyboard Navigation for All Interactive Elements**:
//  *     - All interactive elements (buttons, links, inputs) should be navigable and operable via the keyboard.
//  *     - Ensure you test keyboard navigation thoroughly, and avoid elements that can only be activated by mouse.
//  *
//  *  15. **Accessible Timed Content**:
//  *     - Provide options to pause, stop, or extend time-limited content. This includes automatic sliders, popups, or notifications.
//  *     - Users with cognitive disabilities may struggle with content that moves or changes automatically.
//  *     - Example:
//  *     ```javascript
//  *     const slider = document.querySelector('.slider');
//  *     slider.pause(); // Allow users to pause slideshows
//  *     ```
//  */








/**
 *  REVISION 
 * 
 *  SPEECH RECORDER
 *  WCAG 
 *  A AA AAA
 *  VOICE OVER IN MAC , NVDA , JWAS (PAID ONE)
 *  BY DEFAULT WEB PAGES ARES ACCESSIBLY WE USE EVERY WHERE DIV ANY MAKE IT IN-ACCESSIBLE
 *  TRY TO USE HTML SMENTICS MOST OF TIME LIKE
 *  header , footer , body , ui , li , oi , nav , caption , main
 *  try to use alt tag in images 
 *  for audio and video must must have transscript
 *  aria
 *  aria-label
 *  aria-labeled
 *  aria-descriped-by 
 *  
 *  role | state | properties
 * 
 *  role="button"
 *  state= "hidden"
 *  poperites like aria-labeled and all
 * 
 * 
 *  aria-live : assertive| polite | off (lit)
 *  tab-index
 *  skip to main contetnt 
 *  focus
 * 
 *  color contrans and 400% zoom
 *  ration when fonst size is less then 18 4.5:1 and when greater then 3:1
 *  you can see color contrast in dev tools
 * 
 *  axe-devtools in BEST for testing 
 *  MAINLY 99% of time we are going to use light-house for accesiblity
 * 
 *  MOST OF UI LIBRARY LIKE MATERIAL UI , FLUNT PROVIDE INBUILT TAKEN CARE OF ACCESSIBLITY
 * 
 * TRY NOT US POLUTE EVERYTHING WITH ARIA
 * TRY NOT TO CHANGE TABINDEX MOST OF IT DEFAULT WORKS BEST
 * 
 *  onKeyUp , onKeyPressed use this frequmently on only onPress
 * 
 *  FOR LINK AND <A MAKE SURE YOU HAVE PROPER ARAIA-LABEL AND ALL
 *  SEE MOST OF TIME LIGHTHOUSE WILL TELL YOU WHAT KIND OF ERROR YOU HAVE SO ABOVE THINKS ARE MORE THEN ENOUGHT
 */