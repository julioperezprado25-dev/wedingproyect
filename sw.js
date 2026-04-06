self.addEventListener("install",e=>{
e.waitUntil(
caches.open("cache").then(c=>{
return c.addAll(["/","/index.html"]);
})
);
});
