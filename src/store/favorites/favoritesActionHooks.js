import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "./favoritesSlice";

export const useFavoriteActions = () => {
  const dispatch = useDispatch();
  const addFavoriteHook = (id) => dispatch(addToFavorites(id));
  const removeFavoriteHook = (id) => dispatch(removeFromFavorites(id));

  return {
    addFavoriteHook,
    removeFavoriteHook,
  };
};
