// ==UserScript==
// @name         百度地图去广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  百度地图去广告
// @author       You
// @match        *://map.baidu.com/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM_addStyle
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

const dom = {};
dom.query = jQuery.noConflict(true);
dom.query(document).ready(function ($) {
    'use strict';

//     function no_display(item) {
//         const no_display_css = item + " {display: none;}";
//         GM_addStyle(no_display_css);
//     }

    $("#message-panel").remove();
});
