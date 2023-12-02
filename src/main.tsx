import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {TypeOnly} from "./components/pages/day2/TypeOnly";
import {StringFormat} from "./components/pages/day2/StringFormat";
import {SelectField} from "./components/pages/day2/SelectField";
import {DeprecatedEnumNames} from "./components/pages/day2/DeprecatedEnumNames";

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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
