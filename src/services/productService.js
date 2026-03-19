import { db } from "./firebaseConfig";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

//todos los juegos
export const getGames= async ()=>{
    const itemsCollection = collection(db, "games");
    const snapshot = await getDocs(itemsCollection);

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

//Categorias

export const getGamesbyCategory = async (idCategory)=>{
    const itemsCollection = collection(db, "games");
    const q = query(itemsCollection, where("platform", "==",idCategory));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

//Detalle de un jeugo

export const getGamesbyId = async (idGame)=>{
    const docRef = doc(db, "games", idGame);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
    } else {
        throw new Error("El juego no existe");
    }
};