# COUNTER
> This is my COUNTER page which keeps check of the number of times the button is clicked and restart the for a new day.

![screenshot](./app_screenshot.png)

Additional description about the project and its features.

This project was built to keep count of the number of times the button "click me" is clicked and the counting restart after midnight when clicked. Built using React and its technlogies(React technologies used can be found below) 

@Todo

Project still needs to be deployed, I used Laravel 6 for the backend API which uses PHP 7.* while heroku was using 8.* to install the dependencies and leading to issues. While this is submitted i'll keep working towards finding a solution to deploying the backend code to be able to deploy this

## Features

- Get and display all day counts
- add counts for current day

## Technologies Used

- REACT
  - useState
  - useEffect
  - folder struturing
  - API fetching
  - Item listing using map()
  - debouncing

- CSS

## Live Demo

[Live Demo Link]()

### Development (Running locally)


- Clone the project

```bash
git clone https://github.com/aishatpopoola/counter-tracker-api.git

```

- Install Dependencies

```bash
npm install
```

- Start the project

```bash
npm start
```

To run StyleLint by itself, you may run the lint task:

```bash
npm run lint:check
```

Or to automatically fix issues found (where possible):

```bash
npm run lint
```
