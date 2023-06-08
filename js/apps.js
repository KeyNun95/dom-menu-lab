const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.classList.add('flex-ctr')
console.log(mainEl);

let topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.background = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')
console.log(topMenuEl);

menuLinks.forEach(function(link){
    let a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.innerText = link.text;
    topMenuEl.appendChild(a);
});