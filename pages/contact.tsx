import React from "react";
import { NextPage } from "next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import RadioGroup from "@mui/material/RadioGroup";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { countries } from "countries-list";
import Radio from "@mui/material/Radio";
import Container from "@mui/material/Container";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useRouter } from "next/router";
import { defaultLocale, TEXTS_BY_LANGUAGE } from "../locale/constants";

// Obtemos a lista de países e dentro dela o nome deles
// para exibir dentro do Select
const countriesValues = Object.values(countries);
const countriesNames = countriesValues.map((country) => country.name);

const Contacto: NextPage = () => {
  // Obtemos a linguagem usando useRoute
  const { locale } = useRouter();

  // Obtemos os textos usando o idioma selecionado
  const { CONTACT } =
    TEXTS_BY_LANGUAGE[locale as keyof typeof TEXTS_BY_LANGUAGE] ??
    TEXTS_BY_LANGUAGE[defaultLocale];

  // Pou agora armazenamos o valor escolhido dentro de um estado
  const [selectedCountry, setCountry] = React.useState("");

  // Criamos uma função para atualizar o país selecionado
  const handleChange = (event: SelectChangeEvent<string>) => {
    setCountry(event.target.value);
  };

  // Criamos nosso formulário de contato usando o Material UI
  return (
    // Usamos Container para centralizar o formulário dentro da página
    <Container maxWidth="sm">
      {/* Usando Box criamos o container para o formulário */}
      <Box sx={{ maxWidth: 500, marginTop: 3 }}>
        {/* Usamos papel para criar o efeito de relevo */}
        <Paper
          elevation={4}
          sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Typography sx={{ fontWeight: 500, fontSize: 24 }}>
            {CONTACT.TITLE}
          </Typography>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label={CONTACT.FIELDS.NAME}
              variant="outlined"
              sx={{ width: 1 }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="email"
              id="outlined-basic"
              label={CONTACT.FIELDS.EMAIL}
              variant="outlined"
              sx={{ width: 1 }}
            />
          </Grid>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {CONTACT.FIELDS.COUNTRY}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCountry}
              label={CONTACT.FIELDS.COUNTRY}
              onChange={handleChange}
            >
              {/* Para cada país da nossa lista, criamos um item dentro do 
                  dropdown */}
              {countriesNames.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              {CONTACT.FIELDS.GENDER}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label={CONTACT.FIELDS.FEMALE}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label={CONTACT.FIELDS.MALE}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label={CONTACT.FIELDS.OTHER}
              />
            </RadioGroup>
          </FormControl>

          <FormGroup>
            <InputLabel id="demo-simple-select-label">
              {CONTACT.FIELDS.QUESTION}
            </InputLabel>
            <TextareaAutosize aria-label="minimum height" minRows={10} />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={CONTACT.FIELDS.TYCS}
            />
          </FormGroup>

          <Button variant="contained" sx={{ width: 1 }}>
            {CONTACT.SEND_BUTTON}
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};
export default Contacto;
