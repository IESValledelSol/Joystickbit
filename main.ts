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
basic.showIcon(IconNames.Yes)
joystickbit.initJoystickBit()
radio.setGroup(23)
colour = 0
// If a tool is used change the value to 1
// If a tool as a excavator bucket is installed on servo S2, the 'C' and 'F' button will be used to move it.
// 
// Otherwise the 'C' and 'F' button will move the camera on servo S1
let tool = 0
basic.forever(function () {
    radio.sendValue("X", joystickbit.getRockerValue(joystickbit.rockerType.X))
    radio.sendValue("Y", joystickbit.getRockerValue(joystickbit.rockerType.Y))
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        if (tool == 0) {
            radio.sendValue("C", 0)
        } else {
            radio.sendValue("C", 1)
        }
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        if (tool == 0) {
            radio.sendValue("F", 0)
        } else {
            radio.sendValue("F", 1)
        }
    }
})
