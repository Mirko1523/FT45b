// botones.jsx
import React from "react";

const Botones = (props) => {
  const { alerts } = props;
  return (
    <div>
      <button type="button" name="modulo 1" onClick={() => alert(alerts.m1)}>
        Módulo 1
      </button>
    </div>
  );
};

const Botones2 = (props) => {
  const { alerts } = props;  //ME HABIA OLVIDADO DE LAS PROPS xd
  return (
    <div>
      <button type="button" name="modulo 2" onClick={() => alert(alerts.m2)}>
        Módulo 2
      </button>
    </div>
  );
};

export { Botones, Botones2 };
