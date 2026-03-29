import { currencySettings } from "./changeCurrency.js"
console.log(currencySettings.currency)

let tickersUSD = [
    {
        name: 'Bitcoin/USD',
        symbol: 'BTCUSDT'
    },
    {
        name: 'Stellar/USD',
        symbol: 'XLMUSDT'
    },
    {
        name: 'Ethereum/USD',
        symbol: 'ETHUSDT'
    },
    {
        name: 'Binance Coin/USD',
        symbol: 'BNBUSDT'
    },
    {
        name: 'XRP/USD',
        symbol: 'XRPUSDT'
    },
    {
        name: 'Cardano/USD',
        symbol: 'ADAUSDT'
    },
    {
        name: 'Aptos/USD',
        symbol: 'APTUSDT'
    },
    {
        name: 'Solana/USD',
        symbol: 'SOLUSDT'
    },
    {
        name: 'Dogecoin/USD',
        symbol: 'DOGEUSDT'
    },
    {
        name: 'Polkadot/USD',
        symbol: 'DOTUSDT'
    },
    {
        name: 'Chainlink/USD',
        symbol: 'LINKUSDT'
    },
    {
        name: 'Avalanche/USD',
        symbol: 'AVAXUSDT'
    },
    {
        name: 'Bitcoin Cash/USD',
        symbol: 'BCHUSDT'
    }
]

let pricesUSD = [
    {
        name: 'Bitcoin/USD',
        symbol: 'BTCUSDT',
        img: "https://www.blockchain.com/explorer/_next/static/media/bitcoin.df7c9480.svg"
    },
    {
        name: 'Ethereum/USD',
        symbol: 'ETHUSDT',
        img: "https://www.blockchain.com/explorer/_next/static/media/ethereum.57ab686e.svg"
    },
    {
        name: 'Binance Coin/USD',
        symbol: 'BNBUSDT',
        img: "https://www.blockchain.com/explorer/_next/static/media/bnb.109d70ce.svg"
    },
    {
        name: 'XRP/USD',
        symbol: 'XRPUSDT',
        img: "https://www.blockchain.com/explorer/_next/static/media/xrp.c351e318.svg"
    },
    {
        name: 'Cardano/USD',
        symbol: 'ADAUSDT',
        img: "https://www.blockchain.com/explorer/_next/static/media/ada.4b11b055.svg"
    },
    {
        name: 'Aptos/USD',
        symbol: 'APTUSDT',
        img: "https://www.cryptocompare.com/media/43881360/apt.png"
    },
    {
        name: 'Solana/USD',
        symbol: 'SOLUSDT',
        img: "https://www.blockchain.com/explorer/_next/static/media/sol.8e2ae057.svg"
    },
    {
        name: 'Dogecoin/USD',
        symbol: 'DOGEUSDT',
        img: "https://www.blockchain.com/explorer/_next/static/media/doge.60836ae5.svg"
    }
]

let buyTradeUSD = [
    {
        name: 'Bitcoin/USD',
        symbol: 'BTCUSDT',
        img: "https://www.blockchain.com/explorer/_next/static/media/bitcoin.df7c9480.svg"
    },
    {
        name: 'Ethereum/USD',
        symbol: 'ETHUSDT',
        img: "https://www.blockchain.com/explorer/_next/static/media/ethereum.57ab686e.svg"
    },
    {
        name: 'Stellar/USD',
        symbol: 'XLMUSDT',
        img: "	https://www.blockchain.com/explorer/_next/static/media/xlm.5a72c608.svg"
    },
    {
        name: 'Solana/USD',
        symbol: 'SOLUSDT',
        img: "https://www.blockchain.com/explorer/_next/static/media/sol.8e2ae057.svg"
    }
]

let tickersEUR = [
    { name: 'Bitcoin/EUR', symbol: 'BTCEUR' },
    { name: 'Stellar/EUR', symbol: 'XLMEUR' },
    { name: 'Ethereum/EUR', symbol: 'ETHEUR' },
    { name: 'Binance Coin/EUR', symbol: 'BNBEUR' },
    { name: 'XRP/EUR', symbol: 'XRPEUR' },
    { name: 'Cardano/EUR', symbol: 'ADAEUR' },
    { name: 'Aptos/EUR', symbol: 'APTEUR' },
    { name: 'Solana/EUR', symbol: 'SOLEUR' },
    { name: 'Dogecoin/EUR', symbol: 'DOGEEUR' },
    { name: 'Polkadot/EUR', symbol: 'DOTEUR' },
    { name: 'Chainlink/EUR', symbol: 'LINKEUR' },
    { name: 'Avalanche/EUR', symbol: 'AVAXEUR' },
    { name: 'Bitcoin Cash/EUR', symbol: 'BCHEUR' }
]

let pricesEUR = [
    { name: 'Bitcoin/EUR', symbol: 'BTCEUR', img: "https://www.blockchain.com/explorer/_next/static/media/bitcoin.df7c9480.svg" },
    { name: 'Ethereum/EUR', symbol: 'ETHEUR', img: "https://www.blockchain.com/explorer/_next/static/media/ethereum.57ab686e.svg" },
    { name: 'Binance Coin/EUR', symbol: 'BNBEUR', img: "https://www.blockchain.com/explorer/_next/static/media/bnb.109d70ce.svg" },
    { name: 'XRP/EUR', symbol: 'XRPEUR', img: "https://www.blockchain.com/explorer/_next/static/media/xrp.c351e318.svg" },
    { name: 'Cardano/EUR', symbol: 'ADAEUR', img: "https://www.blockchain.com/explorer/_next/static/media/ada.4b11b055.svg" },
    { name: 'Aptos/EUR', symbol: 'APTEUR', img: "https://www.cryptocompare.com/media/43881360/apt.png" },
    { name: 'Solana/EUR', symbol: 'SOLEUR', img: "https://www.blockchain.com/explorer/_next/static/media/sol.8e2ae057.svg" },
    { name: 'Dogecoin/EUR', symbol: 'DOGEEUR', img: "https://www.blockchain.com/explorer/_next/static/media/doge.60836ae5.svg" }
]

let buyTradeEUR = [
    { name: 'Bitcoin/EUR', symbol: 'BTCEUR', img: "https://www.blockchain.com/explorer/_next/static/media/bitcoin.df7c9480.svg" },
    { name: 'Ethereum/EUR', symbol: 'ETHEUR', img: "https://www.blockchain.com/explorer/_next/static/media/ethereum.57ab686e.svg" },
    { name: 'Stellar/EUR', symbol: 'XLMEUR', img: "https://www.blockchain.com/explorer/_next/static/media/xlm.5a72c608.svg" },
    { name: 'Solana/EUR', symbol: 'SOLEUR', img: "https://www.blockchain.com/explorer/_next/static/media/sol.8e2ae057.svg" }
]


const moved1 = [
    {
        img: "./img/dogecoin-doge-logo-alternative.svg",
        text: "Dogecoin",
    },
    {
        img: "./img/bitcoin.df7c9480.svg",
        text: "Bitcoin",
    },
    {
        img: "./img/ethereum.57ab686e.svg",
        text: "Ethereum",
    },
    {
        img: "./img/xrp.c351e318.svg",
        text: "Xrp",
    },
    {
        img: "./img/bnb.109d70ce.svg",
        text: "Binance",
    },
    {
        img: "./img/usdc.32138587.svg",
        text: "Usd",
    },
    {
        img: "./img/ada.4b11b055.svg",
        text: "Cardano",
    },
    {
        img: "./img/apt.png",
        text: "Aptos",
    },
    {
        img: "./img/sol.8e2ae057.svg",
        text: "Solana",
    },
    {
        img: "https://www.blockchain.com/explorer/_next/static/media/avax.4baba26c.svg",
        text: "Avalanche",
    },
];

const moved2 = [
    {
        img: "./img/apt.png",
        text: "Aptos",
    },
    {
        img: "./img/sol.8e2ae057.svg",
        text: "Solana",
    },
    {
        img: "./img/bitcoin.df7c9480.svg",
        text: "Bitcoin",
    },
    {
        img: "./img/ethereum.57ab686e.svg",
        text: "Ethereum",
    },
    {
        img: "./img/xrp.c351e318.svg",
        text: "Xrp",
    },
    {
        img: "https://www.blockchain.com/explorer/_next/static/media/avax.4baba26c.svg",
        text: "Avalanche",
    },
    {
        img: "./img/dogecoin-doge-logo-alternative.svg",
        text: "Dogecoin",
    },
    {
        img: "./img/bnb.109d70ce.svg",
        text: "Binance",
    },
    {
        img: "./img/usdc.32138587.svg",
        text: "Usd",
    },
    {
        img: "./img/ada.4b11b055.svg",
        text: "Cardano",
    },
];

// Глобальный объект для хранения всех данных о ценах
let allPricesData = {};

async function get_api(url) {
    let data = await fetch(`https://coinetus.com/api/${url}`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "mode": "no-cors",
            "cache": "no-cache",
            "credentials": "same-origin",
            "redirect": "follow"
        }
    })

    let json = await data.json();
    return json;
}

let apiKey;

function loader(status) {
    if (status) {
        let div = document.createElement('div');
        div.style = "position: fixed;width: 100%;height: 100%;top: 0;background-color: white;left: 0;z-index: 5000;display: flex;align-items: center;justify-content: center;"
        div.id = "loader-wrapper"
        div.innerHTML = '<div class="loader" style="color:red;"></div>'
        document.body.append(div)
    } else {
        document.getElementById("loader-wrapper")?.remove()

    }
}

// Функция для получения всех цен с Binance API одним запросом
async function getAllPrices() {
    console.log("Получаю данные о всех ценах...");
    
    try {
        // Делаем один запрос для получения данных о всех символах
        const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const allData = await response.json();
        console.log(`Получены данные для ${allData.length} символов`);
        
        // Преобразуем массив в объект для быстрого доступа
        allPricesData = {};
        allData.forEach(item => {
            allPricesData[item.symbol] = {
                PRICE: parseFloat(item.lastPrice),
                OPENDAY: parseFloat(item.openPrice),
                symbol: item.symbol
            };
        });
        
        return allPricesData;
    } catch (error) {
        console.error("Ошибка при получении данных с Binance API:", error);
        return {};
    }
}

// Функция для получения данных для конкретного символа
function getPriceData(symbol) {
    if (allPricesData[symbol]) {
        return allPricesData[symbol];
    }
    
    // Если данных нет, возвращаем заглушку
    return {
        PRICE: 0.00,
        OPENDAY: 0.00,
        symbol: symbol,
        isFallback: true
    };
}

// Обновленная функция для отображения цен на странице
function displayPricesFromCache() {
    if (document.getElementsByClassName("prices__body").length == 1) {
        let prices = [];

        if (currencySettings.currency == "dollar") {
            prices = pricesUSD;
        } else if (currencySettings.currency == "euro") {
            prices = pricesEUR;
        }

        // Очищаем контейнер перед добавлением обновленных данных
        const container = document.getElementsByClassName("prices__body")[0];
        container.innerHTML = '';

        for (let p in prices) {
            const priceData = getPriceData(prices[p].symbol);
            
            if (priceData) {
                let price = priceData.PRICE.toFixed(2);
                let lastTradePrice = priceData.OPENDAY;
                let dropPercentage = (100 * (lastTradePrice - price) / price).toFixed(2);
                if (dropPercentage == Infinity || isNaN(dropPercentage)) { dropPercentage = "0.00"; }

                let coinData = prices[p];
                let coinName = coinData["name"]?.split('/');

                let div = document.createElement('div');
                div.className = "prices__body-row";
                div.innerHTML = `<a href=""><div class="body-row-name"><div class="body-row-name__img"><img src="${coinData['img']}" alt="bitcoin"></div><div class="body-row-name__text"><p>${coinName[0]}<span>${coinName[1]}</span></p></div></div></a><a href=""><div class="body-row-value"><p>${currencySettings.currencyEMOJI}${price}<span class="${dropPercentage > 0 ? 'green' : 'red'}">${dropPercentage}%</span></p></div></a>`;
                container.append(div);
            } else {
                console.log(`Нет данных для ${prices[p].symbol}`);
            }
        }
    }
}

// Обновленная функция для отображения блоков Buy/Trade
function displayBuyTradeFromCache() {
    if (document.getElementsByClassName("blocks__body").length == 1) {
        let buyTrade = [];

        if (currencySettings.currency == "dollar") {
            buyTrade = buyTradeUSD;
        } else if (currencySettings.currency == "euro") {
            buyTrade = buyTradeEUR;
        }

        // Очищаем контейнер перед добавлением обновленных данных
        const container = document.getElementsByClassName("blocks__body")[0];
        container.innerHTML = '';

        for (let b in buyTrade) {
            const priceData = getPriceData(buyTrade[b].symbol);
            
            if (priceData) {
                let price = priceData.PRICE.toFixed(2);
                let lastTradePrice = priceData.OPENDAY;
                let dropPercentage = (100 * (lastTradePrice - price) / price).toFixed(2);
                if (dropPercentage == Infinity || isNaN(dropPercentage)) { dropPercentage = "0.00"; }

                let coinData = buyTrade[b];
                let coinName = coinData["name"]?.split('/');

                let a = document.createElement('a');
                a.innerHTML = `<div class="blocks__body-item">
						<div class="blocks__body-item-top">
							<div class="blocks__body-item-top-img">
								<img src="${coinData['img']}" alt="">
							</div>
							<div class="blocks__body-item-top-links">
								<p class="blue"><a href="https://www.coinbase.com/">Buy</a></p>
								<p class="green"><a href="https://www.coinbase.com/">Trade</a></p>
							</div>
						</div>
						<div class="blocks__body-item-bot">
							<p>${coinName[0]}<span class="short">${coinName[1]}</span></p>
							<p>${currencySettings.currencyEMOJI}${price}<span class="${dropPercentage > 0 ? 'green2' : 'red2'}">${dropPercentage}%</span></p>
						</div>
					</div>`;
                container.append(a);
            } else {
                console.log(`Нет данных для блока Buy/Trade ${buyTrade[b].symbol}`);
            }
        }
    }
}

// Обновленная функция для отображения цен в бегущей строке
function setElementHeaderPricesFromCache() {
    let tickers = [];

    if (currencySettings.currency == "dollar") {
        tickers = tickersUSD;
    } else if (currencySettings.currency == "euro") {
        tickers = tickersEUR;
    }

    if (document.getElementsByClassName("row__item").length == 1) {
        // Очищаем контейнер перед добавлением обновленных данных
        const container = document.getElementsByClassName("row__item")[0];
        container.innerHTML = '';
        
        for (let value in tickers) {
            const priceData = getPriceData(tickers[value].symbol);
            
            if (priceData) {
                let name = tickers[value].name;
                let price = priceData.PRICE.toFixed(2);
                let lastTradePrice = priceData.OPENDAY;
                let dropPercentage = (100 * (lastTradePrice - price) / price).toFixed(2);
                if (dropPercentage == Infinity || isNaN(dropPercentage)) { dropPercentage = "0.00"; }

                let a = document.createElement('a');
                a.className = "row__item-link";
                a.innerHTML = `<div class="row__item-unit"><p class="row__item-unit-text">${name}</p><p class="row__item-unit-value">${currencySettings.currencyEMOJI}${price}<span class="${dropPercentage > 0 ? 'green' : 'red'}"><img src="img/arrow.svg" alt="">${dropPercentage}%</span></p></div>`;
                container.append(a);
            } else {
                console.log(`Нет данных в кэше для бегущей строки ${tickers[value].symbol}`);
            }
        }
    }
}

// Функция для регулярного обновления отображения цен
async function updatePriceDisplay() {
    // Обновляем данные с API
    await getAllPrices();
    
    // Обновляем отображение на странице
    displayPricesFromCache();
    displayBuyTradeFromCache();
    setElementHeaderPricesFromCache();
    
    // Обновляем отображение каждые 30 секунд
    setTimeout(updatePriceDisplay, 30000);
}

if (document.getElementById("moved1")) {
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < moved1.length; i++) {
            document.getElementById("moved1").innerHTML += `
              <button class="moved-block">
                <img
                  src="${moved1[i].img}"
                  class="moved-img"
                  alt="someImg"
                />
                ${moved1[i].text}
              </button>
            `;
        }
    }
}

if (document.getElementById("moved2")) {

    for (let j = 0; j < 4; j++) {
        for (let i = moved2.length - 1; i >= 0; i--) {
            document.getElementById("moved2").innerHTML += `
              <button class="moved-block">
                <img
                  src="${moved2[i].img}"
                  class="moved-img"
                  alt="someImg"
                />
                ${moved2[i].text}
              </button>
            `;
        }
    }
}


// for (let j = 0; j < 4; j++) {
// 	for (let i = 0; i < moved3.length; i++) {
// 		document.getElementById("moved3").innerHTML += `
// 		  <button class="moved-block">
// 			<img
// 			  src="${moved3[i].img}"
// 			  class="moved-img"
// 			  alt="someImg"
// 			/>
// 			${moved3[i].text}
// 		  </button>
// 		`;
// 	}
// }
// for (let j = 0; j < 4; j++) {
// 	for (let i = moved4.length - 1; i >= 0; i--) {
// 		document.getElementById("moved4").innerHTML += `
// 		  <button class="moved-block">
// 			<img
// 			  src="${moved4[i].img}"
// 			  class="moved-img"
// 			  alt="someImg"
// 			/>
// 			${moved4[i].text}
// 		  </button>
// 		`;
// 	}
// }

window.onload = async () => {
    console.log("Загрузка страницы...");
    console.log("Текущая валюта:", currencySettings.currency);
    
    await get_api("get_api_key").then((d) => {
        apiKey = d.api_key;
        console.log("Получен API ключ");
        
        // Инициализируем данные при загрузке страницы
        console.log("Получаю данные о ценах...");
        updatePriceDisplay();
    }).catch(error => {
        console.error("Ошибка при получении API ключа:", error);
        // Даже если не удалось получить API ключ, все равно пытаемся отобразить данные
        updatePriceDisplay();
    });
}
