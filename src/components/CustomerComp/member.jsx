
import { useState } from 'react'
import member from "../../member.json"; // Sudah benar

export default function CekMemberPage() {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setResult(null)

    if (!email) {
      setError("❌ Email tidak boleh kosong.")
      return
    }

    if (!validateEmail(email)) {
      setError("❌ Format email tidak valid.")
      return
    }

    // Ganti 'members' jadi 'member'
    const found = member.find((m) => m.email.toLowerCase() === email.toLowerCase())
    if (found) {
      setResult(found)
    } else {
      setError("❌ Email tidak terdaftar sebagai member.")
    }
  }

  const memberStyles = {
    silver: "border-gray-400 bg-gray-100 text-gray-800",
    gold: "border-yellow-500 bg-yellow-100 text-yellow-800",
    platinum: "border-purple-500 bg-purple-100 text-purple-800"
  }

  const memberIcons = {
    silver: "🥈",
    gold: "🥇",
    platinum: "💎"
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">🔍 Cek Keanggotaan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
          >
            Cek
          </button>
        </form>

        {error && <div className="mt-4 text-red-600 font-semibold">{error}</div>}

        {result && (
          <div className={`mt-6 p-4 rounded-md border ${memberStyles[result.tipe_member]}`}>
            <p className="text-lg font-medium">
              {memberIcons[result.tipe_member]} Selamat datang, <strong>{result.nama}</strong>!
            </p>
            <p>Anda adalah member <strong>{result.tipe_member.toUpperCase()}</strong>.</p>
          </div>
        )}
      </div>
    </div>
  )
}
