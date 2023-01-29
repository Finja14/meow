basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # # # # #
        # . . . #
        # . # . #
        . # # # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showString("Meow  ")
})
