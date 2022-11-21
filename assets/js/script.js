const formulario = document.querySelector('#formulario')
const pesosIngresados = document.querySelector('#pesosIngresados')
const conversionMoneda = document.querySelector('#conversionMoneda')
const resultado = document.querySelector('#resultado')

const calcularConversion = async()=>{
    try{
        const response = await fetch(`https://mindicador.cl/api/${conversionMoneda.value}`);
        const data = await response.json();
        console.log(data)

        if(!response.ok){
            throw new Error(`Error en la petición ${response.status}`)
        }
        const valorMonedaCambiada = parseInt(data.serie[0].valor);
        //resultado.textContent = pesosIngresados.value / valorMonedaCambiada
        let resultadoDivision = pesosIngresados.value / valorMonedaCambiada
        resultado.innerHTML = `Resultado: $${resultadoDivision.toFixed(2)}`
    } catch(error){
        resultado.textContent = error.message;
    }
}

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    calcularConversion();
})