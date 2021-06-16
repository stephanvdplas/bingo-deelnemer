radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(500)
    if (lijst.indexOf(receivedNumber) > 0) {
        punten += 1
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
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
aantal = 5
punten = 0
basic.showString("Max:")
basic.showNumber(max)
basic.showString(" Aantal:")
basic.showNumber(aantal)
lijst = []
for (let index = 0; index <= max; index++) {
    lijst.push(index)
}
for (let index = 0; index < max - aantal; index++) {
    willekeurig = randint(1, lijst.length - 1)
    lijst.removeAt(willekeurig)
}
basic.pause(1000)
basic.showIcon(IconNames.Square)
