import React from "react";
{/* TODO: Replace with your map embed */}
<iframe
title="Map"
className="w-full h-[420px]"
src="https://maps.google.com/maps?q=Los%20Gatos%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
loading="lazy"
/>
</div>
</div>
</Container>
</Section>
);
}


function Footer() {
return (
<footer className="border-t border-white/5 py-10 bg-neutral-950">
<Container>
<div className="grid md:grid-cols-4 gap-8 text-sm">
<div>
<div className="font-semibold">{CAS.name}</div>
<div className="text-neutral-400 mt-2 max-w-xs">Trusted local shop for maintenance, diagnostics, smog, and performance builds.</div>
</div>
<div>
<div className="text-neutral-400">Quick Links</div>
<ul className="mt-2 space-y-2">
{nav.map((n) => (
<li key={n.id}><a className="hover:text-amber-400" href={`#${n.id}`}>{n.label}</a></li>
))}
</ul>
</div>
<div>
<div className="text-neutral-400">Contact</div>
<ul className="mt-2 space-y-2">
<li>{CAS.phone}</li>
<li>{CAS.email}</li>
<li>{CAS.address}</li>
</ul>
</div>
<div>
<div className="text-neutral-400">Legal</div>
<ul className="mt-2 space-y-2">
<li><a href="#" className="hover:text-amber-400">Privacy Policy</a></li>
<li><a href="#" className="hover:text-amber-400">Terms</a></li>
</ul>
</div>
</div>
<div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} {CAS.name}. All rights reserved.</div>
</Container>
</footer>
);
}


function BackToTop() {
const [show, setShow] = useState(false);
useEffect(() => {
const onScroll = () => setShow(window.scrollY > 700);
window.addEventListener("scroll", onScroll);
return () => window.removeEventListener("scroll", onScroll);
}, []);
if (!show) return null;
return (
<button
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
className="fixed bottom-6 right-6 rounded-full px-4 py-3 text-sm font-semibold bg-amber-500 text-neutral-900 shadow-xl"
aria-label="Back to top"
>
↑ Top
</button>
);
}