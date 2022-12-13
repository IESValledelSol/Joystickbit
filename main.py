led.enable(False)
radio.set_group(1)

def on_forever():
    radio.send_value("X", pins.analog_read_pin(AnalogPin.P4))
    radio.send_value("Y", pins.analog_read_pin(AnalogPin.P3))
    radio.send_value("Z", pins.digital_read_pin(DigitalPin.P5))
    radio.send_value("U", pins.digital_read_pin(DigitalPin.P10))
    radio.send_value("D", pins.digital_read_pin(DigitalPin.P8))
    radio.send_value("L", pins.digital_read_pin(DigitalPin.P11))
    radio.send_value("R", pins.digital_read_pin(DigitalPin.P9))
    radio.send_value("S", pins.digital_read_pin(DigitalPin.P7))
    radio.send_value("M", pins.digital_read_pin(DigitalPin.P6))
basic.forever(on_forever)