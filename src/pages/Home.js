
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-sharp fa-solid fa-arrow-right } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

// const Image = styled.img`
//     width:100%
// `

const Maindiv = styled.p`
    background-color:#385993;
    margin-top:-50px;
    padding-bottom:50px;
    

`
const Paragraph = styled.p`
    font-size:14px;
    padding-top:40px;
`

const Contentdiv = styled.h1`
    font-size:14px;
    color:white;
    text-align:center;
    padding-top:30px;

    .Btn{
        height:40px;
        width:100px;
        background:#B9A788 !important;
        color:#ffff;
        border:none;
        cursor:pointer;
        margin-top:20px;
    }
    
    .Font{
        font-size:14px;
        padding-left:5px;
        
 }

 @media(max-width:738px){
       padding-top:10px;

 }

`


export default function Home() {
    return (

        <Maindiv>
            {/* <Image src='./assets/Images/image.png' alt='home deocor'></Image> */}
            <Contentdiv>
                <Paragraph>Removes Housing Development</Paragraph>
                <h1>Globe home for your <br></br> future genration</h1>
                <button className="Btn fw-bold">Find More
                    <FontAwesomeIcon className='Font' icon={faArrowRight} />
                </button>



            </Contentdiv>
        </Maindiv>



    );
}