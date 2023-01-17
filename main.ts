let teplota = ""
let svetloVstup = ""
let svetloVata = ""
basic.forever(function () {
	
})
basic.forever(function () {
    teplota = "" + input.temperature() + " C"
    kitronik_VIEW128x64.show(teplota, 1, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Big)
})
basic.forever(function () {
    svetloVstup = "L:" + input.lightLevel()
    svetloVata = ""
    for (let index = 0; index < 5 - svetloVstup.length; index++) {
        svetloVata = " " + svetloVata
    }
    kitronik_VIEW128x64.show("" + svetloVata + svetloVstup, 1, kitronik_VIEW128x64.ShowAlign.Right, kitronik_VIEW128x64.FontSelection.Big)
    kitronik_VIEW128x64.show(svetloVstup.length, 4, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Big)
})
basic.forever(function () {
    kitronik_VIEW128x64.show("A:" + input.acceleration(Dimension.X) + "|" + input.acceleration(Dimension.Y) + "|" + input.acceleration(Dimension.Z) + "|" + input.acceleration(Dimension.Strength) + " ", 3, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Normal)
})
