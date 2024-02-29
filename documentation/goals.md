# Goals

- Build a FE app
- Learn FE testing framework
- Learn Vue FE: testing, routing
- Build a Kotlin, Java, Python, or NodeJS BE server with a CRUD REST API
- Build a PostgreSQL database


## Timeline

### Week of Mar 4
- install Vue
- read Vue getting started docs, learning how Vue works can be complicated
    - look up "single page application": Vue doesn't require re-rendering entire application to change something, only certain parts
    - understand reactivity (for FE frameworks)
- make a form (using Vue, specifically `<script setup>` pattern) that takes in name, gender, age
    - note: `<script setup>` is (globally accessible) scoped to the HTML file that it's in (e.g. when there are multiple HTML files)
    - HTML input field for text: link input text to Vue logic in Javascript
    - key concept: reactive data/variables
    - when you update the form, data should be changing somewhere in reactive value made
    - end of form: submit button
        - upon submit, message that comes up and prints out entered reactive values
- install Vue dev tools (browser extension for Chrome), check out what you can do with it
    - should be able to see in real time in the dev tools each one of the character changes in the reactive values
- stretch goal: testing UI
    - get vitest up and running
    - use Vue testing library (package)
    - look into how to test Vue app: will be rendering DOM in computer shell (fake DOM in CLI application)
        - so that will not need to test manually
        - will require using configuration files: get help if stuck
- optionally watch History of JavaScript: https://www.youtube.com/watch?v=Sh6lK57Cuk4
    - Youtube Fireship: does 1 min overviews of many (popular) concepts
- ~~convert app into Vue (may not be best approach)~~

### Week of Feb 26
- install nvm (Node version manager) -> done
- `npm init -y` on repo -> done (required uninstalling and reinstalling nvm)
- read Getting Started docs for vitest: https://vitest.dev/guide/
- Write tests that test every part of `TicTacToeSession.submitMove`
    - mock `TicTacToeSession` class where `submitMove` is the only true function, others are empty functions
    - Make function that will return an example DOM

### Week of Feb 19
- working/interactive grid
- have bot player

(no need to have scoreboard or game reset yet)

### Week of Feb 12
- first shot at creating tic-tac-toe with HTML and JavaScript