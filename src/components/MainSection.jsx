import styled from "styled-components";
import FollowerSection from "./Followers";
import LocationSection from "./Location";

const MainSection = ({data}) => {
    const createdAt = data?.created_at?.split('T')[0].split('-')
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <>
            <ConteinerMain>
                <div style={{display:"flex", justifyContent:"space-evenly", paddingTop:"32px"}}>
                    <Foto src= {data.avatar_url}></Foto>
                    <div >
                        <Name>{data.name}</Name>
                        <Username>@{data.login}</Username>
                        <JoineDeta>Joined {createdAt && createdAt[2]} {createdAt && months[createdAt[1] - 1]} {createdAt && createdAt[0]}</JoineDeta>
                    </div>
                </div>
                <Info>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</Info>
                <FollowerSection data= {data} />
                <LocationSection data = {data}  />
            </ConteinerMain>

        </>
    )
};

export default MainSection;


const ConteinerMain = styled.div`

height: 517px;
width: 327px;
border-radius: 15px;
background: #FEFEFE;
box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
border-radius: 15px;
margin-left: 24px;
margin-top:16px;
`

const Foto = styled.img`

height: 70px;
width: 70px;
border-radius: 50px;
margin-top: 15px;
`

const Name = styled.h2`

font-family: 'Space Mono', monospace;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #2B3442;
`

const Username = styled.span`
font-family: 'Space Mono', monospace;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
color: #0079FF;
display: block;

`
const JoineDeta = styled.span`
font-family: 'Space Mono' ,monospace;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
color: #697C9A;
display: block;
`

const Info = styled.p`
font-family: 'Space Mono', monospace;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 25px;
color: #4B6A9B;
margin-left: 24px;
margin-right: 24px;
margin-top: 33px;
`


