let hours = 0
let minutes = 0
let temperature = 0
let distance = 0
input.onButtonPressed(Button.A, function () {
    hours += 1
})
// Created by: Rodas N + Aidan L-N
// 
// Created On: Nov 4 2020
// 
// This program is the conglomeration of all the code to be downloaded on the clock. When pressing A and B at the same time, it will display the time, temperature, and distance. To change the time in RTC, you can press A for one added hour and B for one added minute and the cycle of time continues when it goes past 23:59.
input.onButtonPressed(Button.AB, function () {
    if (minutes < 10) {
        basic.showString("" + hours + ":" + "0" + minutes)
        basic.pause(500)
        basic.showString("" + (temperature))
        basic.pause(500)
        basic.showString("" + (distance))
    } else {
        basic.showString("" + hours + ":" + minutes)
        basic.pause(500)
        basic.showString("" + (temperature))
        basic.pause(500)
        basic.showString("" + (distance))
    }
})
input.onButtonPressed(Button.B, function () {
    minutes += 1
})
basic.forever(function () {
    basic.pause(500)
    temperature = input.temperature()
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
basic.forever(function () {
    basic.pause(60000)
    minutes += 1
})
basic.forever(function () {
    basic.pause(50)
    if (minutes > 59) {
        minutes = minutes - 60
        hours += 1
    }
    if (hours > 23) {
        hours = hours - 24
    }
})
