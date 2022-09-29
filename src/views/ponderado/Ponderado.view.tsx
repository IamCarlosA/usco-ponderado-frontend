/* eslint-disable arrow-body-style */
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./ponderado.scss";

export const Ponderado = () => {
  return (
    <Card className="borderCard">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography
            align="center"
            variant="h3"
            component="div"
            style={{ fontWeight: "bold" }}
            className="textDesktop"
          >
            PONDERADOS UNIVERSIDAD SURCOLOMBIANA
          </Typography>
          <Typography
            align="center"
            variant="h5"
            component="div"
            style={{ fontWeight: "bold" }}
            className="textMobile"
          >
            PONDERADOS UNIVERSIDAD SURCOLOMBIANA
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography
            variant="body1"
            component="p"
            style={{ textAlign: "justify" }}
          >
            <span style={{ fontWeight: "bold" }}>IMPORTANTE:</span> Los
            resultados obtenidos en este ponderado{" "}
            <span style={{ fontWeight: "bold" }}>NO TIENEN RELACIÓN</span> con
            los procesos de admisión y{" "}
            <span style={{ fontWeight: "bold" }}>NO ASEGURAN</span> el ingreso
            al programa que se desea. Este aplicativo es única y exclusivamente
            una{" "}
            <span style={{ fontWeight: "bold" }}>
              HERRAMIENTA DE ORIENTACIÓN
            </span>{" "}
            y es autonomía de la persona utilizarlo.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Lectura Crítica"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Ciencias Naturales"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Matemáticas"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Inglés"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Sociales y Ciudadanas"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Realizar Ponderado
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Realizar encuesta
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
