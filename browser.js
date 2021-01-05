if (typeof window==="undefined") {
  throw new Error("This SDK is Only for browsers.");
}
(function(t,a,s,k,p){k=t.Promise;s=a.createElement("script");s.src="http://chatmonday.com/utm/talk_init.js";s.async = true;a.head.appendChild(s);
	t.Talk={v:1 , ready:{then:async function(f){p=new k((res,rej)=>{s.onload=res;s.onerror=rej;});await k.all([p]);if(typeof f=="function")f();}}};})(window,document);
var Talk = window.Talk;
export default Talk;
