# brook

![image](src/assets/images/brook-logo-wide.png)

[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

Angular 1.x skeleton following the standards of the [AngularJS Team](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)


## Features

+ Main app scaffolding using the style guide recommendations
+ AngularJS 1.5.x with UI-Router
+ Angular UI Bootstrap
+ Restangular
+ Angular translations (Ready for using navigator language)
+ Flash alerts included
+ Spinner included in every API requests
+ Environment configuration via json
+ Grunt tasks ready for production, pre-production and dev environments
+ Dynamic and automatized building for development environment
+ Minimized distribution version for production environment
+ Sass compiled by libsass
+ HTML5 Push state enabled and mod-rewrite included for dev environment
+ Test scaffolding ready

## Technologies

+ [Grunt](http://gruntjs.com/)
+ [Bower](http://bower.io/)
+ [Npm](https://www.npmjs.com/)
+ [AngularJS](https://angularjs.org/)
+ [Bootstrap 4](http://v4-alpha.getbootstrap.com/)
+ [Sass](http://sass-lang.com/)
+ [Karma](https://karma-runner.github.io)
+ [Jasmine](http://jasmine.github.io/)

## Installation

Just clone the repo wherever you want and delete the downloaded `.git` directory to add your own repo

````bash
git clone git@github.com:getfleet/brook.git your_project
cd your_project
rm -Rf .git
git init
git add remote origin git@github.com:your_user/your_repo
git add .
git push origin master
````

## Build & development

### Development environment

````bash
grunt serve
````

### Production environment

````bash
grunt build:prod
````


## Testing

````bash
grunt test
````

## Authors

  <a href="https://github.com/nass600" target="_blank">
    <img src="http://s.gravatar.com/avatar/49f04efaf80ecb68e6e383919019b843?s=80">
  </a>
