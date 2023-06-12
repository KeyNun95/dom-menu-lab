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

let subMenuEl = document.getElementById('sub-menu')
subMenuEl.style.height = '100%'
subMenuEl.style.background = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

menuLinks.forEach(function(link){
    let a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.innerText = link.text;
    topMenuEl.appendChild(a);
    console.log(a);
});

let topMenuLinks = topMenuEl.querySelectorAll('a');
console.log(topMenuLinks);

let showingSubMenu = false;

topMenuEl.addEventListener('click', topLinks)
function topLinks(event){
  event.preventDefault();
  if (event.target.tagName !== 'A')
    

    if (event.target.classList.contains('active')){
      event.target.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = 0;
      return;
    };

    for(let i = 0; i < topMenuLinks.length; i++){
      topMenuLinks[i].classList.remove('active');
    }
    
    event.target.classList.add('active');
    
    let linkData = menuLinks.find(function(linkObject){
      return linkObject.text === event.target.textContent
    })
    console.log(linkData);

    showingSubMenu = 'subLinks' in linkData;
    console.log(showingSubMenu);

    if(showingSubMenu === true){
      buildSubMenu(linkData.subLinks);
      subMenuEl.style.top = '100';
    }else{subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>About</h1>'}
}

function buildSubMenu(subLinks){
  subLinks.forEach(function(subMenuObj){
    subMenuEl.innerHTML = "";
    let subMenuObjEl = document.createElement('a');
  subMenuObjEl.setAttribute('href',subMenuObj.href);
  subMenuObjEl.innerText = subMenuObj.text;
  subMenuEl.appendChild(subMenuObjEl);
  subMenuEl.style.top = '100%';
  })
  return;
}

subMenuEl.addEventListener('click', subMenuClick);
function subMenuClick(event){
  event.preventDefault();
  if(event.target.tagName !== 'A')
  console.log(event.target);

  showingSubMenu = false;
  subMenuEl.style.top = '0';
  mainEl.innterHTML = '<h1>${event.target.innerText}</h1>';
}

topMenuLinks.forEach(function(subMenuObj){
  subMenuObj.classList.remove('active');
})