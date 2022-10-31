import styled from "styled-components";

const Search = ({ setSearchValue }) => {

    const caunt = (event) => {
        if(event.key === "Enter") {
            setSearchValue(event.target.value);
        }

    }
    return (
        <>
            <SearchBox>
                <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff" /></svg>
                <InputSearch onKeyDown={caunt} defaultValue ="achifunction" type="search" placeholder="Search GitHub username…"></InputSearch>
                <SearchButton>Search</SearchButton>
            </SearchBox>
        </>
    )
}

export default Search;

const SearchBox = styled.div`

height: 60px;
width: 327px;
border-radius: 15px;
background: #FEFEFE;
box-shadow: 0px 16px 30px -10px #4660BB33;
display: flex;
justify-content: center;
align-items: center;
margin-left: 24px;
margin-top: 35px;
`
const InputSearch = styled.input`
    
height: 25px;
width: 184px;
font-family: 'Space Mono', monospace;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 25px;
color: #4B6A9B;
border: none;

`
const SearchButton = styled.button`

height: 46px;
width: 84px;
border-radius: 10px;
background: #0079FF;
font-family: 'Space Mono', monospace;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 21px;
text-align: center;
color: #FFFFFF;
border: none;

`














