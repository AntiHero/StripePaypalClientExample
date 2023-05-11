export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await fetch(
        'http://localhost:5000/api/payments/checkout-session-paypal',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow',
          body: JSON.stringify({
            priceId: 'price_1N5xcwCiLuvOXDcQ6fpYRGZh',
            userId: '215220b9-b80a-4f49-bd12-3ece6b344820',
          }),
        }
      ).then(async (response) => {
        if (response.status === 500) {
          throw new Error('500');
        }

        res.redirect(303, await response.text());
      });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
