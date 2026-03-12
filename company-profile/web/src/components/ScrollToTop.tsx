import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // Mendeteksi perubahan URL

  useEffect(() => {
    // Memaksa window scroll kembali ke kordinat X: 0, Y: 0 (Paling atas)
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]); // Akan dijalankan ulang setiap kali 'pathname' berubah

  return null; // Komponen ini bekerja di belakang layar, tidak merender UI apa pun
}
