
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  onclick=alert('Thank you for clicking!');
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var doubleButton = document.querySelector('#compoundInvestment');
  doubleButton.innerHTML *= 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var bwCircle = document.querySelector('#circle-bw');
  if (bwCircle.style.backgroundColor !== 'black') {
  	bwCircle.style.backgroundColor = 'black'
  } else if (bwCircle.style.backgroundColor === 'black') {
  	bwCircle.style.backgroundColor = 'white'
  } 
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
	var redCircle = document.querySelector('.circle-red')
	var styleCirc = window.getComputedStyle(redCircle)
	var doubleWidthInt = parseInt(styleCirc.width) * 2
	var doubleHeightInt = parseInt(styleCirc.height) * 2
	if (parseInt(styleCirc.width) >= 320) {
		redCircle.style.width = '40px';
		redCircle.style.height = '40px'
	} else {
		redCircle.style.width = doubleWidthInt + "px"
		redCircle.style.height = doubleHeightInt + "px"
	}
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var clearInactive = function() {
  var ulNode = document.querySelector('#userList')
  var liArray = ulNode.children
  	for (var i = liArray.length - 1; i >= 0; i --) {
      	if(liArray[i].classList.contains('inactive')) {
        	ulNode.removeChild(liArray[i]) 
      	}
  	}
  }
  clearInactive()
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var flipNode = document.querySelector('#flipBoxes')
  var boxArray = flipNode.children
  for (var i = boxArray.length - 1; i >= 0; i--) {
    flipNode.appendChild(boxArray[i])
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var listNode = document.querySelector('#tasks')
  var listArray = listNode.children
  for (var i = 0; i < listArray.length; i++) {
    var split = listArray[i].innerHTML.split('')
    var rev = split.reverse()
    var join = rev.join('')
    listArray[i].innerHTML = join
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var imgCycle = document.querySelector('#city-img').src
  if (imgCycle === 'http://lorempixel.com/400/200/city/1') {
    document.querySelector('#city-img').src = 'http://lorempixel.com/400/200/city/2'
  } else if (imgCycle === 'http://lorempixel.com/400/200/city/2') {
    document.querySelector('#city-img').src = 'http://lorempixel.com/400/200/city/3'
  } else if (imgCycle === 'http://lorempixel.com/400/200/city/3') {
    document.querySelector('#city-img').src = 'http://lorempixel.com/400/200/city/4'
  } else if (imgCycle === 'http://lorempixel.com/400/200/city/4') {
    document.querySelector('#city-img').src = 'http://lorempixel.com/400/200/city/5'
  } else if (imgCycle === 'http://lorempixel.com/400/200/city/5') {
    document.querySelector('#city-img').src = 'http://lorempixel.com/400/200/city/6'
  } else if (imgCycle === 'http://lorempixel.com/400/200/city/6') {
    document.querySelector('#city-img').src = 'http://lorempixel.com/400/200/city/7'
  } else if (imgCycle === 'http://lorempixel.com/400/200/city/7') {
    document.querySelector('#city-img').src = 'http://lorempixel.com/400/200/city/8'
  } else if (imgCycle === 'http://lorempixel.com/400/200/city/8') {
    document.querySelector('#city-img').src = 'http://lorempixel.com/400/200/city/9'
  } else {
    document.querySelector('#city-img').src = 'http://lorempixel.com/400/200/city/1'
  }
})




