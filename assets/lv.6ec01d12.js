import{nZ as e,aE as s}from"./vendor.7103ff48.js";import{a as t}from"./moment.8c3285c7.js";function n(e,s){return s.forEach((function(s){Object.keys(s).forEach((function(t){if("default"!==t&&!(t in e)){var n=Object.getOwnPropertyDescriptor(s,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return s[t]}})}}))})),Object.freeze(e)}var a,_={exports:{}};a=s,function(e){
//! moment.js locale configuration
var s={ss:"sekundes_sekundēm_sekunde_sekundes".split("_"),m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};function t(e,s,t){return t?s%10==1&&s%100!=11?e[2]:e[3]:s%10==1&&s%100!=11?e[0]:e[1]}function n(e,n,a){return e+" "+t(s[a],e,n)}function a(e,n,a){return t(s[a],e,n)}e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:function(e,s){return s?"dažas sekundes":"dažām sekundēm"},ss:n,m:a,mm:n,h:a,hh:n,d:a,dd:n,M:a,MM:n,y:a,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}("function"==typeof e?t.exports:a.moment);var i=_.exports,d=Object.freeze(n({__proto__:null,[Symbol.toStringTag]:"Module",default:i},[_.exports]));export{d as l};
//# sourceMappingURL=lv.6ec01d12.js.map