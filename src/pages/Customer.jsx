import dummyCustomers from "../customers.json";
import { useState, useEffect } from "react";

export default function Customers() {
    const [customers, setCustomers] = useState([]);
  
    useEffect(() => {
      setCustomers(dummyCustomers);
    }, []);
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Daftar Pelanggan</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 text-left text-gray-600 uppercase">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Nama</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Telepon</th>
                <th className="px-6 py-3">Loyalty</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((cust) => (
                <tr key={cust.customerId}>
                  <td className="px-6 py-4">{cust.customerId}</td>
                  <td className="px-6 py-4">{cust.customerName}</td>
                  <td className="px-6 py-4">{cust.email}</td>
                  <td className="px-6 py-4">{cust.phone}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-white text-xs ${
                        cust.loyalty === "Gold"
                          ? "bg-yellow-500"
                          : cust.loyalty === "Silver"
                          ? "bg-gray-400"
                          : "bg-amber-700"
                      }`}
                    >
                      {cust.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }