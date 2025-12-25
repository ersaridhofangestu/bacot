import { myStore } from "./firebase.int.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

export class FirebaseService {
  constructor() {
    this.testimonial = collection(myStore, "testimonial");
    this.subscribe = collection(myStore, "subscribe");
  }

  async FetchDataTestimonial() {
    try {
      const snapshot = await getDocs(this.testimonial);
      return await snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

    } catch (error) {
      throw new error();
    }
  }

  async FetchDataSubscribe() {
    try {
      const snapshot = await getDocs(this.subscribe)
      return await snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

    } catch (error) {
      throw new error();
    }
  }

  async Created(data) {
    try {
      const docRef = await addDoc(this.testimonial, data);
      return docRef.id;
    } catch (error) {
      throw new error();
    }
  }

  async Subscribe(data) {
    try {
      const docRef = await addDoc(this.subscribe, data);
      return docRef.id;
    } catch (error) {
      throw new error();
    }
  }
}
