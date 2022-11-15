import styled from 'styled-components'

const StyledHeader = styled.header`
   .banner-header img{
    width:100%;
    height: 200px;
    object-fit:cover;
    object-position:0px 50%;

   }
    .user-info{
        margin-top:50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap:16px;
    }
    .user-info img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`

export { StyledHeader }