import {
  PonderadoResponse,
  PonderadoSent,
} from "../models/Ponderado.interface";
import { WebApiInstance } from "./api";

export const fetchPonderado = async (
  data: PonderadoSent
): Promise<PonderadoResponse[]> =>
  WebApiInstance.post("ponderado/generate", data)
    .then((res) => res.data)
    .catch((err: any) => {
      throw err.response.data;
    });
