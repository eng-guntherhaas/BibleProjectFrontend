import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useRegister() {
  const router = useRouter();

  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    register({ first_name, last_name, email, password, re_password })
      .unwrap()
      .then(() => {
        toast.success(
          "Inscription réussie. Veuillez vérifier votre courrier électronique pour vérifier votre compte."
        );
        router.push("/auth/login");
      })
      .catch((error) => {
        toast.error("N'a pas réussi à créer un compte");
      });
  };

  return {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  };
}
