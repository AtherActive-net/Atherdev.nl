document.addEventListener("DOMContentLoaded", async function() {
    let userbox = document.getElementById("userbox");
    let userdata = await fetch(`${document.URL}/files/contributer.json`);
    userdata = await userdata.json()

    for(i=0; await i<userdata.contributers.length; i++) {
        let contributer = userdata.contributers[i];
        // TODO: Add styling on how this is supposed to look. Likely card and list based or something.
        console.log(contributer);
    }

})