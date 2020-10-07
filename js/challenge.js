const pause = document.getElementById('pause')
const btPlus = document.getElementById('plus')
const btMinus = document.getElementById('minus')
let header = document.getElementById('counter')
let number = header.innerHTML
let num = parseInt(number)
const ul = document.querySelector('ul')
let li = document.createElement('li')
const heart = document.getElementById('heart')
const comment = document.getElementById('comment-input')
const button = document.getElementById('submit')
let paragraph = document.createElement('p')
let list = document.getElementById('list')
list.append(paragraph)

button.addEventListener('click', function(e){

   paragraph.append(comment.value)
   e.preventDefault()
})

heart.addEventListener('click', function(e){
 li.innerHTML = num
 ul.appendChild(li)
})

function timer(){
    header.innerHTML = num+=1
}

btPlus.addEventListener('click', function(e){
timer()
})

btMinus.addEventListener('click', function(e){
    header.innerHTML = num -=1
})

pause.addEventListener('click', function(e){
    if (pause.innerText === 'pause'){
        clearInterval(a)
        pause.innerText = 'resume'
    }
    else {
        pause.innerText === 'resume'
        header.innerHTML = 0
        num=0
        setInterval(timer, 1000)
        pause.innerText = 'pause'
    }
})




let a = setInterval(timer, 1000)
 





