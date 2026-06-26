import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

async function criarPedido() {
  await addDoc(collection(db, "pedidos"), {
    cliente: "Leonardo",
    itens: ["Espetinho", "Coca"],
    total: 20,
    status: "pendente"
  });
}

criarPedido();
