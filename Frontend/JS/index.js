// function views(num) {
//     if (num >= 1000000) {
//         return (num / 1000000).toFixed(1).replace(".0", "") + "M"
//     }
//     else if (num >= 1000) {
//         return (num / 1000).toFixed(1).replace(".0", "") + "K"
//     }
//     return num
// }
// function card_generator(title, channel, views, monthsold, duration, thumbnail) {
//     let box = document.querySelector(".container")

//     let card = document.createElement("div")
//     card.classList.add("cards")
//     box.append(card)

//     let image_wrapper = document.createElement("div")
//     image_wrapper.classList.add("img-wrapper")
//     card.prepend(image_wrapper)

//     let img = document.createElement("img")
//     img.textContent = thumbnail
//     img.setAttribute("src", thumbnail)
//     img.classList.add("image")
//     image_wrapper.prepend(img)

//     let time = document.createElement("p")
//     time.textContent = duration
//     image_wrapper.append(time)
//     time.classList.add("duration")

//     let info = document.createElement("div")
//     info.classList.add("information")
//     card.append(info)

//     let h3 = document.createElement("h3")
//     h3.textContent = title
//     info.prepend(h3)

//     let extra_info = document.createElement("div")
//     extra_info.classList.add("extra-info")
//     info.append(extra_info)

//     let p = document.createElement("p")
//     p.textContent = channel
//     extra_info.prepend(p)
//     p.classList.add("channel_name")

//     let view = document.createElement("p")
//     view.textContent = views
//     extra_info.append(view)
//     view.classList.add("views")

//     let monthold = document.createElement("p")
//     monthold.textContent = monthsold
//     extra_info.append(monthold)
//     monthold.classList.add("monthsold")



// }
// let btn = document.querySelector(".btn")
// btn.addEventListener("click", () =>{
//     card_generator(prompt("emter your title"), prompt("enter ur channel name"), views(prompt("enter views")), prompt("enter how old"), prompt("enter timestamp in this format mm:ss"),prompt("enter thumbnail pic link here") ) }
// )

// // "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"




let card = document.querySelector(".card")
let btn2  = card.lastElementChild;
card.addEventListener("click", function(event){
    console.log(event.target)
    console.log(event.target.parentElement)
})


