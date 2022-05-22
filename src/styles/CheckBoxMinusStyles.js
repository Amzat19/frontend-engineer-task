import styled from"styled-components";

const CheckBoxMinusStyles = styled.div`
display: inline-flex;
cursor: pointer;
position: relative;

input {
    height: 20px;
    width: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid #D0D5DD;
    border-radius: 4px;
    outline: none;
    transition-duration: 0.3s;
    background-color: #FFFFFF;
    cursor: pointer;
}

input:checked {
border: 1px solid #7F56D9;
background-color: #F9F5FF;
}

input:checked ~ label{
    position: absolute;
    display: block;
    left: 0.25rem;
    top: -3px;
}

label {
    display: none;
}

`;

export default CheckBoxMinusStyles;