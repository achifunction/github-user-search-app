import styled from "styled-components";

const FollowerSection = ({data})=> {
    return(
        <>
        <FollowerInfo >
            <div >
                <TextFoll>Repos</TextFoll>
                <Number>{data.public_repos}</Number>
            </div>
            <div>
                <TextFoll>Followers</TextFoll>
                <Number>{data.followers}</Number>
            </div>
            <div>
                <TextFoll>Following</TextFoll>
                <Number>{data.following}</Number>
            </div>
        </FollowerInfo>
        </>
    )
}
export default FollowerSection;

const FollowerInfo = styled.div`
height: 85px;
width: 279px;
border-radius: 10px;
background: #F6F8FF;
border-radius: 10px; 
margin-left:24px;
margin-top: 23px;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const TextFoll = styled.span`

font-family: 'Space Mono',monospace;
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 16px;
text-align: center;
color: #4B6A9B;
display: block;
margin-top: 15px;
`


const Number = styled.h3`

font-family: 'Space Mono',monospace;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: center;
text-transform: uppercase;
color: #2B3442;
`