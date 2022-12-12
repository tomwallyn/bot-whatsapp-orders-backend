class NotifyService {
  public async newOrder(orderInformation): Promise<void> {
    const accountSid = 'AC688bf5bd4e82901cf909d7e9231898cc';
    const authToken = '088194206f8f24726e20c6c096d668aa';
    const client = require('twilio')(accountSid, authToken);

    let date_ob = new Date();

    client.messages
      .create({
        body: `📦 Nouvelle commande 📦

Réalisé à ${date_ob.getHours()}:${date_ob.getMinutes()}
Numéro de commande : *${orderInformation.id}*
Total prix : *${orderInformation.total}*
Client : ${orderInformation.billing.first_name} ${orderInformation.billing.last_name}
Livraison : *${orderInformation.shipping_lines[0].method_title}*`,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+33779826398'
      })
      .then(message => console.log(message.sid))
      .done();
  }
}

export default NotifyService;
