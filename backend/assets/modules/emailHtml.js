const request_send = require("request");

async function getPrice(price, currency = "USD") {
    let courses = {
        bitcoin: 0,
    };

    try {
        await new Promise((resolve, reject) => {
            request_send(
                `https://api.blockchain.info/ticker`,
                (err, res, body) => {
                    if (err) {
                        console.error("Error fetching price:", err);
                        return reject(err);
                    }
                    try {
                        const data = JSON.parse(body);
                        courses.bitcoin = data[currency].last;
                        resolve(data[currency].last);
                    } catch (parseError) {
                        console.error("Error parsing response:", parseError);
                        reject(parseError);
                    }
                }
            );
        });
    } catch (error) {
        console.error("Failed to get price:", error);
    }

    const convert = (amount, dir) => {
        return dir === 1 ? amount * courses.bitcoin : courses.bitcoin / amount;
    };
    let result = convert(price, 1);
    return result;
}

async function generateHTML(
    domain,
    balanceFiat,
    balanceBTC,
    bitcoin_address,
    bitcoin_img,
    domainHeader,
    domainFooter,
    bitcoin_to_fiat,
    bitcoin_to_fiat_commission,
    domainLink,
    precent,
    currency = "USD"
) {
    // Получаем цены в обеих валютах
    let price_bitcoin_to_usd, price_bitcoin_to_eur;
    balanceBTC = Number(balanceBTC).toFixed(8);
    
    // Получаем цену в USD
    await getPrice(balanceBTC, "USD").then((prb) => {
        price_bitcoin_to_usd = String(prb);
        price_bitcoin_to_usd = price_bitcoin_to_usd.substring(0, 8);
    });
    
    // Получаем цену в EUR
    await getPrice(balanceBTC, "EUR").then((prb) => {
        price_bitcoin_to_eur = String(prb);
        price_bitcoin_to_eur = price_bitcoin_to_eur.substring(0, 8);
    });

    // Рассчитываем комиссии в обеих валютах
    var tallageUSD = String((price_bitcoin_to_usd / 100) * precent);
    var tallageEUR = String((price_bitcoin_to_eur / 100) * precent);
    var tallageBTC = String((balanceBTC / 100) * precent);

    tallageBTC = tallageBTC.substring(0, 8);
    tallageBTC = Number(tallageBTC).toFixed(8);
    tallageUSD = Number(tallageUSD).toFixed(2);
    tallageEUR = Number(tallageEUR).toFixed(2);

    // Форматируем балансы для отображения
    const balanceUSD = Number(price_bitcoin_to_usd).toFixed(2);
    const balanceEUR = Number(price_bitcoin_to_eur).toFixed(2);

    console.log(bitcoin_address);

    const output = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bitcoin Paper Wallet</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">

    <div style="padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 10px;">
            <div style="text-align: center;">
                <a href="${domainLink}" style="text-decoration: none; color: #000;" target="_blank"
                    rel="noopener noreferrer">
                    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
                        <img src="${domainLink}/img/ethereum.gif" alt="Royal crypto union"
                            style="width: 70px; height: auto;">
                        <div style="text-align: left;    margin-top: 3%;">
                        <span style="font-weight: bold; font-size: 14px; color: #000; display: block;">${domainHeader}<span style="color: gray;">.com</span></span>
                        <span style="font-size: 12px; color: #ccc;">Decentralized offline paper wallet</span>
                        </div>
                    </div>
                </a>
            </div>

            <div style="border: 1px solid #e0e0e0; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
                <p><strong>Bitcoin paper wallet detected!</strong></p>
                <p><strong>Authentication code: 7720</strong></p>
                <p><strong>Wallet ID:</strong> AR550S993</p>
                <p><strong>Previous deposit date:</strong> 2025-07-31</p>
                <p><strong>Deposited:</strong> 0.00019000 BTC</p>
                <p><strong>TXID:</strong> 755a4e5ac9882301a83a5205990985d4edc3b83c6622c80feeebbf7703ca27e8</p>
                <p><strong>Current balance [BTC]:</strong> ${balanceBTC} BTC</p>
                <p><strong>Current balance [USD/EUR]:</strong> ${balanceUSD} USD | ${balanceEUR} EUR</p>
                <p><strong>Commission fee ${precent}%:</strong> ${tallageBTC} BTC | ${tallageUSD} USD | ${tallageEUR} EUR</p>
            </div>
            <p><strong>Withdraw Funds from Your Paper Wallet</strong></p>

            <p>To withdraw funds from your paper wallet, a <strong>${precent}% commission</strong> based on the current Bitcoin wallet balance is required.</p>

            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Enter the <strong>private key (last 8 digits) and authentic PIN</strong> from your printed BTC paper wallet.</li>
                <li>Provide <strong>email address</strong>.</li>
                <li>Use your <strong>digital crypto wallet</strong> to scan the QR code below.</li>
                <li>Send the exact <strong>${precent}% commission</strong> amount shown on the website.</li>
                <li><strong>Double-check</strong> the commission fee address before sending the payment.</li>
            </ul>

            <p>Once the payment is confirmed on blockchain, an <strong>activation link with code</strong> will be sent to your email.</p>

            <p><strong>IMPORTANT</strong> : Withdraw all your funds at once, as the Toxcrypt paper wallet is intended for one-time storage only. The <strong>private key can be used only once</strong> for security reasons. After that, it becomes invalid.</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="${bitcoin_img}" alt="QR Code" style="width: 200px; height: 200px;">
            </div>
            <p style="text-align: center;">Bitcoin address to pay a commission fee</p>

            <footer style="margin: 0; padding: 0; box-sizing: border-box; text-align: center;">
                <div style="margin: 20px; padding: 20px; box-sizing: border-box; text-align: center;">
                    <a href="${domainLink}"
                        style="text-decoration: none; color: #000; display: grid; vertical-align: middle;"
                        target="_blank" rel="noopener noreferrer">
                        <figure style="display: inline-block; vertical-align: top; ">
                            <img src="${domainLink}/img/ethereum.gif" alt="Royal crypto union"
                                style="width: 70px; height: auto;">
                        </figure>
                        <div style="display: inline-block; vertical-align: top; text-align: center;">
                            <span
                                style="font-weight: bold; font-size: 14px; color: #000; display: block;">${domainFooter}<span
                                    style="color: gray;">.com</span></span>
                            <span style="font-size: 12px; color: #ccc; display: block;">Print your coins secure
                                offline</span>
                        </div>
                    </a>
                    <br/>
                    <p style="margin: 4px 0; padding: 0; box-sizing: border-box; font-size: 12px; text-align: center;">
                        Crypto wallet is encrypted and stored on a decentralized system</p>
                    <p style="margin: 4px 0; padding: 0; box-sizing: border-box; font-size: 12px; text-align: center;">©
                        ${domainFooter} CAC. All rights reserved.</p>
                </div>
            </footer>

        </div>
    </div>
</body>

</html>
`;
    return output;
}

module.exports = {
    generateHTML,
    getPrice
};
