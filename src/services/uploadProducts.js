import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import products from "../data/games.json";

export const uploadProducts = async () => {
  const itemsCollection = collection(db, "games");

  try {
    for (const product of products) {
      const productRef = doc(itemsCollection, product.id.toString());
      await setDoc(productRef, product);
    }
    console.log("Productos subidos correctamente");
  } catch (error) {
    console.error("Error subiendo productos:", error);
  }
};