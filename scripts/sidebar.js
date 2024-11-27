const togglebuttn = document.querySelector(".menu-btn");
togglebuttn.addEventListener("click", () =>{
   // document.querySelector("span").classList.toggle("open")
    document.querySelector(".asid-home-links").classList.toggle("open")
})

const links = ["Echidna", "Tasmanian Devil ", "quokka", "frill-necked lizard", "Hawksbill Turtle", "Perentie ", "Cassowary", "Kookaburra", "Yellow Tailed Black Cockatoo" ];
 
let sidebarLinks = document.querySelector(".sidebar-linkss");

for(let i = 0; i < links.length; i++) {
    let tagLink = document.createElement("a");
    tagLink.textContent = links[i]
    tagLink.classList.add("links") 
    sidebarLinks.appendChild(tagLink)

}