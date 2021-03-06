# Open Hack Night Eonics
Slides are available on:
https://slides.com/pbrdebruijn/react

# ReactJS - An introduction

## Workshop prep

1. Install NodeJS 6.x (because I like LTS) 
2. Clone this repos ;)
3. cd into the repo directory and run the following to get all dependencies installed.
```
npm install
```
4. Grab a drink

## Let's get our hands dirty

1. Open up your favorite text editor or IDE

2. Find the `./src/component/` directory and look for the `Button.js` file
This is an example of a `Stateless` component.

3. Compare this to the `Time` or `Stopwatch` component.
These are components with their own `state`.
The React lifecycle is also shown in these components.

4. Start serving the app with
```bash
npm start
```
Available in your browser:
http://localhost:3000

5. Use this Butten component as an example to create a `Logo` component to replace the `<img>` in the `App.js`

## TL;TR;

### npm
`NodeJS` has it's own package manager `npm` and this will be your biggest friend when developing NodeJS apps. Even though `React` is only the view (running in the browser), `npm` will help you install dependencies, run en test your app.

### react-scripts
The app has been created with the `react-scripts` utility.
A handy tool that allowes us to easily start, run and test a new React app.
To install (globally):
```bash
npm install -g react-scripts
```

### ES6
The app is written in `ES6` and react-scripts uses `babel` to convert this to `ES5` that is run in the browser.

## Interresting links
- https://facebook.github.io/react/
- http://redux.js.org/
- https://facebook.github.io/flux/ 
- https://reactcheatsheet.com/

## Disclaimer
I'm not a Windows user.. some commands might be way way different on Windows