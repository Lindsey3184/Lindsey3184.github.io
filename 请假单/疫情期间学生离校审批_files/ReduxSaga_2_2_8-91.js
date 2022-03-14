var ReduxSaga=function(n){function t(t){for(var r,u,a=t[0],i=t[1],f=t[2],s=0,v=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&v.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);for(l&&l(t);v.length;)v.shift()();return c.push.apply(c,f||[]),e()}function e(){for(var n,t=0;t<c.length;t++){for(var e=c[t],r=!0,a=1;a<e.length;a++){var i=e[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),n=u(u.s=e[0]))}return n}var r={},o={6:0},c=[];function u(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=n,u.c=r,u.d=function(n,t,e){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,t){if(1&t&&(n=u(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)u.d(e,r,function(t){return n[t]}.bind(null,r));return e},u.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="";var a=window.webpackJsonp_name_=window.webpackJsonp_name_||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var f=0;f<a.length;f++)t(a[f]);var l=i;return c.push([775,0]),e()}({775:function(n,t,e){"use strict";e.r(t),e.d(t,"CANCEL",(function(){return o})),e.d(t,"SAGA_LOCATION",(function(){return p})),e.d(t,"buffers",(function(){return X})),e.d(t,"detach",(function(){return V})),e.d(t,"END",(function(){return hn})),e.d(t,"channel",(function(){return yn})),e.d(t,"eventChannel",(function(){return bn})),e.d(t,"isEnd",(function(){return gn})),e.d(t,"multicastChannel",(function(){return En})),e.d(t,"runSaga",(function(){return In})),e.d(t,"stdChannel",(function(){return mn}));var r=function(n){return"@@redux-saga/"+n},o=r("CANCEL_PROMISE"),c=r("CHANNEL_END"),u=r("IO"),a=r("MATCH"),i=r("MULTICAST"),f=r("SAGA_ACTION"),l=r("SELF_CANCELLATION"),s=r("TASK"),v=r("TASK_CANCEL"),d=r("TERMINATE"),p=r("LOCATION"),h=e(16),g=e(42),y=function(n){return null==n},b=function(n){return null!=n},E=function(n){return"function"==typeof n},m=function(n){return"string"==typeof n},S=Array.isArray,O=function(n){return n&&E(n.then)},A=function(n){return n&&E(n.next)&&E(n.throw)},C=function(n){return Boolean(n)&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype};var j=function(n){return function(){return n}}(!0),k=function(){};var T=function(n){return n};"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var w=function(n,t){Object(h.a)(n,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach((function(e){n[e]=t[e]}))};function x(n,t){var e=n.indexOf(t);e>=0&&n.splice(e,1)}function N(n){var t=!1;return function(){t||(t=!0,n())}}var _=function(n){throw n},M=function(n){return{value:n,done:!0}};function R(n,t,e){void 0===t&&(t=_),void 0===e&&(e="iterator");var r={meta:{name:e},next:n,throw:t,return:M,isSagaIterator:!0};return"undefined"!=typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function L(n,t){var e=t.sagaStack;console.error(n),console.error(e)}var I=function(n){return Array.apply(null,new Array(n))},P=function(n){return function(t){return n(Object.defineProperty(t,f,{value:!0}))}},D=function(n){return n===d},K=function(n){return n===v},F=function(n){return D(n)||K(n)};function H(n,t){var e=Object.keys(n),r=e.length;var o,c=0,u=S(n)?I(r):{},a={};return e.forEach((function(n){var e=function(e,a){o||(a||F(e)?(t.cancel(),t(e,a)):(u[n]=e,++c===r&&(o=!0,t(u))))};e.cancel=k,a[n]=e})),t.cancel=function(){o||(o=!0,e.forEach((function(n){return a[n].cancel()})))},a}function q(n){return{name:n.name||"anonymous",location:z(n)}}function z(n){return n[p]}var G={isEmpty:j,put:k,take:k};function J(n,t){void 0===n&&(n=10);var e=new Array(n),r=0,o=0,c=0,u=function(t){e[o]=t,o=(o+1)%n,r++},a=function(){if(0!=r){var t=e[c];return e[c]=null,r--,c=(c+1)%n,t}},i=function(){for(var n=[];r;)n.push(a());return n};return{isEmpty:function(){return 0==r},put:function(a){var f;if(r<n)u(a);else switch(t){case 1:throw new Error("Channel's Buffer overflow!");case 3:e[o]=a,c=o=(o+1)%n;break;case 4:f=2*n,e=i(),r=e.length,o=e.length,c=0,e.length=f,n=f,u(a)}},take:a,flush:i}}var U=function(){return G},B=function(n){return J(n,4)},X=Object.freeze({__proto__:null,none:U,fixed:function(n){return J(n,1)},dropping:function(n){return J(n,2)},sliding:function(n){return J(n,3)},expanding:B}),Q=function(n,t){var e;return(e={})[u]=!0,e.combinator=!1,e.type=n,e.payload=t,e},V=function(n){return Q("FORK",Object(h.a)({},n.payload,{detached:!0}))};e(85);var W=function(){return Math.random().toString(36).substring(7).split("").join(".")};W(),W();function Y(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return 0===t.length?function(n){return n}:1===t.length?t[0]:t.reduce((function(n,t){return function(){return n(t.apply(void 0,arguments))}}))}function Z(){var n={};return n.promise=new Promise((function(t,e){n.resolve=t,n.reject=e})),n}var $=Z,nn=[],tn=0;function en(n){try{cn(),n()}finally{un()}}function rn(n){nn.push(n),tn||(cn(),an())}function on(n){try{return cn(),n()}finally{an()}}function cn(){tn++}function un(){tn--}function an(){var n;for(un();!tn&&void 0!==(n=nn.shift());)en(n)}var fn=function(n){return function(t){return n.some((function(n){return pn(n)(t)}))}},ln=function(n){return function(t){return n(t)}},sn=function(n){return function(t){return t.type===String(n)}},vn=function(n){return function(t){return t.type===n}},dn=function(){return j};function pn(n){var t,e="*"===n?dn:m(n)?sn:S(n)?fn:E(t=n)&&t.hasOwnProperty("toString")?sn:E(n)?ln:C(n)?vn:null;if(null===e)throw new Error("invalid pattern: "+n);return e(n)}var hn={type:c},gn=function(n){return n&&n.type===c};function yn(n){void 0===n&&(n=B());var t=!1,e=[];return{take:function(r){t&&n.isEmpty()?r(hn):n.isEmpty()?(e.push(r),r.cancel=function(){x(e,r)}):r(n.take())},put:function(r){if(!t){if(0===e.length)return n.put(r);e.shift()(r)}},flush:function(e){t&&n.isEmpty()?e(hn):e(n.flush())},close:function(){if(!t){t=!0;var n=e;e=[];for(var r=0,o=n.length;r<o;r++){(0,n[r])(hn)}}}}}function bn(n,t){void 0===t&&(t=U());var e,r=!1,o=yn(t),c=function(){r||(r=!0,E(e)&&e(),o.close())};return e=N(e=n((function(n){gn(n)?c():o.put(n)}))),r&&e(),{take:o.take,flush:o.flush,close:c}}function En(){var n,t=!1,e=[],r=e;var o=function(){r===e&&(r=e.slice())},c=function(){t=!0;var n=e=r;r=[],n.forEach((function(n){n(hn)}))};return(n={})[i]=!0,n.put=function(n){if(!t)if(gn(n))c();else for(var o=e=r,u=0,i=o.length;u<i;u++){var f=o[u];f[a](n)&&(f.cancel(),f(n))}},n.take=function(n,e){void 0===e&&(e=dn),t?n(hn):(n[a]=e,o(),r.push(n),n.cancel=N((function(){o(),x(r,n)})))},n.close=c,n}function mn(){var n=En(),t=n.put;return n.put=function(n){n[f]?t(n):rn((function(){t(n)}))},n}function Sn(n,t){var e=n[o];E(e)&&(t.cancel=e),n.then(t,(function(n){t(n,!0)}))}var On,An=0,Cn=function(){return++An};function jn(n){n.isRunning()&&n.cancel()}var kn=((On={}).TAKE=function(n,t,e){var r=t.channel,o=void 0===r?n.channel:r,c=t.pattern,u=t.maybe,a=function(n){n instanceof Error?e(n,!0):!gn(n)||u?e(n):e(d)};try{o.take(a,b(c)?pn(c):null)}catch(n){return void e(n,!0)}e.cancel=a.cancel},On.PUT=function(n,t,e){var r=t.channel,o=t.action,c=t.resolve;rn((function(){var t;try{t=(r?r.put:n.dispatch)(o)}catch(n){return void e(n,!0)}c&&O(t)?Sn(t,e):e(t)}))},On.ALL=function(n,t,e,r){var o=r.digestEffect,c=An,u=Object.keys(t);if(0!==u.length){var a=H(t,e);u.forEach((function(n){o(t[n],c,a[n],n)}))}else e(S(t)?[]:{})},On.RACE=function(n,t,e,r){var o=r.digestEffect,c=An,u=Object.keys(t),a=S(t)?I(u.length):{},i={},f=!1;u.forEach((function(n){var t=function(t,r){f||(r||F(t)?(e.cancel(),e(t,r)):(e.cancel(),f=!0,a[n]=t,e(a)))};t.cancel=k,i[n]=t})),e.cancel=function(){f||(f=!0,u.forEach((function(n){return i[n].cancel()})))},u.forEach((function(n){f||o(t[n],c,i[n],n)}))},On.CALL=function(n,t,e,r){var o=t.context,c=t.fn,u=t.args,a=r.task;try{var i=c.apply(o,u);if(O(i))return void Sn(i,e);if(A(i))return void Ln(n,i,a.context,An,q(c),!1,e);e(i)}catch(n){e(n,!0)}},On.CPS=function(n,t,e){var r=t.context,o=t.fn,c=t.args;try{var u=function(n,t){y(n)?e(t):e(n,!0)};o.apply(r,c.concat(u)),u.cancel&&(e.cancel=u.cancel)}catch(n){e(n,!0)}},On.FORK=function(n,t,e,r){var o=t.context,c=t.fn,u=t.args,a=t.detached,i=r.task,f=function(n){var t=n.context,e=n.fn,r=n.args;try{var o=e.apply(t,r);if(A(o))return o;var c=!1;return R((function(n){return c?{value:n,done:!0}:(c=!0,{value:o,done:!O(o)})}))}catch(n){return R((function(){throw n}))}}({context:o,fn:c,args:u}),l=function(n,t){return n.isSagaIterator?{name:n.meta.name}:q(t)}(f,c);on((function(){var t=Ln(n,f,i.context,An,l,a,void 0);a?e(t):t.isRunning()?(i.queue.addTask(t),e(t)):t.isAborted()?i.queue.abort(t.error()):e(t)}))},On.JOIN=function(n,t,e,r){var o=r.task,c=function(n,t){if(n.isRunning()){var e={task:o,cb:t};t.cancel=function(){n.isRunning()&&x(n.joiners,e)},n.joiners.push(e)}else n.isAborted()?t(n.error(),!0):t(n.result())};if(S(t)){if(0===t.length)return void e([]);var u=H(t,e);t.forEach((function(n,t){c(n,u[t])}))}else c(t,e)},On.CANCEL=function(n,t,e,r){var o=r.task;t===l?jn(o):S(t)?t.forEach(jn):jn(t),e()},On.SELECT=function(n,t,e){var r=t.selector,o=t.args;try{e(r.apply(void 0,[n.getState()].concat(o)))}catch(n){e(n,!0)}},On.ACTION_CHANNEL=function(n,t,e){var r=t.pattern,o=yn(t.buffer),c=pn(r),u=function t(e){gn(e)||n.channel.take(t,c),o.put(e)},a=o.close;o.close=function(){u.cancel(),a()},n.channel.take(u,c),e(o)},On.CANCELLED=function(n,t,e,r){e(r.task.isCancelled())},On.FLUSH=function(n,t,e){t.flush(e)},On.GET_CONTEXT=function(n,t,e,r){e(r.task.context[t])},On.SET_CONTEXT=function(n,t,e,r){var o=r.task;w(o.context,t),e()},On);function Tn(n,t){return n+"?"+t}function wn(n){var t=n.name,e=n.location;return e?t+"  "+Tn(e.fileName,e.lineNumber):t}var xn=null,Nn=[],_n=function(){xn=null,Nn.length=0},Mn=function(){var n,t,e,r,o,c,u,a=Nn[0],i=Nn.slice(1),f=a.crashedEffect?(n=a.crashedEffect,(t=z(n))?t.code+"  "+Tn(t.fileName,t.lineNumber):""):null;return["The above error occurred in task "+wn(a.meta)+(f?" \n when executing effect "+f:"")].concat(i.map((function(n){return"    created by "+wn(n.meta)})),[(e=Nn,r=function(n){return n.cancelledTasks},o=e,u=(c=[]).concat.apply(c,o.map(r)),u.length?["Tasks cancelled due to error:"].concat(u).join("\n"):"")]).join("\n")};function Rn(n,t,e,r,o,c,u){var a;void 0===u&&(u=k);var i,f,l=0,d=null,p=[],h=Object.create(e),g=function(n,t,e){var r,o=[],c=!1;function u(n){t(),i(),e(n,!0)}function a(t){o.push(t),t.cont=function(a,i){c||(x(o,t),t.cont=k,i?u(a):(t===n&&(r=a),o.length||(c=!0,e(r))))}}function i(){c||(c=!0,o.forEach((function(n){n.cont=k,n.cancel()})),o=[])}return a(n),{addTask:a,cancelAll:i,abort:u,getTasks:function(){return o}}}(t,(function(){p.push.apply(p,g.getTasks().map((function(n){return n.meta.name})))}),y);function y(t,e){if(e){if(l=2,(c={meta:o,cancelledTasks:p}).crashedEffect=xn,Nn.push(c),b.isRoot){var r=Mn();_n(),n.onError(t,{sagaStack:r})}f=t,d&&d.reject(t)}else t===v?l=1:1!==l&&(l=3),i=t,d&&d.resolve(t);var c;b.cont(t,e),b.joiners.forEach((function(n){n.cb(t,e)})),b.joiners=null}var b=((a={})[s]=!0,a.id=r,a.meta=o,a.isRoot=c,a.context=h,a.joiners=[],a.queue=g,a.cancel=function(){0===l&&(l=1,g.cancelAll(),y(v,!1))},a.cont=u,a.end=y,a.setContext=function(n){w(h,n)},a.toPromise=function(){return d||(d=$(),2===l?d.reject(f):0!==l&&d.resolve(i)),d.promise},a.isRunning=function(){return 0===l},a.isCancelled=function(){return 1===l||0===l&&1===t.status},a.isAborted=function(){return 2===l},a.result=function(){return i},a.error=function(){return f},a);return b}function Ln(n,t,e,r,o,c,a){var i=n.finalizeRunEffect((function(t,e,r){if(O(t))Sn(t,r);else if(A(t))Ln(n,t,l.context,e,o,!1,r);else if(t&&t[u]){(0,kn[t.type])(n,t.payload,r,s)}else r(t)}));d.cancel=k;var f={meta:o,cancel:function(){0===f.status&&(f.status=1,d(v))},status:0},l=Rn(n,f,e,r,o,c,a),s={task:l,digestEffect:p};return a&&(a.cancel=l.cancel),d(),l;function d(n,e){try{var o;e?(o=t.throw(n),_n()):K(n)?(f.status=1,d.cancel(),o=E(t.return)?t.return(v):{done:!0,value:v}):o=D(n)?E(t.return)?t.return():{done:!0}:t.next(n),o.done?(1!==f.status&&(f.status=3),f.cont(o.value)):p(o.value,r,d)}catch(n){if(1===f.status)throw n;f.status=2,f.cont(n,!0)}}function p(t,e,r,o){void 0===o&&(o="");var c,u=Cn();function a(e,o){c||(c=!0,r.cancel=k,n.sagaMonitor&&(o?n.sagaMonitor.effectRejected(u,e):n.sagaMonitor.effectResolved(u,e)),o&&function(n){xn=n}(t),r(e,o))}n.sagaMonitor&&n.sagaMonitor.effectTriggered({effectId:u,parentEffectId:e,label:o,effect:t}),a.cancel=k,r.cancel=function(){c||(c=!0,a.cancel(),a.cancel=k,n.sagaMonitor&&n.sagaMonitor.effectCancelled(u))},i(t,u,a)}}function In(n,t){var e=n.channel,r=void 0===e?mn():e,o=n.dispatch,c=n.getState,u=n.context,a=void 0===u?{}:u,i=n.sagaMonitor,f=n.effectMiddlewares,l=n.onError,s=void 0===l?L:l;for(var v=arguments.length,d=new Array(v>2?v-2:0),p=2;p<v;p++)d[p-2]=arguments[p];var h=t.apply(void 0,d);var g,y=Cn();if(i&&(i.rootSagaStarted=i.rootSagaStarted||k,i.effectTriggered=i.effectTriggered||k,i.effectResolved=i.effectResolved||k,i.effectRejected=i.effectRejected||k,i.effectCancelled=i.effectCancelled||k,i.actionDispatched=i.actionDispatched||k,i.rootSagaStarted({effectId:y,saga:t,args:d})),f){var b=Y.apply(void 0,f);g=function(n){return function(t,e,r){return b((function(t){return n(t,e,r)}))(t)}}}else g=T;var E={channel:r,dispatch:P(o),getState:c,sagaMonitor:i,onError:s,finalizeRunEffect:g};return on((function(){var n=Ln(E,h,a,y,q(t),!0,void 0);return i&&i.effectResolved(y,n),n}))}var Pn=function(n){var t,e=void 0===n?{}:n,r=e.context,o=void 0===r?{}:r,c=e.channel,u=void 0===c?mn():c,a=e.sagaMonitor,i=Object(g.a)(e,["context","channel","sagaMonitor"]);function f(n){var e=n.getState,r=n.dispatch;return t=In.bind(null,Object(h.a)({},i,{context:o,channel:u,dispatch:r,getState:e,sagaMonitor:a})),function(n){return function(t){a&&a.actionDispatched&&a.actionDispatched(t);var e=n(t);return u.put(t),e}}}return f.run=function(){return t.apply(void 0,arguments)},f.setContext=function(n){w(o,n)},f};t.default=Pn}});
//# sourceMappingURL=ReduxSaga_2_2_8-91.js?1617951230152.map