
# lwip2 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/lwip2.svg)](https://www.npmjs.com/package/lwip2) [![Downloads](https://img.shields.io/npm/dt/lwip2.svg)](https://www.npmjs.com/package/lwip2) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A friendlier wrapper around the lwip library.

## :cloud: Installation

```sh
$ npm i --save lwip2
```


## :clipboard: Example



```js
const lwip2 = require("lwip2");

lwip2.open("foo", err => {
    console.log(err);
    // In case the lwip package was not installed or failed to be compiled.
    // =>
    // { [Error: Failed to load lwip. Use GraphicsMagick instead.]
    //   reason: { [Error: Cannot find module 'lwip'] code: 'MODULE_NOT_FOUND' },
    //   code: 'CANNOT_LOAD_LWIP' }
});
```

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`lwipify`](https://github.com/IonicaBizau/lwipify#readme)—Convert images in lwip objects.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
