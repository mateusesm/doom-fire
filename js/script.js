(function init() {
    const generateFireCanvas = (arrayWithFire) => {
        const divContainer = document.querySelector('.fire-container')
        const line = 10
        const column = 10

        let index = 0
        let table = ''

        table = '<table class="fire-data">'

        for (let i = 0; i < line; i++) {
            table += '<tr>'
            for (let j = 0; j < column; j++) {
                table += `<td>${arrayWithFire[index]}<span>${index}</span></td>`
                index++
            }
            table += '</tr>'
        }

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

    const addFireIntensity = (fireIntensity, arrayWithoutFire) => {
        let counter = 0

        for (let i = 99; i >= 0; i--) {
       
           if (counter === 10) return arrayWithoutFire
            
            if (arrayWithoutFire[i] === 0) {
                arrayWithoutFire[i] = fireIntensity
                counter++
            } else {
                counter = 0
                continue
            }   
                    
        }

        return arrayWithoutFire
    }

    const start = () => {
        let fireIntensity = 36
        const arrayWithoutFire = generateArray()
      
        setInterval(() => {
            const arrayWithFire = addFireIntensity(fireIntensity, arrayWithoutFire)

            generateFireCanvas(arrayWithFire)
            if (fireIntensity === 0) {
                fireIntensity = 36
            }
            fireIntensity--
        }, 1000) 
    }

    start()
})();