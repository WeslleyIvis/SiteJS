export default function initAnimaNumeros() {
    function animaNumeros(){ 
        const numeros = document.querySelectorAll('[data-numero]')
    
        numeros.forEach((numero) => {
            const total = +numero.innerText;
            const incremento = Math.floor(total/100);
            let start = 0;
    
            const timer = setInterval(() => {
                start += incremento;
                numero.innerText = start;
                if (start > total) {    
                    numeros.innerText = total;
                    clearInterval(timer)
                }
            }, 25 * Math.random())
        })
    }

    let observer

    function handleMutation(mutation) {
        // console.log(mutation[0])
        if(mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros();
        }
    }   

    observer = new MutationObserver(handleMutation)
    
    const obeserverTarget = document.querySelector('.numeros');
    observer.observe(obeserverTarget, {attributes: true});
}

