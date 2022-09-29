import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../libs/firebase";
import Card from "../../components/card/Card";

const Dashboard = () => {
  const [state, setState] = useState([]);
  const getBatchs = async () => {
    const batchsRef = collection(db, "batchs");
    getDocs(batchsRef)
      .then((resp) => {
        const bts = resp.docs.map((doc) => doc.data());
        console.log("bts service => ", bts);
        setState(bts);
      })
      .catch((err) => console.log("error => ", err));
  };

  useEffect(() => {
    getBatchs();
  }, []);

  useEffect(() => {
    console.log("batchs => ", state);
  }, [state]);

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-3">
      {state.map((e) => (
        <Card name={e.name} />
      ))}
    </div>
  );
};
export default Dashboard;
