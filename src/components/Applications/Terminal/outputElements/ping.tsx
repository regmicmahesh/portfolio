import React, { useEffect, useState } from "react";
import axios from "axios";

export interface IPing {
  hostname: string;
}

const Ping: React.FC<IPing> = ({ hostname }) => {
  const [res, setRes] = useState("");

  useEffect(() => {
    async function loadRes() {
      const webRes = await axios.get("https://api.hackertarget.com/nping/", {
        params: { q: hostname },
      });
      setRes(webRes.data);
    }

    loadRes();
  }, []);

  return (
    <div>
      {res.split("\n").map((el) => {
        return <div key={el}>{el}</div>;
      })}
    </div>
  );
};

export default Ping;
