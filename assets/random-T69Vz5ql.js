import{v as s}from"./eip712-D-BTAA-H.js";let t=!1;const n=function(r){return new Uint8Array(s(r))};let o=n;function e(r){return o(r)}e._=n;e.lock=function(){t=!0};e.register=function(r){if(t)throw new Error("randomBytes is locked");o=r};Object.freeze(e);export{e as r};
//# sourceMappingURL=random-T69Vz5ql.js.map
