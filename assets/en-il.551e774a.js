import{nZ as e,aE as t}from"./vendor.7103ff48.js";import{a}from"./moment.8c3285c7.js";function r(e,t){return t.forEach((function(t){Object.keys(t).forEach((function(a){if("default"!==a&&!(a in e)){var r=Object.getOwnPropertyDescriptor(t,a);Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:function(){return t[a]}})}}))})),Object.freeze(e)}var n,o={exports:{}};n=t,("function"==typeof e?a.exports:n.moment).defineLocale("en-il",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}});var d=o.exports,s=Object.freeze(r({__proto__:null,[Symbol.toStringTag]:"Module",default:d},[o.exports]));export{s as e};
//# sourceMappingURL=en-il.551e774a.js.map