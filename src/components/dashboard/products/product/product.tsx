"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { Fragment, useState } from "react";
import PopoverButton from "./popoverbtn";
import { LucideTrash2, Plus } from "lucide-react";
import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import ProductForm from "./product-form";
import { deleteProduct } from "@/lib/action";
import { toast } from "sonner";
import Loading from "@/components/Loading";

interface ProductProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  stock: string;
  id: string;
  label: string;
  setDoNothing: React.Dispatch<React.SetStateAction<any>>;
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function Product(props: ProductProps) {
  const [productData, setProductData] = useState({
    name: props.name,
    title: props.title,
    description: props.description,
    imageUrl: props.imageUrl,
    price: props.price,
    stock: props.stock,
    id: props.id,
    label: props.label,
  });
  const [showTrashIcon, setShowTrashIcon] = useState(false);
  const [trashHovered, setTrashHovered] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateProductData = (newData: Partial<typeof productData>) => {
    setProductData((prevData) => ({ ...prevData, ...newData }));
  };

  const toggleTrashIcon = (show: boolean) => {
    setShowTrashIcon(show);
  };

  const handleDeleteProduct = async () => {
    setLoading(true);
    const res = await deleteProduct(productData.id);
    setLoading(false);

    if (res.err) {
      toast.error(res.msg);
    } else {
      toast.success(res.msg);
      props.setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productData.id)
      );
      props.setDoNothing(Math.random());
    }
  };

  const handleConfirmDeleteModal = () => setDeleteModal((prev) => !prev);

  return (
    <Card
      className="w-[250px] h-[530px] hover:bg-[#f8fafc] relative"
      onMouseEnter={() => toggleTrashIcon(true)}
      onMouseLeave={() => toggleTrashIcon(false)}
    >
      {loading && <Loading />}
      <CardHeader className="h-[120px] overflow-y-scroll">
        {showTrashIcon && (
          <div onClick={() => setDeleteModal(true)}>
            <LucideTrash2
              size={24}
              className="absolute top-2 z-20 right-2 cursor-pointer"
              onMouseEnter={() => setTrashHovered(true)}
              onMouseLeave={() => setTrashHovered(false)}
              color={trashHovered ? "red" : "black"}
            />
          </div>
        )}
        <CardTitle>{productData.title}</CardTitle>
        <CardDescription>{productData.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] overflow-y-scroll">
          <img src={productData.imageUrl} alt={productData.name} width={250} />
          <CardDescription>{productData.label}</CardDescription>
          <CardDescription>{productData.description}</CardDescription>
        </div>
        <p>Price: {productData.price}</p>
        <p>In Stock: {productData.stock}</p>
        <PopoverButton
          productData={productData}
          updateProductData={updateProductData}
        />
      </CardContent>
      <Modal isOpen={deleteModal} onClose={handleConfirmDeleteModal}>
        <div className="p-3 flex justify-around">
          <Button
            onClick={() => {
              handleConfirmDeleteModal();
              handleDeleteProduct();
            }}
          >
            Yes
          </Button>
          <Button onClick={handleConfirmDeleteModal}>No</Button>
        </div>
      </Modal>
    </Card>
  );
}

export function AddNewProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Fragment>
      <Card
        onClick={openModal}
        className="flex justify-center content-center w-[250px] h-[100%] hover:bg-[#f8fafc] cursor-pointer"
      >
        <Plus size={48} className="self-center" />
      </Card>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>Add New Product</h1>
        <ProductForm closeModal={closeModal} />
      </Modal>
    </Fragment>
  );
}