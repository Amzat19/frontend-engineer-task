import styled from "styled-components";

const HeaderStyles = styled.div`
width: 100vw;
height: 64px;
display: grid;
align-items: center;
justify-content: center;
border-bottom: 1px solid #EAECF0;

.flex-header {
   display: grid;
   grid-template-columns: 1fr 1fr;
   justify-content: center;
   align-items: center;
   width: 88vw;

   .MenuIcon {
   justify-self: end;
}
}

@media (max-width: 999px){
   .left-nav, .right-nav, .flex-header bottom, hr{
       display: none
   }
}

@media (min-width: 1000px) {
   height: 138px;
   .flex-header{
       width: 88vw;
       height: 64px;
       margin: auto;
       .left-nav {
           nav{
               display: flex;
               align-items: center;
               gap: 16px;
               a {
                   text-decoration: none;
                   color: #344054;
                   font-weight: 500;
                   font-size: 16px;
                   white-space: nowrap;
               }
           }
           
       }
       .right-nav {
           justify-self: end;
           display: flex;
           align-items: center;
           gap: 16px;
           position: relative;
           button {
               width: 150px;
               height: 40px;
               display: flex;
               justify-content: center;
               align-items: center;
               gap: 8px;
               background-color: transparent;
               border: 1px solid #D0D5DD;
               border-radius: 8px;
               font-weight: 500;
               font-size: 14px;
           }
           .search-icon{
               position: absolute;
               left: 12px;
           }
           input{
               width: 280px;
               height: 44px;
               border: 1px solid #D0D5DD;
               border-radius: 8px;
               padding-left: 34px;
               padding-top: 7px;
               ::placeholder{
                   font-weight: 400;
                   font-size: 16px;
               }
           }
       }
       .mobile-header-logo, .MenuIcon {
           display: none;
       }
   }
}
`;

export default HeaderStyles;