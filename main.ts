joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendValue("E", 0)
    colour = 0
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.up, function () {
    radio.sendValue("D", -1)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendValue("D", colour)
    if (colour <= 2) {
        colour = colour + 1
    } else {
        colour = 0
    }
})
let colour = 0
joystickbit.initJoystickBit()
radio.setGroup(23)
colour = 0
basic.forever(function () {
    radio.sendValue("X", joystickbit.getRockerValue(joystickbit.rockerType.X))
    radio.sendValue("Y", joystickbit.getRockerValue(joystickbit.rockerType.Y))
})
