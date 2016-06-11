# nobro

Simple is that! Shout out to @marak :) - had good times in berlin and thanks for `say` - anyway. Do you ever had the feeling or felt the downside, that you have to merge a branch of somebody you really like but it annoys you that he wasn't able to pull the last 30 commits in before his PR?

If so. Here is `nobro`

It check if your buddy is out of sync with master and just interrupts him with a pic of `Vader` a corresponding sound track and the saying: `do ya think, syncing is for pussies?`. And thats it. So if your project is tight to a `npm` workflow you can just sprinkle that in, where you feel comfortable. See usage in the example.

# example usage
In the script section of `package.json` just do the following:

```json
"scripts": {
  "build": "nobro && webpack --debug",
  "stats": "nobro && webpack --profile --json > stats.json",
  "dev": "nobro && NODE_ENV=development NODE_PATH=$NODE_PATH:./src/shared babel-node --harmony .",
  "start": "nobro && NODE_ENV=production NODE_PATH=$NODE_PATH:./src/shared babel-node --harmony .",
  "start:dev": "nobro && NODE_ENV=development NODE_PATH=$NODE_PATH:./src/shared babel-node --harmony .",
  "test": "nobro && NODE_PATH=$NODE_PATH:./src/shared mocha --compilers js:babel-core/register --require babel-polyfill ./test/test_helper.js 'test/**/*_spec.@(js|jsx)'",
  "test:watch": "nobro && npm run test -- --watch",
  "lint": "nobro && eslint --quiet src",
  "postinstall": "nobro && npm run build"
},
```

If your buddy is behind 20 commits, it would just displays a pic of darth vader, plays imperial march and says something like he can't go on if he wouldn't sync. Thats annoying but can safe hours or even days with merge-conflicting the shit out of your project. :D

![alt tag](https://raw.githubusercontent.com/marsch/nobro/master/sample.png)
