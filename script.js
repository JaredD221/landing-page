// Check JS is Connected
console.log('Oke');

// Update the content of the <h1> element and add the animation
document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Extract data1 and myLinks from the JSON
            const data1 = data.data1[0];
            const myLinks = data.myLinks;

            // Update the <h1> element
            const h1 = document.querySelector('h1');
            h1.textContent = data1.name;

            // Create and insert the <p> element with the bio content
            const p = document.createElement('p');
            p.innerHTML = data1.bio;
            const main = document.querySelector('main');
            main.insertBefore(p, main.querySelector('#content'));

            // Create and insert the skills list
            const skillsList = document.getElementById('skillsList');
            data1.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });

            // Create anchor links for each item in myLinks
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