/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 58:
/***/ (() => {


;// CONCATENATED MODULE: ./src/hello-world.js
function helloWorld() {
    console.log('Hello world !!!')
}

/* harmony default export */ const hello_world = (helloWorld);
;// CONCATENATED MODULE: ./src/assets/json/data.toml
const data_namespaceObject = JSON.parse('{"title":"TOML Example","owner":{"name":"Tom Preston-Werner","organization":"GitHub","bio":"GitHub Cofounder & CEO\\nLikes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');
;// CONCATENATED MODULE: ./src/assets/json/data.yaml
const assets_json_data_namespaceObject = JSON.parse('{"title":"YAML Example","owner":{"name":"Tom Preston-Werner","organization":"GitHub","bio":"GitHub Cofounder & CEO\\nLikes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');
;// CONCATENATED MODULE: ./src/assets/json/data.json5
const data_json5_namespaceObject = JSON.parse('{"title":"JSON5 Example","owner":{"name":"Tom Preston-Werner","organization":"GitHub","bio":"GitHub Cofounder & CEO Likes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');
;// CONCATENATED MODULE: ./src/index.js

// import './style.css'
// import './style.less'
// import './iconfont.css'
// import data from './assets/data.xml'
// import notes from './assets/data.csv'




hello_world()

// document.body.classList.add('hello')
// document.body.classList.add('world')

// console.log('data:', data)
// console.log('notes:', notes)

console.log('toml:', data_namespaceObject)
console.log('yaml:', assets_json_data_namespaceObject)
console.log('json5:', data_json5_namespaceObject)

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[58]();
/******/ 	
/******/ })()
;