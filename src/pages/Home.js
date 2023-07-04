
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-sharp fa-solid fa-arrow-right } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

// const Image = styled.img`
//     width:100%
// `

const Maindiv = styled.p`
   
    

`
const Paragraph = styled.p`
    font-size:14px;
    padding-top:40px;
`

const Contentdiv = styled.h1`
    background-color:#385993;
    margin-top:-50px;
    padding-bottom:50px;
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
// ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

const Secondsection = styled.p`
margin-top:-10px;
background-color:02AAFE;



.our-mission{
    color:#B9A788;
    padding-top:30px;


}

.text{
    color:#23374D;
    
}

.content{
    font-size:13px;
}
.second-section-btn{
    background-color:#B9A788;
    border:none;
    color: #ffff;
    height:50px;
    width:170px;
}

.right-arrow{
    padding-left:6px;
}

`

const SecondsectionImage=styled.img`
height:auto;
width:100%;

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


            <Secondsection>
                <div class="d-flex ">
                    <div class="p-2  flex-fill d-flex justify-content-center ">
                        <div className=' '>
                            <h6 className=' our-mission fw-bold'>OUR MISSION</h6>
                            <h1 className=' text '>To be the most trusted name in <br></br> real estate globally</h1>
                            <p className='content fw-bold '>Lorem ipsum dolor sit amet, consectetur  adipiscing elit.<br></br> Fusce volutpat sollicitudin mi eget dapibus.Aliquam id <br></br>mollis risus. Proin sodales vel nunc sit amet posuere.<br></br> Nunc lacinia diam enim, vel venenatis elit iaculis ac.</p>
                            <button className='second-section-btn fw-bold'>More About Us
                            <FontAwesomeIcon className='right-arrow' icon={faArrowRight} />

                            </button>
                        </div>
                    </div>
                    <div class="p-2 flex-fill ">
                        <SecondsectionImage src='/assets/Images/images.jpg' className='image-fluid'></SecondsectionImage>
                    </div>
                </div>




            </Secondsection>




















        </Maindiv>



    );
}