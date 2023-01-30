basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # # # # #
        # . . . #
        # . # . #
        . # # # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.clearScreen()
    basic.showString("Meow  ")
})
