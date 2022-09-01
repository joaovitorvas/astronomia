function enviar() {
    input = document.getElementById('planeta')
    planeta = input.value.toLowerCase()
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    res.style.textAling = 'center'
    if (planeta == 'marte') {
        img.setAttribute('src', 'marte.jpg')
        res.innerHTML = `Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada. <br><br>`
    } else if (planeta == 'terra') {
        img.setAttribute('src', 'terra.jfif')
        res.innerHTML = `A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. <br><br>`
    } else if (planeta == 'júpiter') {
        img.setAttribute('src', 'jupiter.jfif')
        res.innerHTML = `Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. <br><br>`
} else if (planeta == 'saturno') {
    img.setAttribute('src', 'saturno.png')
    res.innerHTML = `Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.<br><br>`
}  else if (planeta == 'netuno') {
    img.setAttribute('src', 'netuno.jfif')
    res.innerHTML = `Netuno ou Neptuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas. <br><br>`
} else if (planeta == 'venus') {
    img.setAttribute('src', 'venus.jfif')
    res.innerHTML = `Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. <br><br>`    
}  else if (planeta == 'urano') {
    img.setAttribute('src', 'urano.jpg')
    res.innerHTML = `Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano. <br><br>`
} else if (planeta == 'mercúrio') {
    img.setAttribute('src', 'mercurio.jfif')
    res.innerHTML = `Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. <br><br>`
} else {
    res.innerHTML = `<strong>Não encontrado verifique a ortografia e tente novamente</strong>
    <br>
    <br>
    <strong>Experimente buscar por um desses: </strong><br><br>
    <em>mercúrio, venus, terra, marte, júpiter, saturno, urano, netuno </em>`
}
res.appendChild(img)

}
