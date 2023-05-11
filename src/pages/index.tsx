import React from 'react';

export default function PreviewPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  return (
    <>
      <form action="/api/checkout/stripe" method="POST">
        <section>
          <button className="btn-stripe" type="submit" role="link">
            Checkout Stripe
          </button>
        </section>
      </form>
      <form action="/api/checkout/paypal" method="POST">
        <section>
          <button className="btn-paypal" type="submit" role="link">
            Checkout Paypal
          </button>
        </section>
        <style>
          {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 50px;
            border-radius: 6px;
            justify-content: space-between;
          }
          .btn-paypal{
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          .btn-stripe {
            height: 36px;
            border-radius: 4px;
            background: #90E42C;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
        </style>
      </form>
    </>
  );
}
