// Check JS is Connected
console.log('Oke');

// Define the data object
const data = {
  name: 'Jared Alexis Diaz',
  major: 'Computer Science',
  bio: `My name is Jared Diaz and I am a computer science major. My interest for my studies include game desing, game developement,and web development. 
        With that knowledge I hope to be able to creat my own game someday whether it be simple or complex as long as the game is fun that will fine by me. 
        Currently I am studing at Eastern Washington University and I plan to be graduated by 2026, After graduation I plan to find a position with a game development team whether it be big or small.`
};

// Update the content of the <h1> element and add the animation
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    h1.textContent = data.name;
    

    // Create and insert the <p> element with the bio content
    const p = document.createElement('p');
    p.innerHTML = data.bio;
    const main = document.querySelector('main');
    main.insertBefore(p, main.querySelector('h2'));

    // get JSON data
    // create anchor link for each item
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const myLinks = data.myLinks;
            const ul = document.getElementById('myLinks');
            myLinks.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.url;
                a.target = '_blank';
                if (link.icon) {
                    const icon = document.createElement('i');
                    icon.className = link.icon;
                    a.appendChild(icon);
                    a.appendChild(document.createTextNode(' ' + link.name));
                } else {
                    a.textContent = link.name;
                }
                li.appendChild(a);
                ul.appendChild(li);
            });
        });
});