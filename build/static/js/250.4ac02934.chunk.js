(this.webpackJsonpwafflow=this.webpackJsonpwafflow||[]).push([[250],{416:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(o>=r.length);u++){var s=i[u];if("string"==typeof s||s.content&&"string"==typeof s.content){var f=r[o],p=t.tokenStack[f],g="string"==typeof s?s:s.content,l=n(a,f),k=g.indexOf(l);if(-1<k){++o;var h=g.substring(0,k),m=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),d=g.substring(k+l.length),v=[];h&&v.push.apply(v,c([h])),v.push(m),d&&v.push.apply(v,c([d])),"string"==typeof s?i.splice.apply(i,[u,1].concat(v)):s.content=v}}else s.content&&c(s.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=250.4ac02934.chunk.js.map