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
export const useSearchCharacter = (name) => {
  return useQuery(["getSearchCharacter", name], async () => {
    const SWapi = `https://swapi.dev/api/people/?search=${name}`;
    const response = await axios.get(SWapi);
    return response.data;
  });
};

// Search by film name
export const useSearchFilm = (name) => {
  return useQuery(["getSearchCharacter", name], async () => {
    const SWapi = `https://swapi.dev/api/films/?search=${name}`;
    console.log(SWapi);

    const response = await axios.get(SWapi);
    return response.data;
  });
};

// Search by film id
export const getSearchFilmById = async (item) => {
  const SWapi = `https://swapi.dev/api/films/${item.queryKey[1]}`;
  console.log(SWapi);

  const response = await axios.get(SWapi);
  return response.data;
};

// Search by species name
export const useSearchSpecies = (name) => {
  return useQuery(["getSearchSpecies", name], async () => {
    const SWapi = `https://swapi.dev/api/species/?search=${name}`;
    console.log(SWapi);

    const response = await axios.get(SWapi);
    return response.data;
  });
};
