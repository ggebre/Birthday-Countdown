const daysSami = document.getElementById('daysSami')
const hoursSami = document.getElementById('hoursSami')
const secondsSami = document.getElementById('secondsSami')
const minuteSami = document.getElementById('minutesSami')

const birthdate = "04/26/2021"
function countDown(){
    const birthD = new Date(birthdate)
    const currentDate = new Date()

    const totalSeconds = (birthD - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60
    
    daysSami.innerText = days 
    hoursSami.innerText = formatTime(hours )
    secondsSami.innerText = formatTime(seconds)
    minuteSami.innerText = formatTime(minutes)
}
countDown()
setInterval(countDown, 1000)

function formatTime(time){
    let output;
    if (time === 0){
        output = '00'
    } else if(time < 10){
        output = `0${time}`
    }else{
        output = time 
    }
    return output
}
