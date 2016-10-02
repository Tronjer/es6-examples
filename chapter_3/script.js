//import { keyValue as key, test } from 'external.js';

//import everything exported as obj
import * as imported from 'external.js';
import { Matt, StaticHelper } from 'classes.js';



console.log(imported);
imported.test();

let me = new Matt(33);
me.greetTwice();

StaticHelper.logTwice('foobar');
