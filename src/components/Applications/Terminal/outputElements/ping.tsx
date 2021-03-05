import React, { useEffect, useState } from "react";
import axios from "axios";

const Ping = (hostname: string) => {
  return new Promise<React.ReactNode>((resolve, reject) => {
    axios
      .get("https://api.hackertarget.com/nping/", {
        params: { q: hostname },
      })
      .then((el) => {
        resolve(
          <div>
            {el.data.split("\n").map((txt: any) => (
              <div>{txt}</div>
            ))}
          </div>
        );
      })
      .catch(() => {
        resolve(<div>Something went wrong</div>);
      });
  });
};

export default Ping;
