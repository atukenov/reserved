import { createGlobalStyle } from "styled-components";
import { device } from "./utils/types";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

		@font-face {
			font-family: "NotoSans Light";
			src: url("/fonts/NotoSans-Light.ttf") format("truetype");
			font-style: normal;
	}

	@font-face {
			font-family: "NotoSans Bold";
			src: url("/fonts/NotoSans-Bold.ttf") format("truetype");
			font-style: normal;
	}

    @font-face {
        font-family: "GloriaHallelujah Regular";
        src: url("/fonts/GloriaHallelujah-Regular.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
      font-family: "Dancing Script";
      src: url("/fonts/DancingScript.ttf");
      font-style: normal;
    }


    body,
    html,
    a {
        font-family: "NotoSans Light", sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        // background: linear-gradient(#005aa7, #000);
				/* background-image: url('/img/web.jpg'); */
        /* background-color: black; */
    		background-size: cover;
        overflow-x: hidden;
    }

    // Simple
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(0,0,0,0.1);
    }
    ::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background: rgba(0,0,0,0.2);
    }
    ::-webkit-scrollbar-thumb:hover{
      background: rgba(0,0,0,0.4);
    }
    ::-webkit-scrollbar-thumb:active{
      background: rgba(0,0,0,.9);
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

    }

    h1 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 32px;
        line-height: 1.18;
        margin: 0;
        font-weight: 600;

        @media ${device.tablet} {
          font-size: 38px;
        }
      
        @media ${device.laptop} {
          font-size: 42px;
        }
    }

    h2 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 42px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 35.25px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 24px;
        }
    }

    h3 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 32.8px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 27.5px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 18.7px;
        }
    }

    h4 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 28px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 23.5;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 16px;
        }
    }

    h5 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 23.3px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 19.5px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 13.3px;
        }
    }

    h6 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 18.8px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 15.8px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 10.7px;
        }
    }

    p {
        color: #1D1E18;
        font-size: 21px;        
        line-height: 1.41;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #1D1E18;

        :hover {
            color: #2e186a;
        }
    }

    ul {
      list-style-type: none;
    }
    
    li {
      font-size: 1.2rem;
    }

    *:focus {
        outline: none;
    }
`;
