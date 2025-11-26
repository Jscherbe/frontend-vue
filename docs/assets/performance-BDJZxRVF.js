function s(n){requestAnimationFrame(()=>{const e=new MessageChannel;e.port1.onmessage=n,e.port2.postMessage(void 0)})}export{s as r};
