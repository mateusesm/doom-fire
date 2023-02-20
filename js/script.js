(function init() {
    const fireColorsPalette = [
        {"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}
    ]

    const renderFireCanvas = (fireIntensity, arrayFire) => {
        const divContainer = document.querySelector('.fire-container')
        const line = 10
        const column = 10

        let index = 0
        let table = ''

        let counter = 0

        for (let i = 99; i >= 0; i--) {
       
           if (counter === 10) break
            
            if (arrayFire[i] === 0) {
                arrayFire[i] = fireIntensity
                counter++
            } else {
                counter = 0
                continue
            }   
        }            

        table = '<table class="fire-data">'

        for (let i = 0; i < line; i++) {
            table += '<tr>'
            for (let j = 0; j < column; j++) {
                table += `<td>${arrayFire[index]}<span>${index}</span></td>`
                index++                   
            }
        }

        table += '</tr>'
        table += '</table>'
        divContainer.innerHTML = table
  
    }

    const generateArray = () => {
        let arrayFire = []

        for (let i = 0; i <= 99; i++) {
            arrayFire[i] = 0
        }
        return arrayFire
    }

    const start = () => {
        let fireIntensity = 36
        const arrayFire = generateArray()
      
        renderFireCanvas(fireIntensity, arrayFire)
    }

    start()
})();