function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gene = ''
        let img  = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            gene = 'Homem'
                if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/meninobebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'image/meninoadolecente.png')
            } else if ( idade < 50) {
                img.setAttribute('src', 'image/homemadulto.png')
            } else {
                img.setAttribute('src', 'image/homemidoso.png')
            }
        } else if (fsex[1].checked) {
            gene = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/meninabebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'image/meninaadolecente.png')
            } else if ( idade < 50) {
                img.setAttribute('src', 'image/mulheradulta.png')
            } else {
                img.setAttribute('src', 'image/mulheridosa.png')
            }
        }
        
        res.innerHTML = `Detectamos ${gene} com ${idade} anos.`
        res.appendChild(img).style.height = '250px'
        res.appendChild(img).style.margin = '15px'
        
    }
}