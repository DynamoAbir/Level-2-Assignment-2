import { Request, Response } from "express";
import { ProductsService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const Product = req.body;
    const result = await ProductsService.createProductIntoDB(Product);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Couldn't create Product into db",
      error: error.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductsService.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: "Couldn't find Products from db",
      error: error.message,
    });
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await ProductsService.getSingleProductFromDB(id);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Couldn't find Product from db",
      error: error.message,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const Product = req.body;
    const result = await ProductsService.updateSingleProductFromDB(id, Product);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Couldn't find Product from db",
      error: error.message,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductsService.deleteSingleProductFromDB(productId);
    res.status(500).json({
      success: true,
      message: "Prodcut deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Couldn't find Product from db",
      error: error.message,
    });
  }
};
const findByTags = async (req: Request, res: Response) => {
  try {
    const tag = req.params.tag;
    const result = await ProductsService.findProductByTags(tag);
    res.status(200).json({
      success: true,
      message: `Products matching search term ${tag} fetched successfully!`,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Couldn't find Product from db",
      error: error.message,
    });
  }
};
export const ProductsController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  findByTags,
};
