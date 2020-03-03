import { ITheme } from "@uifabric/styling";

export interface IComponentStyleProps {
  theme: ITheme;
  className?: string;
}

export const styles = (theme: ITheme) => {
  return {
    root: [
      {
        font:theme.fonts
      }
    ]
  };
};
