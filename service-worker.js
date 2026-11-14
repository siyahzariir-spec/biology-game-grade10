const V='bio10-v1',F=['./','index.html','manifest.json','css/style.css','js/storage.js','js/quiz-engine.js','js/app.js','data/chapters.js','data/questions.js','assets/icons/icon.svg','assets/fonts/vazirmatn.woff2'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
