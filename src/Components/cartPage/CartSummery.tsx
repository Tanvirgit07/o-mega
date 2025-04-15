import React, { useEffect, useState } from "react";
import PriceFormate from "../PriceFormate";
import { ProductType } from "../../../type";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
// import { loadStripe } from "@stripe/react-stripe-js";
// import toast from "react-hot-toast";
// import { auth } from "@/app/api/auth/[...nextauth]/route";
interface Props {
  cart: ProductType[];
}

const CartSummery = ({ cart }: Props) => {
  const [totalAmt, setTotalAmt] = useState(0);
  const [discountAmt, setDiscount] = useState(0);

  const { data: session } = useSession();
  console.log(session?.user?.email);
  useEffect(() => {
    let amt = 0;
    let discount = 0;

    cart?.map((item) => {
      amt += item?.price * item.quantity!;
      discount +=
        ((item?.price * item.discountPercentage!) / 100) * item.quantity!;
    });
    setTotalAmt(amt);
    setDiscount(discount);
  }, [cart]);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        email: session?.user?.email,
      }),
    });
    const checkOutSession = await response?.json();
    const result = await stripe?.redirectToCheckout({
      sessionId: checkOutSession?.id,
    });
    console.log(result);
    if (result?.error) {
      window.alert(result?.error.message);
    }
  };

  // console.log(cart);
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0">
      <p className="text-2xl">Cart Summery</p>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xl">Sub Total</p>
          <PriceFormate amount={totalAmt} />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xl">Discount</p>
          <PriceFormate amount={discountAmt} />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xl">Payable</p>
          <PriceFormate amount={totalAmt - discountAmt} />
        </div>
      </div>

      <div className="">
        <button
          onClick={handleCheckout}
          className="w-full bg-blue-500 px-4 py-1 text-center mt-5 text-white cursor-pointer"
        >
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default CartSummery;
