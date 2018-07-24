# AngularTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Intro to Angular
- What is Angular & What you need to know
- Architecture of Vanilla vs. Angular
- Routing
- Components in Detail
  - Structure of the Component
  - Data-binding
  - Rendering
  - Parent-Child Communication
- Server Communication in Angular

## What is Angular
> It is a Javascript Framework

- It provides functionality that you would otherwise have to write yourself, making life easier and reducing time taken to develop web applications
- Used to develop client applications (Frontend Development)

### What you need to know
Required background in Javascript, HTML and CSS. Advantageous to have experience in OOP and AJAX. Angular actually uses Typescript for its code snippets and classes. Typescript is a superset of Javascript, which means that if you know Javascript you're fine. It merely enforces types, among a few other things. Think of Typescript = Types of Java + freedom of Javascript (very basically).

### What you'll gain
New mindset for developing applications
Experience with one of the most popular javascript frameworks used today.

## Architecture of a Vanilla Application vs. an Angular Application
Traditionally, without the use of a framework, you write your HTML in one or more files, and your javascript gets written in one or more JS files. These files are then imported where they are needed.

An Angular application is composed of named entities, some of which are **Modules**, **Components** and **Services**. Modules manage components and services, components are what you see on the page and services provide functionality in the background.

### Modules
A **Module** is a defined context or environment for an aspect of the application. It is self-contained and does not depend on anything outside of itself, i.e. it provides all the necessary resources for its dependents by importing what is required. This includes the imports into the scope of the Module and any dependencies in the Module have access to an import. It only manages components and services within it, it does not provide code in the form of data models or visual template.

### Components
A **Component** is a section on a webpage that you see, and may contain the necessary functionality associated with it. It consists of _Application Data and Logic_, written in Typescript and is referred to as the _Model_, and the _Template_, written in HTML and CSS and is referred to as the _View_. Thus a component usually has 3 main file types associated with it:
- The Typescript file with a .ts extension where the component is defined, any required imports are declared and data models are stored (variables),
- The HTML file with a .html extension for defining the View, and
- The CSS file with a .css extension for styling the View. \[Note that a CSS file for a component is only scoped for that component, and any defined styles cannot be used in other components, unless it is imported. In this case, it is better to create a seperate CSS file and include it in a Module or define styles in the global styles.css.\]

(When generating a component through Angular, a fourth file will be generated, in Typescript, with a .spec.ts extension. This file is used to define any tests for the component, and is not used in a build. More on Builds later.)

A View (or component) can also be made up of other Views (components) within itself, introducing a Parent-Child relationship. Every application needs at least one component, called the root component, upon which the rest of the application is built.
\[Image illustrating how a webpage can consist of views which can consist of other views.]

It is best practise to keep a component's _Scope_ to one idea or aspect of the webpage. This reduces Component Complexity and makes it easier to identify where code should and shouldn't go. Ideally, a component exists to enable the user's experience.
Example, viewing a YouTube video. The left navigation pane could be a component, the navigation bar across the top of the screen, the main area for the video can be split into the actual video and related information, the comments and the up next section. And of course, the entire page is a component, the root component.

In the Typescript file where the component is defined, any View-related functionality is also defined here along with any data models needed for enriching the View with data-binding. We'll touch on data-binding in a bit. 

### Services
A **Service** is basically a class that has a specific purpose, usually to transport and possibly manipulate data. It should do one thing and do it well. An example is a service to retrieve information from a server, or a method of transporting data from one component to another one. Any functionality that is not View-Related should be defined in a Service.

A term you will hear a lot associated with Services is the term Dependency Injection, or DI for short. This is just the way in which services are imported and provided to components, which is different to a more traditional import statement. DI is a built in Angular feature that has a couple extra steps necessary to reduce runtime load. Basically, the process is to register the Service with Angular's Injector, then in whichever component the service is necessary you follow the Injection syntax for Angular (constructor parameter) and you are then able to use it as if it were a part of the component. The other extra steps are handled by Angular. Just know that you can specify where a service should be allowed to be used, and Angular will manage the access and creation of the service. Also only keep one instance alive at a time.

## Navigation among pages
Ok so we can have one web page that works nicely and has multiple components, but what if we need to have more than one page? You can guess that another page would need at least one other component, but how do we access it? If you link to the html, how do you include the associated Typescript and CSS? The answer: use Routing.

Routing is a method of specifying what needs to be displayed based on the current URL. The Route is the information that follows the address of the page. For example, you may have be on a website `www.example.co.za/home`. The `/home` part is the route of the URL, and it is likely that the home component is being displayed, as a guess. In fact, that is exactly how a Router works, it defines components to be displayed when the URL matches a specific route. When the URL changes and a matching route is found, it swaps out the current component for the one to be displayed.

A Router can match any route, it can redirect to other routes, and can even have safeguards to call a function to verify data before accessing a route. 

## Components in depth
Alright, let's take a closer look at the building blocks of an Angular Application: the Component.

### Structure of the Component
As mentioned earlier, a component consists of 3 parts, distributed into 3 files: the Typescript logic, the HTML template view and the CSS styling. The component also has other metadata containing information about the component and associated files. This metadata is defined inside the @Component decorator, which comes before the component definition in the Typescript file. Some properties that are available are the selector, the path to the html file, and any Services that the component may make use of.

The View of a Component is defined in its accompanying template. The template, written in the HTML file, instructs Angular how to render the View. As mentioned earlier, a Component's View may contain other embedded Views from other Components, resulting in a (or several) Parent-Child relationships. The template looks like regular HTML, but because it is a subsection of a page, it doesn't contain any `<html>`, `<body>` or `<title>` tags. You can think of a component as a section of HTML code from a full page that has been cut and paste into a component's HTML file. The template will usually also contain other special Angular Syntax which will alter the HTML at runtime based on the logic in the Typescript file.

What's really cool about Angular is the way it is able to transform web pages into dynamic and reactive web applications. It does this through many things, two of which are important here: namely Data-Binding and Directives.

#### Data-binding
In vanilla Javascript, if you wanted to update an HTML element if a value, or a property, in the logic changed, you would have to manually alter the DOM and this usually meant you had a list of element ids that felt like it never ended. Similarly, if any event happened on the web page, you had to manually define a listener for the event to update any properties in the logic of the page.

Data-Binding makes this far easier for you, and is simply linking an HTML element to a property or function in the Component Logic. Data-binding can be one-way, or two-way. Property binding is binding a property in the logic to an element in the HTML, so that if the property updates in the background, the change is immediately reflected in the application. Event binding is (almost) the reverse: if an event happens in the HTML, it triggers a function in the logic. Two-way data binding binds a property to an element in the HTML, so that any changes in either the HTML or the logic will cause the other to immediately update. We'll cover code examples of this after lunch.

#### Directives
Directives issue instructions to Angular to transform the DOM by altering the layout, appearance and behaviour of elements in the page. 

Right now just understand that there are two types with two intentions:
- You can conditionally render an element, or iteratively generate them with structural directives, or
- Modify behaviour/appearance of an element with attribute directives.

#### Rendering
Ok, one thing you've probably forgotten you wanted to ask, or perhaps didn't know you wanted to ask: how do you tell Angular where you want a Component rendered on the page? With a custom HTML tag, or _selector_. The Selector of a Component is defined in the metadata of the Component, in the Typescript, but it is used in the HTML of another Component. The first example you will see is when you generate an Angular Application for the first time and you will see `<app-root>` in the `<body>` tag of the index.html of the project. This tag tells Angular to render the root component in the body tag, essentially taking up the whole page. You can only have one root component for an application, and all other components need to be defined in this root component's HTML or in the HTML of other components.

#### Parent-Child Communication
Alright say we're some way through our development, we have several components and it's looking fantastic. If we want to allow communication between components, we will likely have some services in place that perform the necessary functions. However, if we have a component hierarchy somewhere with a parent-child relationship, there is an additional way of allowing communication between the two to save some coding and reduce complexity.

Since you can view the relationship between a parent component and a child component as more intimate than other components (just like real life) it makes sense that they know more about each other than they do about other components. For this reason, there are two additional methods of communication available to use: Input binding and Event Listening.

Input binding creates a variable in the child component and expects a variable from the parent component. It will throw an error if it doesn't get it. Also, any changes in variable in the parent component will pass down to the child component.

Event listening happens in the parent component, and when the child wishes to pass data to the parent it _Emits_ an Event that the parent is listening for. When the parent hears the event, it performs whatever functionality you've defined.

## Server Communication in Angular
In a traditional, vanilla application, communication to a server is done through AJAX using HTTP requests (GET, POST, PUT, etc). It can be quite cumbersome, and sometimes quite confusing as to what is happening when. Angular provides a simplified client for this communication called the HttpClient. Any type of request you'd like to make is available as a function, so it's as simple as .get() to retrieve information from a server.

However, this is Asynchronous programming, so what will happen is the request will be sent, and the code will continue to execute without waiting for the response. In order to receive the response and do something with the data, you need a callback function, which is just a function that executes once the response returns. In Angular, the return type is an Observable, and all you need to do is subscribe to the request. This method also contains the data returned by the request, so you can access it inside the method. Examples will be shown in the next session.

## Git and Github
### Concept of Version Control
- Track changes made in a code project. Helps for collaboration


## Great Resources
- [Learn Angular 5 in less than 60 Minutes - Free Beginner's Course](https://gleamyou.com/296-learn-angular-5-in-less-than-60-minutes-free-beginner-s-course)
- [Angular.io Docs](https://angular.io/docs)
- [TutorialsPoint](https://www.tutorialspoint.com/angular4/)
- [Toptal](https://www.toptal.com/angular/angular-5-tutorial)
- [Angular in 60 Minutes - Travesty Media (YouTube)](https://www.youtube.com/watch?v=KhzGSHNhnbI)
- [VS Code](https://code.visualstudio.com/)