import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "./favoritesSlice";

export const useFavoriteActions = () => {
  const dispatch = useDispatch();
  const addFavoriteHook = (id: number) => dispatch(addToFavorites(id));
  const removeFavoriteHook = (id: number) => dispatch(removeFromFavorites(id));

  return {
    addFavoriteHook,
    removeFavoriteHook,
  };
};
