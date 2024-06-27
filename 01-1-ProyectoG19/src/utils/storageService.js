import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { nameFileUUID } from "../utils/utils";
import { storage } from "../config/Firebase";

const storageServiceImg = async (image, dirName) => {
  try {
    const nameWithType = nameFileUUID(image);

    // const refImg = ref(storage, nameWithType);
    const refImg = ref(storage, `${dirName}/${nameWithType}`);

    // Dado que image almacena una URL base64
    const blob = await fetch(image).then((res) => res.blob());
    const result = await uploadBytes(refImg, blob);
    const urlImg = await getDownloadURL(refImg);
    console.log(result);

    return urlImg;
  } catch (error) {
    console.log(error);
  }
};

export { storageServiceImg };
