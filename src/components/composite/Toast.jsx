import { Toaster } from "react-hot-toast";
import { useTheme } from "styled-components";

export const Toast = () => {

  const theme = useTheme();
  
  const toastOptions = {
    duration: 3000,
    style: {
      background: theme.backgroundElementsColor,
      color: theme.fontColor,
    }
  };

  return (
    <Toaster toastOptions={toastOptions}/>
  );
};