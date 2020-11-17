This is a starter template for [Learn Next.js](https://nextjs.org/learn).


## Bugs

### If the cmd isn't being run correctly, then clean
```
$ npm cache clean --force

# Type in 'a' to Yes to all
$ rmdir node_modules
$ npm install
$ npm run dev
```


Kevin solving the error

Kevin googled "npm start nextjs doesn't do anything windows"
3rd link: https://stackoverflow.com/questions/59016328/npm-run-doesnt-do-anything

$ npm config get ignore-scripts
this was true
set it to false
$ npm config set ignore-scripts false

now I can see an error when I run `npm run dev`
```
npm verb node v13.9.0
npm verb npm  v6.13.7
npm ERR! code ELIFECYCLE
npm ERR! errno 1
```
I google "npm ERR! code ELIFECYCLE"
https://stackoverflow.com/questions/42308879/how-to-solve-npm-error-npm-err-code-elifecycle
This tells me to clear the cache.

I clear the cache (see above). Done!
