import type { Request, Response } from "express";
import { prisma } from "../prisma.js"; // Import prisma dari file luar

/* ------------------------------- Create user ------------------------------ */
export const createUser = async (req: Request, res: Response) => {
  try {
    const userInput = req.body;

    // 1. Validasi
    if (!userInput.fullname)
      return res.status(400).json({ message: "Field fullname is missing" });
    if (!userInput.email)
      return res.status(400).json({ message: "Field email is missing" });
    if (!userInput.password)
      return res.status(400).json({ message: "Field password is missing" });

    // 2. Query ke Database
    const author = await prisma.users.create({ data: userInput });

    // 3. Kirim Response
    res.status(201).json({ message: "Author created", data: author });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
/* --------------------------- Get All Users --------------------------- */
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.users.findMany({
      // Gunakan 'select' agar password TIDAK ikut terkirim ke frontend
      select: {
        id: true,
        fullname: true,
        email: true,
        created_at: true,
      },
      orderBy: { created_at: "desc" },
    });

    res.status(200).json({ message: "Success fetch users", data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* --------------------------- Get User by ID -------------------------- */
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await prisma.users.findUnique({
      where: { id: Number(id) }, // ID diubah menjadi Number
      select: {
        id: true,
        fullname: true,
        email: true,
        created_at: true,
        // menarik data blog yang ditulis oleh user ini
        blogs: {
          select: {
            id: true,
            title: true,
            created_at: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Success fetch user", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* ------------------------------- Login user ------------------------------ */
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 1. Validasi input kosong
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email dan password wajib diisi!" });
    }

    // 2. Cari user berdasarkan email
    const user = await prisma.users.findFirst({
      where: { email: email },
    });

    // 3. Jika user tidak ditemukan
    if (!user) {
      return res.status(404).json({ message: "Email tidak terdaftar." });
    }

    // 4. Cocokkan password (Di sistem dunia nyata , sebaiknya gunakan bcrypt untuk mengecek hash. Tapi karena ribet jadi ini aja hehe)
    if (user.password !== password) {
      return res.status(401).json({ message: "Password salah!" });
    }

    // 5. Jika sukses, kirim respons (jangan kirim password kembali ke frontend/ pw false)
    res.status(200).json({
      message: "Login berhasil",
      data: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
