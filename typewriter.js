// all sounds from zapsplat
document.addEventListener("keydown",() => {
    const keySoundsURL = "https://github.com/ArrowAced/meo-plugins/raw/main/zapsplat%20typewriter%20sounds/"
    const keySounds = ["key1.mp3", "key2.mp3", "key3.mp3", "key4.mp3"]
    const keySound = keySounds[Math.floor(Math.random() * 4)]
    new Audio(keySoundsURL + keySound).play()
})