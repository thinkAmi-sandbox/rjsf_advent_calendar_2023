import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {TypeOnly} from "./components/pages/day2/TypeOnly";
import {StringFormat} from "./components/pages/day2/StringFormat";
import {SelectField} from "./components/pages/day2/SelectField";
import {DeprecatedEnumNames} from "./components/pages/day2/DeprecatedEnumNames";
import {ChainFieldByInput} from "./components/pages/day3/dependencies/ChainFieldByInput";
import {ChainFieldByBoolean} from "./components/pages/day3/dependencies/ChainFieldByBoolean";
import {ChainFieldBySelection} from "./components/pages/day3/dependencies/ChainFieldBySelection";
import {RequiredFieldBySelection} from "./components/pages/day3/dependencies/RequiredFieldBySelection";
import {RequiredFieldByIf} from "./components/pages/day3/ifThenElse/RequiredFieldByIf";
import {DependentSchemas} from "./components/pages/day3/dependencies/DependentSchemas";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "day2/",
        children: [
          {
            path: "type_only",
            element: <TypeOnly />
          },
          {
            path: "string_format",
            element: <StringFormat />
          },
          {
            path: "select_field",
            element: <SelectField />
          },
          {
            path: "deprecated_enum_names",
            element: <DeprecatedEnumNames />
          },
        ]
      },
      {
        path: "day3/",
        children: [
          {
            path: "dependencies/",
            children: [
              {
                path: "chain_field_by_input",
                element: <ChainFieldByInput />
              },
              {
                path: "chain_field_by_boolean",
                element: <ChainFieldByBoolean />
              },
              {
                path: "chain_field_by_selection",
                element: <ChainFieldBySelection />
              },
              {
                path: "required_field_by_selection",
                element: <RequiredFieldBySelection />
              },
              {
                path: "dependent_schemas",
                element: <DependentSchemas />
              }
            ]
          },
          {
            path: "if_then_else/",
            children: [
              {
                path: "required_field_by_if",
                element: <RequiredFieldByIf />
              }
            ]
          },
        ]
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
