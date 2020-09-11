const center = document.querySelector(".center")
const red = document.querySelector(".red")

//same we can do  for all  others 

// console.log(window.getComputedStyle(red).backgroundColor)  


const getColor = (selectedElement)=>{

    //when we have to  grabe the style use getComputedStyle
    return window.getComputedStyle(red).backgroundColor
}

// console.log(getColor(red))

var redElement = getColor(red)

// we have also  other events like click , mouseenter etc.
red.addEventListener('mouseenter',()=>{
    //style when we have to  implement the style
     center.style.backgroundColor = redElement
}) 

