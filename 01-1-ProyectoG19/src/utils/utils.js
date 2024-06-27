import { v4 as uuidv4 } from "uuid";

const nameFileUUID = (image) => {
  const header = image.split(";")[0]; // "data:image/jpeg"
  // Obtener el tipo de imagen (jpeg, png, etc.)
  const imageType = header.split("/")[1]; // "jpeg"
  console.log(imageType);
  const newUUID = uuidv4();
  const newName = `${newUUID}.${imageType}`;
  return newName;
};

const convertDateToLocal = (fechaYHora, zonaHoraria = "es-ES") => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const fecha = new Date(fechaYHora);
  return fecha.toLocaleDateString(zonaHoraria, options);
  //'viernes, 31 de mayo de 2024'
};

export { convertDateToLocal, nameFileUUID };
