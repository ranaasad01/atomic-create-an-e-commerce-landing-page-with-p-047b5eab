"use client";

import { X, Plus, Minus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { state, dispatch, subtotal } = useCart();
  const { items, isOpen } = state;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => dispatch({ type: "CLOSE_CART" })}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={
          "fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out " +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-bold text-neutral-900">Your Cart</h2>
            {items.length > 0 && (
              <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="w-8 h-8 text-indigo-300" />
              </div>
              <p className="text-neutral-500 font-medium">Your cart is empty</p>
              <p className="text-sm text-neutral-400 mt-1">Add some products to get started</p>
              <button
                onClick={() => dispatch({ type: "CLOSE_CART" })}
                className="mt-6 px-6 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-3 bg-neutral-50 rounded-xl">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-neutral-900 line-clamp-2 leading-snug">
                    {item.product.name}
                  </p>
                  <p className="text-sm font-bold text-indigo-600 mt-1">
                    ${item.product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          productId: item.product.id,
                          quantity: item.quantity - 1,
                        })
                      }
                      className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:border-indigo-400 hover:text-indigo-600 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-semibold text-neutral-900 w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          productId: item.product.id,
                          quantity: item.quantity + 1,
                        })
                      }
                      className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:border-indigo-400 hover:text-indigo-600 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_ITEM", productId: item.product.id })
                      }
                      className="ml-auto p-1 text-neutral-400 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-neutral-100 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <span>Subtotal</span>
              <span className="font-semibold text-neutral-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <span>Shipping</span>
              <span className="font-semibold text-emerald-600">
                {subtotal >= 50 ? "Free" : "$4.99"}
              </span>
            </div>
            <div className="flex items-center justify-between font-bold text-neutral-900 text-base pt-2 border-t border-neutral-100">
              <span>Total</span>
              <span>${(subtotal >= 50 ? subtotal : subtotal + 4.99).toFixed(2)}</span>
            </div>
            {subtotal < 50 && (
              <p className="text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
                Add ${(50 - subtotal).toFixed(2)} more for free shipping!
              </p>
            )}
            <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors hover:shadow-lg hover:shadow-indigo-200">
              Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
