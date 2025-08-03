const body = document.body
const links = document.querySelectorAll('.Link')

function activeLInk(){
    links.forEach((item) => item.classList.remove("activeLInk"))
    this.classList.add("activeLInk")
}
links.forEach((item)=> item.addEventListener("click", activeLInk))

console.log(links);
