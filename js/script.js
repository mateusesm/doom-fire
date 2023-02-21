(function init() {
    const fireColorsPalette = [
        {"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}
    ]

    const divContainer = document.querySelector('.fire-container')
    const debug = false

    let line = 0
    let column = 0
    let times = 0
    let wind = true

    if (debug) {
        line = 10
        column = 10
        times = 1000
    } else {
        line = 30
        column = 30
        times = 30
    }

    const renderFireCanvas = (fireIntensity, arrayFire) => {
        let counter = 0
        for (let i = (line * column) - 1; i >= 0; i--) {
       
            if (counter === line) break
            
            if (arrayFire[i] === 0) {
                if (fireIntensity === 36) {
                    arrayFire[i] = fireIntensity
                } else {
                    let decay = Math.floor(Math.random() * 3)

                    if (wind) {
                        arrayFire[i] = arrayFire[i+10] - decay || arrayFire[i+1]
                    } else {
                        arrayFire[i] = arrayFire[i+10] - decay
                    }
                   
                    if (arrayFire[i] < 0) arrayFire[i] = 0
                }
                counter++
            } else {
                counter = 0
                continue
            }   
        }
        
        let index = 0
        let table = ''
        table = '<table class="fire-data">'

        for (let i = 0; i < line; i++) {
            table += '<tr>'
            for (let j = 0; j < column; j++) {
                if (debug) {
                    table += `<td class="no-pixel">${arrayFire[index]}<span>${index}</span></td>`
                } else {
                    const color = fireColorsPalette[arrayFire[index]]
                    const colorString = `${color.r}, ${color.g}, ${color.b}`

                    table += `<td class="pixel" style="background-color: rgb(${colorString});"></td>`   
                }

                index++                
            }
        }

        table += '</tr>'
        table += '</table>'
        divContainer.innerHTML = table
    }

    const generateArray = () => {
        let arrayFire = []

        for (let i = 0; i < line * column; i++) {
            arrayFire[i] = 0
        }
        return arrayFire
    }

    const start = () => {
        let fireIntensity = 36
        let controlArray = 0
        let arrayFire = generateArray()
        
        setInterval(() => {
            if (controlArray === line) {
                arrayFire = generateArray()
                fireIntensity = 36
                controlArray = 0
            }

            renderFireCanvas(fireIntensity, arrayFire)

            controlArray++
            fireIntensity--

            if (fireIntensity < 0) fireIntensity = 0 
        }, times)
            
    }
    start()
})();