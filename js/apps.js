const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

let topMenuLinks = menuLinks.forEach(function(link){
    let a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.innerText = link.text;
    topMenuEl.appendChild(a);
});

topMenuEl.addEventListener('click', function()){

}
let showingSubMenu = false

let subMenuEl = document.getElementById('sub-menu')
subMenuEl.style.height = '100%'
subMenuEl.style.background = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'