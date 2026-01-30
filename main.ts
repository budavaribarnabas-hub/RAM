// Írás RAM-ba
function writeRAM (address: number, value: number) {
    if (address >= 0 && address < RAM_SIZE) {
        RAM[address] = value
        serial.writeLine("RAM[" + address + "] = " + value)
    } else {
        serial.writeLine("HIBA: Cím túl nagy!")
    }
}
// Olvasás RAM-ból
function readRAM (address: number) {
    if (address >= 0 && address < RAM_SIZE) {
        serial.writeLine("RAM[" + address + "] = " + RAM[address])
        basic.showNumber(RAM[address])
    } else {
        serial.writeLine("HIBA: Cím túl nagy!")
    }
}
let RAM: number[] = []
let RAM_SIZE = 0
// === Virtuális RAM szimuláció micro:biten ===
// tegyük 32 "cella" – csak példa
RAM_SIZE = 32
// Inicializálás
for (let index = 0; index < RAM_SIZE; index++) {
    RAM.push(0)
}
// === Példa használat ===
writeRAM(0, 123)
writeRAM(5, 999)
readRAM(0)
readRAM(5)
// alapból 0
readRAM(10)
basic.forever(function () {
	
})
