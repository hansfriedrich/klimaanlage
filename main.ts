input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . . .
        . . # . .
        # # . . .
        . . # . .
        # # . . .
        `)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.temperature() < 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (input.temperature() == 20) {
        basic.showLeds(`
            . # . . .
            # . # . .
            # . # . .
            # . # . .
            . # . . .
            `)
    } else {
        if (input.lightLevel() < 127) {
            basic.showLeds(`
                . # . . .
                # # . . .
                . # . . .
                . # . . .
                # # # . .
                `)
        } else {
            basic.showLeds(`
                . # . . .
                # . # . .
                . # . . .
                # . . . .
                # # # . .
                `)
        }
    }
})
