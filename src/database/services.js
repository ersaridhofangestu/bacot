import { myStore } from "./firebase.int.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

export class FirebaseService {
  constructor() {
    this.testimonial = collection(myStore, "testimonial");
    this.subscribe = collection(myStore, "subscribe");
  }

  async FetchDataTetimonial() {
    try {
      const querySnapshot = await getDocs(this.testimonial);
      const data = querySnapshot?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return data;
    } catch (error) {
      throw new error();
    }
  }
  async FetchDataSubscribe() {
    try {
      const querySnapshot = await getDocs(this.subscribe);
      const data = querySnapshot?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return data;
    } catch (error) {
      throw new error();
    }
  }

  async Created(datas) {
    try {
      const docRef = await addDoc(this.testimonial, datas);
      return docRef.id;
    } catch (error) {
      throw new error();
    }
  }

  async Subscribe(datas) {
    try {
      const docRef = await addDoc(this.subscribe, datas);
      return docRef.id;
    } catch (error) {
      throw new error();
    }
  }
}
