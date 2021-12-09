document.addEventListener("DOMContentLoaded", async function() {
    let projectBox = document.getElementById('projectdiv');
    let projectData = await fetch(`${document.URL}/projects.json`)
    //console.log(projectData)
    projectData = await projectData.json()


    for(let i = 0; i<await projectData.projects.length; i++) {
        let data = projectData.projects[i]
        let pcol = document.createElement('div')
        let pDiv = document.createElement('div');
        let pDivContent = document.createElement('div');
        let pTitle = document.createElement('h2');
        let pDesc = document.createElement('p');

        pcol.className = 'col s25 xs-s100 s-s100 m-s50'
        pTitle.textContent = data.name
        pDesc.textContent = data.desc

        pDiv.className = 'card background image border round darken slide';
        pDiv.style = `--image:url(${data.img})`
        pDivContent.className = 'card-content txt center';

        pcol.appendChild(pDiv)
        pDiv.appendChild(pDivContent);
        pDivContent.appendChild(pTitle);
        pDivContent.appendChild(pDesc);

        if (data.button !== undefined) {
            let btn = document.createElement('a')
            let icon = document.createElement('i')
            let span = document.createElement('span')

            btn.className = 'txt-s1 button s1'
            btn.href = data.button.link
            icon.className = data.button.icon
            span.textContent = data.button.text
            
            btn.appendChild(icon)
            btn.appendChild(span)
            pDiv.appendChild(btn)
        }

        projectBox.appendChild(pcol)

    }
})