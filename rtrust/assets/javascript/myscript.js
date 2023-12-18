
const archiveItem = document.getElementsByClassName("p-top-news__archive__inner");
archiveSelect(0);
function archiveSelect(a) {
  archiveItem[0].style.display = "none";
  archiveItem[1].style.display = "none";
  archiveItem[a].style.display = "block";
}

var headerLinks = document.getElementsByClassName('l-header__nav__item');
for (let i = 0; i < 5; i ++) {
  headerLinks[i].addEventListener('click',() => {
    if(document.body.classList.contains('menu-open')){
      document.body.classList.remove('menu-open');
      document.documentElement.removeAttribute('style');
      document.body.removeAttribute('style');
    }
  })

}