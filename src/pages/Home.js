
import { faArrowRight, faBuilding, faCircle, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-sharp fa-solid fa-arrow-right } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";


// Hero Section Style

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



// Second Section style

const Secondsection = styled.p`
margin-top:-10px;
background-color:02AAFE;

.second-section-main-div{
    padding-top:40px;
}

.our-mission{
    color:#B9A788;

}

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

@media(max-width:738px){
    .second-section-main-div{
        flex-direction:column;
    }
}

`

const SecondsectionImage = styled.img`
width:80%;
height:100%;
`



// Third Section Style

const ThirdSection = styled.p`
    padding-bottom:40px;

    


.services{
    color:#B9A788;
    text-align:center;
    padding-top:40px;
}

.third-section-text{
    text-align:center;
    color:#23374D;
}

.box1{
    height:auto;
    width:20%;
    border-radius:5px;
    background:#D9D9D9;
    box-shadow:1px 1px 2px 2px #00000078;

    :hover{
        background-color:#ffff !important;
    }
}

.box2{
    height:auto;
    width:20%;
    border-radius:5px;
    background:#D9D9D9;
    box-shadow:1px 1px 2px 2px #00000078;

    :hover{
        background-color:#ffff !important;
    }
}
.box3{
    height:auto;
    width:20%;
    border-radius:5px;
    background:#D9D9D9;
    box-shadow:1px 1px 2px 2px #00000078;

    :hover{
        background-color:#ffff !important;
    }
}
.absolute{
    position:absolute;
    padding-top:7px;
    padding-left:100px;
    font-size:50px;
    
   
}
.relative{
    position:relative;
    right:26px;
    top:4px;
    opacity:0.8;
    font-size:50px;
    color:#DFF1F6;
    

    
}

`




export default function Home() {
    return (
        // Hero Section
        <Maindiv>
            {/* <Image src='./assets/Images/image.png' alt='home deocor'></Image> */}
            <Contentdiv>
                <Paragraph>Removes Housing Development</Paragraph>
                <h1>Globe home for your <br></br> future genration</h1>
                <button className="Btn fw-bold">Find More
                    <FontAwesomeIcon className='Font' icon={faArrowRight} />
                </button>
            </Contentdiv>

            {/* Second Section */}
            <Secondsection>
                <div className="d-flex second-section-main-div">
                    <div className="p-2  flex-fill d-flex justify-content-center ">
                        <div className=' '>
                            <h6 className=' our-mission fw-bold'>OUR MISSION</h6>
                            <h3 className=' text fw-bold '>To be the most trusted name in <br></br> real estate globally</h3>
                            <p className='content fw-bold '>Lorem ipsum dolor sit amet, consectetur  adipiscing elit.<br></br> Fusce volutpat sollicitudin mi eget dapibus.Aliquam id <br></br>mollis risus. Proin sodales vel nunc sit amet posuere.<br></br> Nunc lacinia diam enim, vel venenatis elit iaculis ac.</p>
                            <button className='second-section-btn fw-bold'>More About Us
                                <FontAwesomeIcon className='right-arrow' icon={faArrowRight} />

                            </button>
                        </div>
                    </div>
                    <div className="p-2 flex-fill ">
                        <SecondsectionImage src='/assets/Images/images.jpg' className='image-fluid'></SecondsectionImage>
                    </div>
                </div>
            </Secondsection>

            {/* Third Section */}

            <ThirdSection className='third-section'>

                <div className='col-sm-12  '>
                    <p className='services fw-bold'>Services</p>
                    <h3 className='third-section-text fw-bold'>A Joyfull Investment in your Body & Mind</h3>

                </div>
                <div class="d-flex justify-content-around third-section-main-div  mb-3">
                    <div class="p-2  box1">

                        <FontAwesomeIcon className='mx-auto d-block absolute' icon={faBuilding} />
                        <FontAwesomeIcon className='relative mx-auto d-block' icon={faCircle} />

                        <h5 className='text-center pt-4'>Resifential Developments</h5>
                        <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div class="p-2  box2">
                        <FontAwesomeIcon className='absolute mx-auto d-block me-4' icon={faHouse} />
                        <FontAwesomeIcon className='relative mx-auto d-block' icon={faCircle} />
                        <h5 className='text-center pt-4'>Commercial Developments</h5>
                        <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div class="p-2  box3">
                        <FontAwesomeIcon className='mx-auto d-block absolute' icon={faBuilding} />
                        <FontAwesomeIcon className='relative mx-auto d-block' icon={faCircle} />
                        <h5 className=' pt-4 text-center'>Investor</h5>
                        <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>


            </ThirdSection>

















        </Maindiv>



    );
}