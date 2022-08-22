const hourBox = document.querySelector('.hour')
const minuteBox = document.querySelector('.minute')
const secondBox = document.querySelector('.second')
const msecondBox = document.querySelector('.msecond')

const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const roundtBtn = document.querySelector('.round')

startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
pauseBtn.addEventListener('click', () => {
    clearInterval(interval)
    roundtBtn.addEventListener('click', () => {
        disableRound()
    })
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    clearTimer()
    disableRound()
})

let roundCounter = 0
roundtBtn.addEventListener('click', () => {
    roundCounter++
    counter()

})

let hour = 00
let minute = 00
let second = 00
let msecond = 00
let interval
let disabled = true

    function startTimer() {
        msecond++
        if (msecond < 9) {
            msecondBox.innerHTML = '0' + msecond
        } if (msecond > 9) {
            msecondBox.innerHTML = msecond
        } if (msecond > 99) {
            second++
            secondBox.innerHTML = '0' + second
            msecond = 0
            msecondBox.innerHTML = '0' + msecond
        } if (second > 9) {
            secondBox.innerHTML = second
        } if (second > 59) {
            minute++
            minuteBox.innerHTML = '0' + minute
            second = 0
            secondBox.innerHTML = '0' + second
        } if (minute > 9){
            minuteBox.innerHTML = minute
        }
        if (minute > 59) {
            hour++
            hourBox.innerHTML = '0' + hour
            minute = 0
            minuteBox.innerHTML = '0' + minute
        }   if (hour > 9) {
            hourBox.innerHTML = hour
        }

        roundtBtn.disabled = false
        
    }

    function clearTimer(){
        hour = 00
        minute = 00
        second = 00
        msecond = 00
        hourBox.textContent = '00'
        minuteBox.textContent = '00'
        secondBox.textContent = '00'
        msecondBox.textContent = '00'
    }

    let listResult = []
    function counter(){
        const result = document.querySelector('.result')
        const block = document.createElement('div')
        result.append(block)
        let blockInner = `ROUND ${roundCounter}: ${hour > 9 ? hour : '0' + hour}:${minute > 9 ? minute : '0' + minute}:${second > 9 ? second : '0' + second}:${msecond > 9 ? msecond : '0' + msecond}`
        block.innerText = blockInner
        if (roundCounter > 30) {
            roundCounter = 0
            result.innerText = ''
        }
        listResult.push(blockInner)
    }

    function disableRound(){
        if(disabled){
            roundtBtn.disabled = true
        }
    }
    disableRound()



