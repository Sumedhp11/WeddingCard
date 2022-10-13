const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeEventListener()
        panel.classList.add('active')
    })
})

function removeEventListener(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function myfunction(x){
    x.classList.toggle("change");
}