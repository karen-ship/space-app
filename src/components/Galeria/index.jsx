import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SeccionFluida = styled.section`
    flex-grow: 1;
`;

const Galeria = ({fotos = []}) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    {
                        fotos.map((foto) => {
                            return <p key={foto.id}>{foto.path}</p>
                        })
                    }
                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    );
}

export default Galeria;
