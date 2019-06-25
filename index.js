function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementsByClassName('#nested > .target')
}

function increaseRankBy(n){
  let ranked = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < ranked.length; i++){
    let current = ranked[i];
    if(typeof current === 'number'){return current += n}
  }
}

function deepestChild(){

}
