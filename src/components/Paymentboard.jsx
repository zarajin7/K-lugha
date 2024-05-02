import { useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./Checkout";
function Paymentboard() {
  const initialOptions = {
    "client-id":
      "AQ3UyIOR25k-pZrZm9PMSb-rgDprR7XMwNM049hPb4GbLWCC4Zyjv7GxC_iZW5D041QEzsbRUF0a2i0r",
    currency: "USD",
    intent: "capture",
  };
  return (
    <div className=" ">
      <div className="bg-white p-[10em] rounded-xl shadow-xl">
        <PayPalScriptProvider options={initialOptions}>
          <Checkout />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default Paymentboard;
