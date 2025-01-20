import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img src="/imagenes/logo.png" alt="Logo de SpaceApp" />
        <CampoTexto />
    </HeaderEstilizado>
}

export default Cabecera
