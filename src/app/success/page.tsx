"use client";

import { resetCart } from '@/redux/shofySlice';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!sessionId) {
      router.push("/");
    } else {
      dispatch(resetCart());
      toast.success("Payment received successfully!");
    }
  }, [dispatch, sessionId, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Success 🎉</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your payment was successful.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 cursor-pointer py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
