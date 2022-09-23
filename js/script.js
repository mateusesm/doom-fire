function init() {

    const generateDataBase = (arrayFire) => {
        const width = 10
        const height = 10

        const divContainer = document.querySelector('.fire-container')

        let index = 0

        let table = ''
        table = '<table class="fire-data">'
        for (let i = 0; i < width; i++) {
            table += '<tr>'
            for (let j = 0; j < height; j++) {
                table += `<td>${arrayFire[index]}<span>${index}</span></td>`
                index++
            }
            table += '</tr>'
        }
        table += '</table>'

        divContainer.innerHTML = table
 
    }

    const arrayFire = new Array(100)

    for (let i = 0; i < arrayFire.length; i++) {
        if (!arrayFire[i]) arrayFire[i] = 0
    }

    const generateArrayFire = (fireIntensity) => {

        let cont = 0
        for (let j = 99; j >= 0; j--) {
            if (cont === 10) break
           
            if (!arrayFire[j]){
                arrayFire[j] = fireIntensity
            } else {

                if (!arrayFire[j-10]) {
                    arrayFire[j-10] = arrayFire[j] -1
                }
            }

            cont++
        }

        return arrayFire

    }

    const start = () => {
        let fireIntensity = 36

        setInterval(() => {
            const arrayFire = generateArrayFire(fireIntensity)
            generateDataBase(arrayFire)
            console.log('Oi')
        }, 1000)
    }

    start()

}

init()