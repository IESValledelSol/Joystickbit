basic.showIcon(IconNames.Yes)
joystickbit.initJoystickBit()
radio.setGroup(23)
basic.forever(function () {
    radio.sendValue("X", joystickbit.getRockerValue(joystickbit.rockerType.X))
    radio.sendValue("Y", joystickbit.getRockerValue(joystickbit.rockerType.Y))
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendValue("C", 0)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendValue("F", 0)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendValue("D", 0)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendValue("E", 0)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("Q", 0)
    }
})
