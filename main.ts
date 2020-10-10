input.onButtonPressed(Button.A, function () {
    for (let horizonatl_line = 0; horizonatl_line <= 4; horizonatl_line++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
let horizonatl_line = 0
basic.forever(function () {
	
})
