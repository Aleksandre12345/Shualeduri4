let todoform = document.querySelector('form')
let input = document.querySelector('input')
let todotext = document.querySelector('.todolist')
let defaultsrc = `assets/whitecircle.svg`
let All = document.querySelector('.all')
let Active = document.querySelector('.active')
let Completed = document.querySelector('.completed')

let Arr = []
let ActiveArr = []
let CompletedArr = []


All.classList.add('Blue')



todoform.addEventListener('submit', (e) => {
    e.preventDefault()


    let divBox = document.createElement('div')
    let text = document.createElement('p')
    let image = document.createElement('img')
    let Ximage = document.createElement('img')

    divBox.classList.add('divBox')
    text.classList.add('pText')
    image.src = `assets/whitecircle.svg`
    image.classList.add('mark')
    Ximage.src = 'assets/ximg.svg'
    Ximage.classList.add('ximg')

    text.textContent = input.value
    input.value = ""
    divBox.appendChild(image)
    divBox.appendChild(text)
    todotext.appendChild(divBox)
    divBox.appendChild(Ximage)
    
    image.addEventListener('click', () => {
        if (image.src.includes(defaultsrc)) {
            image.src = `assets/markimg.svg`
            text.classList.add('textline')
        }else {
            image.src = defaultsrc
            text.classList.remove('textline')
        }
    })

    Ximage.addEventListener('click', () => {
        divBox.parentNode.removeChild(divBox)
    })

    
        Active.addEventListener("click", function () {
        Active()
        if(Active.classList.contains('Blue')){
            All.classList.remove("Blue")
        } else {
            All.classList.add("Blue")
        }
    })






    
    // Active.addEventListener("click", function () {
    //     Active()
    //     if(Active.classList.contains('Blue')){
    //         All.classList.remove("Blue")
    //     } else {
    //         All.classList.add("Blue")
    //     }
    // })

    // Completed.addEventListener("click", function () {
    //     Completed()
    //     if(Completed.classList.contains('Blue')){
    //         All.classList.remove("Blue")
    //     } else {
    //         All.classList.add("Blue")
    //     }
    // })

    // All.addEventListener("click", function () {
    //     Allarr()
    //     number.textContent = Arr.length
        
    // })
    // function Active() {
    
    //     if (Completed.classList.contains('Blue')) {
    //         Completed()
    //         Completed.classList.remove('Blue')
    //     }
    //     ActiveArr = []
    //     CompletedArr = []
    //     for (let i = 0; i < Arr.length; i++){
    //         let Circle = Arr[i].querySelector("img")
    //         if (Circle.src.includes(`assets/markimg.svg`)) {
    //             CompletedArr.push(Arr[i])
    //             Arr[i].classList.toggle("None")
    //         }else {
    //             ActiveArr.push(Arr[i])
    //         }
    //     }
    //     Active.classList.toggle('Blue')
    //     All.classList.remove('Blue')
    //     if (ActiveArr.length == 0) {
    //         item.classList.remove("Onlybottom")
    //     }
    //     LastChild(ActiveArr)
    
    // }
})