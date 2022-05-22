import styled from "styled-components";

const MainHeaderStyles = styled.div`
    width: 88vw;
    margin: 0 auto;

    .main-header-text {
        h2 {

            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            color: rgba(16, 24, 40, 1);
        }
        p {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: rgba(102, 112, 133, 1);

        }
    }
    .main-header-actions {
         padding-top: 16px;
         display: flex;
         gap: 12px;

         .main-header-buttons {
            height: 40px;
            width: 105px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
         }

         .import {
             background-color: rgba(255, 255, 255, 1);
              border: 1px solid rgba(208, 213, 221, 1);
         }

         .add {
            background-color: rgba(127, 86, 217, 1);
            border: 1px solid rgba(127, 86, 217, 1);
            color: rgba(255, 255, 255, 1);
         }
    }

    @media (min-width: 1000px){
        display: grid;
        grid-template-columns: 1fr 1fr;

        .main-header-actions{
            justify-self: end;
        }
    }
`;

export default MainHeaderStyles;