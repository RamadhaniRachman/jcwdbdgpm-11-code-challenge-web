import type { Request, Response } from "express";
import { prisma } from "../prisma.js"; // Import prisma dari file luar
import { error } from "node:console";

/* --------------------------- create new article --------------------------- */
export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, author_id } = req.body;

    // 1. Validasi Input
    if (!title)
      return res.status(400).json({ message: "Field title is missing" });
    if (!content)
      return res.status(400).json({ message: "Field content is missing" });
    if (!author_id)
      return res.status(400).json({ message: "Field author_id is missing" });

    //2. Buat summary otomatis
    const generatedSummary = content.substring(0, 100) + "...";

    //3. Simpan ke database

    const newBlog = await prisma.blogs.create({
      data: {
        title,
        content,
        summary: generatedSummary,
        author_id: +author_id,
      },
    });

    res
      .status(201)
      .json({ message: "Article succesfully created", data: newBlog });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Internal server error" });
  }
};

/* --------------------------- get all article --------------------------- */
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await prisma.blogs.findMany({
      // Mengurutkan dari yg terbaru
      orderBy: { created_at: "desc" },
      // Tarik data nama penulis dari tabel users (relasi tabel )
      include: {
        users: {
          select: { fullname: true, email: true },
        },
      },
    });
    res.status(200).json({ message: "Success fetch blogs", data: blogs });
  } catch {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* ------------------------ get single article by id ------------------------ */

export const getBlogById = async (req: Request, res: Response) => {
  try {
    // Ambil id dari url
    const { id } = req.params;

    const blog = await prisma.blogs.findUnique({
      where: { id: Number(id) },
      include: {
        users: {
          select: { fullname: true },
        },
      },
    });

    if (!blog) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "Success fetcj article", data: blog });
  } catch {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
