basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        led.plot(0, 2)
    } else {
        led.plot(0, 2)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        led.plot(4, 2)
    } else {
        led.plot(4, 2)
    }
    if (input.isGesture(Gesture.ScreenUp)) {
        led.plot(2, 2)
    } else {
        led.plot(2, 2)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        led.plot(2, 0)
    } else {
        led.plot(2, 0)
    }
})
