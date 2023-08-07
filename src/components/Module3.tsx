import { Module } from "sample-app-shared/dist/esm/components/Module";
import { useSampleAppContext } from "sample-app-shared/dist/esm/contexts/sample-app";
import { Module1 } from "adriana-sample-app-module-1/dist/esm/components/Module1";

// -----------------------------------------------------------------

export const Module3 = () => {
  const { name } = useSampleAppContext();

  return (
    <Module name={`Sub Module 3 - ${name}`}>
      <div>
        <h1>{name}</h1>

        <p>Field name is empty: {!!name.trim() ? "false" : "true"}</p>

        <Module1 />
      </div>
    </Module>
  );
};
