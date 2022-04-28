export default function initFetchBitcoin(){
    async function fetchBTC(url){
        try{
            const btcJSON = await (await fetch(url)).json();

            const spanBTC = document.querySelector('.btc-preco').innerText = (100 / btcJSON.BRL.buy).toFixed(5);
        }catch(erro){
            console.log(erro)
        }
    }

    fetchBTC('https://blockchain.info/ticker');
}