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
import {InnerDefinition} from "./components/pages/day4/InnerDefinition";
import {ImportJsonSchema} from "./components/pages/day4/ImportJsonSchema";
import {SingleFileUpload} from "./components/pages/day5/SingleFileUpload";
import {MultipleFileUpload} from "./components/pages/day5/MultipleFileUpload";
import {UiSchemaOption} from "./components/pages/day6/UiSchemaOption";
import {UiSchemaForString} from "./components/pages/day6/UiSchemaForString";
import {UiSchemaForArray} from "./components/pages/day6/UiSchemaForArray";
import {UiSchemaEmptyValue} from "./components/pages/day6/UiSchemaEmptyValue";
import {UiSchemaForButton} from "./components/pages/day6/UiSchemaForButton";
import {OverrideOriginalWidgetForm} from "./components/pages/day7/OverrideOriginalWidgetForm";
import {ConsoleLogWidgetForm} from "./components/pages/day7/ConsoleLogWidgetForm";
import {SwitchWidgetForm} from "./components/pages/day7/SwitchWidgetForm";
import {CustomOptionWidgetForm} from "./components/pages/day7/CustomOptionWidgetForm";
import {GeoFieldForm} from "./components/pages/day8/GeoFieldForm";
import {EnumListFieldForm} from "./components/pages/day8/EnumListFieldForm";
import {ConsoleLogInputMuiTemplateForm} from "./components/pages/day9/ConsoleLogInputMuiTemplateForm";
import {MyObjectFieldTemplateForm} from "./components/pages/day9/MyObjectFieldTemplateForm";
import {ObjectFieldAndFieldTemplateForm} from "./components/pages/day9/ObjectFieldAndFieldTemplateForm";
import {LiveValidationForm} from "./components/pages/day10/LiveValidationForm";
import {DisabledHtml5ValidationForm} from "./components/pages/day10/DisabledHtml5ValidationForm";
import {EnabledHtml5ValidationForm} from "./components/pages/day10/EnabledHtml5ValidationForm";
import {CustomValidationRuleForm} from "./components/pages/day10/CustomValidationRuleForm";
import {CustomValidationMessageForm} from "./components/pages/day10/CustomValidationMessageForm";
import {NotExistsLocalizerForm} from "./components/pages/day11/NotExistsLocalizerForm";
import {NewLocalizerForm} from "./components/pages/day11/NewLocalizerForm";
import {LocalizerWithValidationMessageForm} from "./components/pages/day11/LocalizerWithValidationMessageForm";
import {AdditionalAjvOptionsForm} from "./components/pages/day12/AdditionalAjvOptionsForm";

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
      },
      {
        path: "day4/",
        children: [
          {
            path: "inner_definition",
            element: <InnerDefinition />
          },
          {
            path: "import_json_schema",
            element: <ImportJsonSchema />
          }
        ]
      },
      {
        path: "day5/",
        children: [
          {
            path: "single_file_upload",
            element: <SingleFileUpload />
          },
          {
            path: "multiple_file_upload",
            element: <MultipleFileUpload />
          }
        ]
      },
      {
        path: "day6/",
        children: [
          {
            path: "ui_schema_option",
            element: <UiSchemaOption />
          },
          {
            path: "ui_schema_for_string",
            element: <UiSchemaForString />
          },
          {
            path: "ui_schema_empty_value",
            element: <UiSchemaEmptyValue />
          },
          {
            path: "ui_schema_for_array",
            element: <UiSchemaForArray />
          },
          {
            path: "ui_schema_for_button",
            element: <UiSchemaForButton />
          }
        ]
      },
      {
        path: "day7/",
        children: [
          {
            path: "switch_widget",
            element: <SwitchWidgetForm />
          },
          {
            path: "override_original_textarea_widget",
            element: <OverrideOriginalWidgetForm />
          },
          {
            path: "console_log_widget",
            element: <ConsoleLogWidgetForm />
          },
          {
            path: "custom_option_widget",
            element: <CustomOptionWidgetForm />
          }
        ]
      },
      {
        path: "day8",
        children: [
          {
            path: "geo",
            element: <GeoFieldForm />
          },
          {
            path: "enumList",
            element: <EnumListFieldForm />
          }
        ]
      },
      {
        path: "day9",
        children: [
          {
            path: "console_log",
            element: <ConsoleLogInputMuiTemplateForm />
          },
          {
            path: "object_field",
            element: <MyObjectFieldTemplateForm />
          },
          {
            path: "object_field_and_field_template",
            element: <ObjectFieldAndFieldTemplateForm />
          }
        ]
      },
      {
        path: "day10",
        children: [
          {
            path: "live_validation",
            element: <LiveValidationForm />
          },
          {
            path: "enabled_html5_validation",
            element: <EnabledHtml5ValidationForm />
          },
          {
            path: "disabled_html5_validation",
            element: <DisabledHtml5ValidationForm />
          },
          {
            path: "custom_validation_rule",
            element: <CustomValidationRuleForm />
          },
          {
            path: "custom_validation_message",
            element: <CustomValidationMessageForm />
          }
        ]
      },
      {
        path: "day11",
        children: [
          {
            path: "not_exists_localizer",
            element: <NotExistsLocalizerForm />
          },
          {
            path: "new_localizer",
            element: <NewLocalizerForm />
          },
          {
            path: "localizer_with_validation_message",
            element: <LocalizerWithValidationMessageForm />
          },
        ]
      },
      {
        "path": "day12",
        children: [
          {
            path: "additional_ajv_options",
            element: <AdditionalAjvOptionsForm />
          }
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
