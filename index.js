function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let ranked = document.querySelectorAll('.ranked-list > li');
  for (let i = 0; i < ranked.length; i++){
    let current = ranked[i];
    return parseInt(current.innerHTML) + n;
  }
}

function deepestChild(){

}
