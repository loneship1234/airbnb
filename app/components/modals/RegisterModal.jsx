"use client";
import axios from "axios";
import { useState, useCallback } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
//
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./modal";
import Heading from "../Heading";
import Input from "@/app/components/Inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="welcome to airbnb" subtitle="connect to your account" />
      <Input
        id={"email"}
        label={"email"}
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id={"name"}
        label={"name"}
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id={"passowrd"}
        type="password"
        label={"password"}
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className=" flex flex-col gap-4 mt-3">
      <hr />
      <Button outline icon={FcGoogle} onClick={() => {}}>
        continue with google
      </Button>{" "}
      <Button outline icon={AiFillGithub} onClick={() => {}}>
        continue with github
      </Button>
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>already have an account ?</div>
          <div onClick={registerModal.onClose} className="text-neutral-800 cursor-pointer hover:underline">log in ?</div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="register"
      actionLabel={"continue"}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
