import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      background: string;
      primary: string;
      second: string;
      text: string;
      gray: string;
      error: string;
      green: string;
      highlight: string;
      blue: string;
    };
  }
}
