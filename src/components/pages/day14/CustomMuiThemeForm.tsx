import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box';

export const CustomMuiThemeForm = () => {
  const schema: RJSFSchema = {
    title: "Custom MUI Theme Form",
    type: "object",
    required: [],
    properties: {
      foo: {
        type: "string",
        const: "foo"
      }
    }
  }

  const theme = createTheme(
    {
      palette: {
        primary: {
          main: "#ffd700"
        }
      }
    }
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{width: "400px", ml: 2, mt: 2}}>
        <Form
          schema={schema}
          validator={validator}
        />
      </Box>
    </ThemeProvider>
  )
}