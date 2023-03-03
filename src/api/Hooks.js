import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getSWApi = async (id) => {
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
  return useQuery(["character-by-id", id], getSWApi.bind(this, id), {
    enabled: !!id,
  });
};

export const getSearchCharacter = async (name) => {
  const SWapi = `https://swapi.dev/api/people/?search=${name}`;
  console.log(SWapi);

  const response = await axios.get(SWapi);
  return response.data;
};

export const useSearchCharacter = (name) => {
  const { isLoading, isError, data, error, isFetching } = useQuery(
    ["getSearchCharacter", name],
    () => getSearchCharacter(name)
  );
  return { data, isFetching, isLoading };
};
