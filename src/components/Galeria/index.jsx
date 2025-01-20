import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagen from "../Imagen";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const SeccionFluida = styled.section`
    flex-grow: 1;
`;

const ContainerImagenes = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;

const Galeria = ({fotos = [], alSeleccionarFoto}) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ContainerImagenes>
                    {
                        fotos.map((foto) => {
                            return <Imagen
                            alSolicitarZoom={alSeleccionarFoto}
                            foto={foto}
                            key={foto.id}
                            />
                        })
                    }
                    </ContainerImagenes>
                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    );
}

export default Galeria;
