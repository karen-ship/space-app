import { styled } from "styled-components"
import Imagen from "../Imagen"
import BotonIcono from "../BotonIcono"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 200px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 880px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
const ModalZoom = ({ foto, close }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto} onClose={close}>
                    <Imagen foto={foto} expandida={true} />
                    <form method="dialog">
                        <BotonIcono formMethod="dialog">
                            <img src="/iconos/cerrar.png" alt="Ícono de cerrar" />
                        </BotonIcono>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom
