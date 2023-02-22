gsap.from('.logo', {duration: 1, opacity:0, ease: "power2.in", x:'-3%'})
gsap.from('li', {duration: 0.7, opacity:0, delay:0.2, stagger: 0.1, x:'-6%'})
gsap.from('.title', {duration: 0.5, opacity:0, delay:0.5, ease: "power2.in", y:'5%'})
gsap.from('.tagline', {duration: 0.5, opacity:0, delay:0.8, ease: "power2.in", y:'6%'})
gsap.from('p', {duration: 0.5, opacity:0, delay: 1, ease: "power2.in", y:'8%'})
gsap.from('img', {duration: 5, delay: 1, ease: CustomEase.create("custom", "M0,0,C0.14,0,0.091,0.879,0.154,0.99,0.18,1.036,0.272,0.817,0.28,0.854,0.288,0.839,0.377,1.062,0.418,1,0.473,0.915,0.517,0.911,0.53,0.92,0.606,0.97,0.611,0.983,0.618,1,0.68,0.916,0.691,0.93,0.71,0.944,0.729,0.958,0.756,0.987,0.77,1,0.781,0.996,0.884,0.954,0.884,0.954,0.899,0.954,1,1,1,1"), y:'-200%'})


