radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(100)
    if (lijst.indexOf(receivedNumber) > 0) {
        punten += 1
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    }
    basic.showNumber(punten)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= aantal - 1; index++) {
        basic.showNumber(index + 1)
        basic.pause(1000)
        basic.showString(":")
        basic.showNumber(lijst[index + 1])
    }
})
let willekeurig = 0
let lijst: number[] = []
let punten = 0
let aantal = 0
radio.setGroup(0)
let max = 75
aantal = 3
punten = 0
basic.showNumber(punten)
lijst = []
for (let index = 0; index <= max; index++) {
    lijst.push(index)
}
for (let index = 0; index < max - aantal; index++) {
    willekeurig = randint(1, lijst.length - 1)
    lijst.removeAt(willekeurig)
}
