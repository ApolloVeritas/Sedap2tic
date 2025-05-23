import React, { useState, useEffect } from "react";
import dummyOrders from "../orders.json"; // sesuaikan path jika perlu

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(dummyOrders);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Daftar Pesanan</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-3 px-4 border-b">Order ID</th>
              <th className="py-3 px-4 border-b">Nama Customer</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Total Harga</th>
              <th className="py-3 px-4 border-b">Tanggal Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{order.orderId}</td>
                <td className="py-2 px-4 border-b">{order.customerName}</td>
                <td className="py-2 px-4 border-b">{order.status}</td>
                <td className="py-2 px-4 border-b">
                  Rp {order.totalPrice.toLocaleString("id-ID")}
                </td>
                <td className="py-2 px-4 border-b">{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
