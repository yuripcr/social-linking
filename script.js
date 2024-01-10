function toggleMode(){
    const body = document.body;
    const img = document.querySelector('#profile img');
    /* if (body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    } */
    body.classList.toggle('light');

    //substituir a imagem

    if (body.classList.contains('light')){
        img.src = "assets/AvatarLight.png"
    } else {
        img.src = "assets/Avatar.png"
    }
}