import Github from "../assets/github.png";
import Gmail from "../assets/gmail.png";
import LinkedIn from "../assets/linkedin.png";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Endpoint REST API Backendless
    const url = `https://fancystation-us.backendless.app/api/data/contact`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Backendless menerima data dalam bentuk JSON string
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setFeedback("Terima kasih! Pesan kamu berhasil disimpan ke database.");
      } else {
        // Jika ada error dari server Backendless
        const errorData = await response.json();
        console.error("Backendless Error:", errorData);
        setStatus("error");
        setFeedback(`Gagal: ${errorData.message}`);
      }
      // Set field menjadi kosong setelah submit
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
      setFeedback("Gagal mengirim pesan. Pastikan koneksi internetmu stabil.");
    }

    // Hilangkan notifikasi setelah 5 detik
    setTimeout(() => {
      setStatus("idle");
      setFeedback("");
    }, 5000);
  };
  return (
    <section id="contact" className="px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-600 mb-8">
          Currently open for new opportunities and freelance projects. Whether
          you have a question or just want to say hi, I'll try my best to get
          back to you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-lg mx-auto text-left mb-12 relative"
        >
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="madun@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="How can I help you?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full px-6 py-3 rounded-lg font-medium text-white shadow-md transition-all duration-300 
              ${status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-primary-green hover:-translate-y-1 hover:shadow-xl active:scale-95"}
            `}
          >
            {status === "loading" ? "Saving to Database..." : "Send Message"}
          </button>

          {/* Pesan Notifikasi */}
          {feedback && (
            <div
              className={`mt-4 p-3 rounded-lg text-center font-medium ${status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {feedback}
            </div>
          )}
        </form>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:29ramadhanirachman@gmail.com"
            className="shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            <img src={Gmail} alt="gmail" className="w-12 h-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/ramadhani-rachman-38980427b/"
            target="_blank"
            className="shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            <img src={LinkedIn} alt="linkedin" className="w-12 h-12" />
          </a>
          <a
            href="https://github.com/RamadhaniRachman"
            target="_blank"
            className="shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            <img src={Github} alt="github" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </section>
  );
}
