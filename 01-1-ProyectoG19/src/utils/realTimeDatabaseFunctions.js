import { database } from "../config/Firebase";
import { push, ref, set } from "firebase/database";

const crearDocumento = async (data, currentUserID) => {
  try {
    const documentRef = ref(database, `usuarios/${currentUserID}/documentos`);
    const newDocument = push(documentRef);

    await set(newDocument, data);

    return newDocument.key;
  } catch (error) {
    console.log(error);
  }
};

export { crearDocumento };
