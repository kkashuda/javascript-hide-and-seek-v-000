function getFirstSelector(selector) {
  const el = document.querySelector(selector)
  return el
}

function nestedTarget() {
  const el = document.querySelector('body #nested .target')
  return el
}

function increaseRankBy(n) {
  const elements = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = (parseInt(elements[i].innerHTML) + n).toString()
  }
  return elements
}

function deepestChild() {
  let n = document.getElementById('grand-node')
  let current = n.children[0]
  while (current) {
    n = current 
    current = n.children[0]
  }

  return n  
}