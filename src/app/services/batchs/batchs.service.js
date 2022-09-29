import { collection, getDocs } from "firebase/firestore";
import { db } from '../../libs/firebase';

export const getBatchs = async () => {
  const batchsRef = collection(db, "batchs");
  getDocs(batchsRef)
    .then((resp) => {
      const bts = resp.docs.map((doc) => doc.data());
      console.log('bts service => ', bts);
      return bts;
    })
    .catch((err) => console.log("error => ", err));
};
