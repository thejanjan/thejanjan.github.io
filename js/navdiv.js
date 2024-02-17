// setup the nav div in all my files
/*
<ul class="nav" style="font-family: sans-serif">
    <li><a href="/">main</a></li>
    <li><a href="/about/">about</a></li>
    <li><a href="/projects/">projects</a></li>
    <li><a href="/music/">music</a></li>
    <li><a href="/art/">art</a></li>
    <li><a href="/contact/">contact</a></li>
</ul>
*/

// object to map location to href
const navmap = {
    main: "/",
    about: "/about/",
    projects: "/projects/",
    music: "/music/",
    art: "/art/",
    contact: "/contact/",
}

var scriptTag = document.getElementsByTagName('script');
scriptTag = scriptTag[scriptTag.length - 1];
var parentTag = scriptTag.parentNode;

var ul = document.createElement("ul");
ul.style = "font-family: sans-serif";
ul.className = "nav";
parentTag.appendChild(ul);

for (const key of Object.keys(navmap)) {
    var li = document.createElement("li");
    ul.appendChild(li);

    var a = document.createElement("a");
    a.href = navmap[key];
    a.innerHTML = key;
    li.appendChild(a);
}
