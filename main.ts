basic.forever(function () {
    music.play(music.stringPlayable("A C5 B G F E F C ", 130), music.PlaybackMode.LoopingInBackground)
    led.plotBarGraph(
    12,
    45,
    true
    )
    input.setSoundThreshold(SoundThreshold.Loud, 128)
    basic.showNumber(12)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showNumber(63)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        `)
    basic.showNumber(16)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
})
