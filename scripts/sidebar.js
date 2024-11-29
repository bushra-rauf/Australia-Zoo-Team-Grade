const togglButtn = document.querySelector(".menu-btn");
togglButtn.addEventListener("click", () =>{
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



const sidebar = document.querySelectorAll(".sidebar-item"); 
let spanbuttn = document.querySelector("span");

sidebar.forEach(sidebar => {
    sidebar.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        sidebar.classList.add("active");  
    })
    
})
 
 