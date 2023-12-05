import styled from "styled-components";

export const Principal = styled.div`
    width: 100vw;
    position: fixed;
    align-items: center;
    display: flex;
    flex-direction: row;
    top: 0px;
    left: 0px;
    padding: 1.5rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #1d1d1d;
    padding-left: 3rem;
    margin-bottom: 2rem;
    @media (max-width: 700px) {
    justify-content: center;
    align-items: center;

    }
   
 

`;
export const Nav = styled.nav`
     display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

`;
export const Invisible = styled.nav`
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 700px) {
    display: none;
    justify-content: center;

    }

`;
export const Align = styled.div`
     display: flex;
     gap: 1.5rem;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    


`;
export const Formulario = styled.form`
     display: flex;
    flex-direction: column;
    gap: 2rem;
    min-height: 800px;
    max-height: auto;
    width: 90%;
    padding: 2rem;
    margin-top: 2.5rem;
    @media (max-width: 700px) {
      padding: none;
      justify-content: center;
      align-items: center;
      width: 100%;
      
  

    }

`;
export const FeedContain = styled.form`
     display: flex;
    min-height: 800px;
    max-height: auto;
    width: 100vw;
    margin-top: 2.5rem;

`;

export const Logo = styled.img`
  width: 70px;
  height: 50px;
`;
export const LinkAT = styled.a`

  color: #1d1d1d;
  text-decoration: none;
  font-size: 22px
`;
export const LinkATW = styled.a`

  color: #fff;
  text-decoration: none;
  font-size: 22px;
  @media (max-width: 700px) {
    display: none;
  

    }

`
export const Mytitle = styled.h1`
    font-size: 100px;
    color: #D9B490;
    letter-spacing: 4px;
    @media (max-width: 700px) {
    font-size: 55px;
  

    }
`;
export const Error = styled.p`
color: #b81414 !important;
  
  `;




export const ItemHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
background: #1d1d1d;
border-radius: 0.2rem;
cursor: pointer;
@media (max-width: 700px) {
    width  : 75px ;
    height: 75px;

    }
 
`;
export const ItemCadastro = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 250px;
height: 100px;
background: #F3BF38;
border-radius: 0.2rem;
cursor: pointer;
 
`;
export const ItemRec = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 250px;
height: 100px;
background: #D33030;
border-radius: 0.2rem;
cursor: pointer;
 
`;
export const ItemReset = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 350px;
height: 100px;
background: #E27A3B;
border-radius: 0.2rem;
cursor: pointer;
 
`;
export const HeaderContain = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
gap: 2rem;
width: 100%;
height: auto;
  @media (max-width: 700px) {
    width: 100%;
   flex-direction: column;
   align-items: center;

    }



 
`;
export const HeaderContainExpo = styled.div`
display: flex;
align-items: center;
margin-top: 4rem;
flex-direction: row;
gap: 0.5rem;
justify-content: space-around;
width: auto;
height: auto;
@media (max-width: 700px) {
    flex-direction: column;
      
  

    }

 
`;
export const ItemHeaderExit = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
background: #D33030;
border-radius: 0.2rem;
cursor: pointer;
@media (max-width: 700px) {
    width  : 75px ;
    height: 75px;

    }
 
`;
export const AlignRes = styled.div`
@media (max-width: 700px) {
  display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
width: 100%;
  

    }


 
`;
export const UseHeaderNav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 2rem;
width: 50%;
height: 200px;
@media (max-width: 700px) {
    flex-direction: row;
    height: auto;
    width: 100%;
      
  

    }

 
`;
