// Calibration mode on Button A press
input.onButtonPressed(Button.A, function () {
    if (calibrationStep == 0) {
        radio.sendValue("calibrate_start", 1)
        calibrationStep = 1
        basic.showIcon(IconNames.Target)
    } else if (calibrationStep == 1) {
        radio.sendValue("calibrate_set", 1)
        calibrationStep = 0
        basic.showIcon(IconNames.Yes)
    }
})
// Reset on Button A + B press
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("reset", 1)
    repCount1 = 0
    repCount2 = 0
    score1 = 0
    score2 = 0
    running = false
    simulate = false
    basic.clearScreen()
})
// Action mode on Button B press
input.onButtonPressed(Button.B, function () {
    if (!(simulate)) {
        radio.sendValue("action", 1)
        running = true
    } else {
        simulate = false
        running = false
        basic.clearScreen()
    }
})
// Handle received values for pitch, roll, rep time, scores, and sensor data
radio.onReceivedValue(function (name, value) {
    if (name == "calibrated1" || name == "calibrated2") {
        basic.showIcon(IconNames.Target)
    } else if (name == "pitch1") {
        serial.writeValue(name, value)
    } else if (name == "roll1") {
        serial.writeValue(name, value)
    } else if (name == "pitch2") {
        serial.writeValue(name, value)
    } else if (name == "roll2") {
        serial.writeValue(name, value)
    } else if (name == "repTime1") {
        repCount1 += 1
        basic.showNumber(repCount1)
        serial.writeValue("repCount1", repCount1)
    } else if (name == "repTime2") {
        repCount2 += 1
        basic.showNumber(repCount2)
        serial.writeValue("repCount2", repCount2)
    } else if (name == "score1") {
        score1 = value
        basic.showNumber(score1)
        serial.writeValue("score1", score1)
    } else if (name == "score2") {
        score2 = value
        basic.showNumber(score2)
        serial.writeValue("score2", score2)
    } else if (name == "ax1") {
        ax1 = value
    } else if (name == "ay1") {
        ay1 = value
    } else if (name == "az1") {
        az1 = value
    } else if (name == "mx1") {
        mx1 = value
    } else if (name == "my1") {
        my1 = value
    } else if (name == "mz1") {
        mz1 = value
    } else if (name == "ax2") {
        ax2 = value
    } else if (name == "ay2") {
        ay2 = value
    } else if (name == "az2") {
        az2 = value
    } else if (name == "mx2") {
        mx2 = value
    } else if (name == "my2") {
        my2 = value
    } else if (name == "mz2") {
        mz2 = value
    }
})
// Toggle simulation mode on logo press
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    simulate = !(simulate)
    if (simulate) {
        running = true
        basic.showIcon(IconNames.Diamond)
    } else {
        running = false
        basic.clearScreen()
    }
})
let simulatedScore2 = 0
let simulatedRepTime2 = 0
let simulatedRoll2 = 0
let simulatedPitch2 = 0
let simulatedScore1 = 0
let simulatedRepTime1 = 0
let simulatedRoll1 = 0
let simulatedPitch1 = 0
let mz2 = 0
let my2 = 0
let mx2 = 0
let az2 = 0
let ay2 = 0
let ax2 = 0
let mz1 = 0
let my1 = 0
let mx1 = 0
let az1 = 0
let ay1 = 0
let ax1 = 0
let simulate = false
let running = false
let score2 = 0
let score1 = 0
let repCount2 = 0
let repCount1 = 0
let calibrationStep = 0
// Set radio group
radio.setGroup(10)
basic.forever(function () {
    if (simulate) {
        simulatedPitch1 = Math.randomRange(0, 90)
        simulatedRoll1 = Math.randomRange(0, 90)
        simulatedRepTime1 = Math.randomRange(1000, 3000)
        simulatedScore1 = Math.randomRange(0, 10)
        simulatedPitch2 = Math.randomRange(0, 90)
        simulatedRoll2 = Math.randomRange(0, 90)
        simulatedRepTime2 = Math.randomRange(1000, 3000)
        simulatedScore2 = Math.randomRange(0, 10)
        radio.sendValue("pitch1", simulatedPitch1)
        radio.sendValue("roll1", simulatedRoll1)
        radio.sendValue("repTime1", simulatedRepTime1)
        radio.sendValue("score1", simulatedScore1)
        radio.sendValue("pitch2", simulatedPitch2)
        radio.sendValue("roll2", simulatedRoll2)
        radio.sendValue("repTime2", simulatedRepTime2)
        radio.sendValue("score2", simulatedScore2)
        radio.sendValue("ax1", Math.randomRange(-1024, 1024))
        radio.sendValue("ay1", Math.randomRange(-1024, 1024))
        radio.sendValue("az1", Math.randomRange(-1024, 1024))
        radio.sendValue("mx1", Math.randomRange(-512, 512))
        radio.sendValue("my1", Math.randomRange(-512, 512))
        radio.sendValue("mz1", Math.randomRange(-512, 512))
        radio.sendValue("ax2", Math.randomRange(-1024, 1024))
        radio.sendValue("ay2", Math.randomRange(-1024, 1024))
        radio.sendValue("az2", Math.randomRange(-1024, 1024))
        radio.sendValue("mx2", Math.randomRange(-512, 512))
        radio.sendValue("my2", Math.randomRange(-512, 512))
        radio.sendValue("mz2", Math.randomRange(-512, 512))
    }
})
// Data logging and simulation
loops.everyInterval(100, function () {
	
})
