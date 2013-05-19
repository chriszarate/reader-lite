// ==UserScript==
// @name        Google Reader Lite
// @description Minimal style for Google Reader
// @include     http*://*.google.com/reader/view/*
// @include     http*://*.google.co.*/reader/view/*
// @author      Chris Zarate (http://chris.zarate.org)
// ==/UserScript==

var newCSS = document.createElement('link');
    newCSS.type  = 'text/css';
    newCSS.rel   = 'stylesheet';
    newCSS.href  = 'http://files.zarate.org/css/reader_lite.css?20120102';
    newCSS.media = 'screen';

document.getElementsByTagName('head')[0].appendChild(newCSS);