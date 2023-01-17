import { Inputs } from "types/users";

const postNewUser = (data: Inputs) => {
  const { name, email, phone, position, files } = data;
  const formData = new FormData();

  formData.append("position_id", "2");
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("photo", files[0]);

  return formData;
};

export { postNewUser };
