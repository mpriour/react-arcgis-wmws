import{nZ as e,aE as r}from"./vendor.7103ff48.js";import{a as t}from"./moment.8c3285c7.js";function a(e,r){return r.forEach((function(r){Object.keys(r).forEach((function(t){if("default"!==t&&!(t in e)){var a=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:function(){return r[t]}})}}))})),Object.freeze(e)}var n,d={exports:{}};n=r,("function"==typeof e?t.exports:n.moment).defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}(\:e|\:a)/,ordinal:function(e){var r=e%10;return e+(1==~~(e%100/10)?":e":1===r||2===r?":a":":e")},week:{dow:1,doy:4}});var o=d.exports,s=Object.freeze(a({__proto__:null,[Symbol.toStringTag]:"Module",default:o},[d.exports]));export{s};
//# sourceMappingURL=sv.1fc56437.js.map