import { Request, Response } from "express";
import { ProductsService } from "./product.service";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParsedData = productValidationSchema.parse(productData);
    const result = await ProductsService.createProductIntoDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Couldn't create Product into db",
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
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Couldn't find Products from db",
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Couldn't find Product from db",
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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't find Product from db",
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await ProductsService.deleteSingleProductFromDB(productId);
    res.status(500).json({
      success: true,
      message: "Prodcut deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't find Product from db",
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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't find Product from db",
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
