if (typeof window==="undefined") {
  throw new Error("This SDK is Only for browsers.");
}
(function(t,a,s,k,p){k=t.Promise;s=a.createElement("script");s.src="http://chatmonday.com/utm/talk_init.js";s.async = true;a.head.appendChild(s);
	t.CML=false;t.Talk={v:1 , ready:{then:async function(f){ if(!t.CML && t.Talk.User === undefined){p=new k((res,rej)=>{s.onload=res;s.onerror=rej;t.Loaded=true;});
	await k.all([p]);}if(typeof f=="function")f();}}};})(window,document);
var Talk = window.Talk;
export default Talk;