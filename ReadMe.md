## Basic Application
This application only print a list of users, however it works without zone.js (which used to trigger change detection), also it targets ES2016.

Note that targeting an ES version greater than 2016 has conflict with zone.js because of native async/await keywords.

you can think of it as a minimal application (only compiles to 8KB) and no polyfills.
