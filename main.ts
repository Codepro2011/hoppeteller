let Hopp = 0
input.onGesture(Gesture.Shake, function () {
    Hopp += 1
})
basic.forever(function () {
    basic.showNumber(Hopp)
})
