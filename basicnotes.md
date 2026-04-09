In Angular, decorators are special functions that attach metadata to classes, methods, properties, or parameters.
They tell Angular how to process and use the decorated element at runtime.

1. Purpose of Decorators

Provide metadata to Angular so it knows how to treat a class or member.
Used heavily in Angular for defining components, modules, services, directives, etc.
They are TypeScript features that Angular leverages.


2. Common Types of Angular Decorators
A. Class Decorators
Applied to classes to define their role in Angular.



Decorator
Purpose


@Component
Marks a class as an Angular component and provides template, styles, selector, etc.


@Directive
Marks a class as a directive to extend HTML behavior.


@Pipe
Marks a class as a pipe for transforming data in templates.


@Injectable
Marks a class as available for dependency injection.


@NgModule
Marks a class as an Angular module.



Example:
Typescriptimport { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{name}}</h1>`
})
export class HelloComponent {
  name = 'Angular';
}


B. Property Decorators
Applied to class properties to bind them to Angular features.



Decorator
Purpose




@Input
Marks a property as an input binding from a parent component.


@Output
Marks a property as an output event emitter to the parent.


@ViewChild / @ViewChildren
Access child elements or components in the view.


@ContentChild / @ContentChildren
Access projected content from <ng-content>.



Example:
Typescriptimport { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>User: {{name}}</p>`
})
export class UserComponent {
  @Input() name!: string; // Receives value from parent
}


C. Method Decorators
Applied to methods to modify their behavior.



Decorator
Purpose




@HostListener
Listens to DOM events on the host element.



Example:
Typescriptimport { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickTracker]'
})
export class ClickTrackerDirective {
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    console.log('Element clicked!', event);
  }
}


D. Parameter Decorators
Applied to constructor parameters to influence dependency injection.



Decorator
Purpose




@Inject
Specifies a custom provider token.


@Optional
Marks a dependency as optional.


@Self, @SkipSelf, @Host
Control dependency resolution behavior.



Example:
Typescriptimport { Component, Inject } from '@angular/core';
import { API_URL } from './tokens';

@Component({
  selector: 'app-api',
  template: `API URL: {{apiUrl}}`
})
export class ApiComponent {
  constructor(@Inject(API_URL) public apiUrl: string) {}
}


✅ Key Points:

Decorators are executed at design time to attach metadata.
Angular uses reflection to read this metadata at runtime.
They are TypeScript features, not native JavaScript.


If you want, I can create a diagram showing how Angular decorators work internally so it’s easier to visualize.
Do you want me to prepare that?
