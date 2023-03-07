import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Search by character id
const _getSWApi = async (id) => {
  const SWapi = `https://swapi.dev/api/people/${id}`;
  const response = await axios.get(SWapi);
  console.log(SWapi);
  return response.data;
};

// export const useGetWorkOrder = (id?: string) => {
//   return useQuery(
//     ["workorder-by-id", id],
//     async () => {
//       const resp = (await httpClient.get) < WorkOrder > `/api/workorders/${id}`;
//       return resp.data;
//     },
//     { enabled: !!id }
//   );
// };

export const useCharacterById = (id) => {
  return useQuery(["character-by-id", id], _getSWApi.bind(this, id), {
    enabled: !!id,
  });
};

// Search by character name
const _getSearchCharacter = async (name) => {
  const SWapi = `https://swapi.dev/api/people/?search=${name}`;
  console.log(SWapi);

  const response = await axios.get(SWapi);
  return response.data;
};

export const useSearchCharacter = (name) => {
  return useQuery(["getSearchCharacter", name], () =>
    _getSearchCharacter(name)
  );
};

// Search by film name
const _getSearchFilm = async (name) => {
  const SWapi = `https://swapi.dev/api/films/?search=${name}`;
  console.log(SWapi);

  const response = await axios.get(SWapi);
  return response.data;
};

export const useSearchFilm = (name) => {
  return useQuery(["getSearchCharacter", name], () => _getSearchFilm(name));
};
