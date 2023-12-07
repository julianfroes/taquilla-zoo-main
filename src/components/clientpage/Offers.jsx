import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import { ApiUrls } from "../../tools/ApirUrls"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const Offers = ({ show, handleClose }) => {

    const [offers, setOffers] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getOffers()
    })

    const getOffers = async () => {
        const res = await axios.get(urls.getOffers)
        setOffers(res.data)
    }

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header className="p-0 headerOffers">
            </Modal.Header>
            <Modal.Body>
                {offers.map((offer) => (
                    <div key={offer.id}>
                        <div className="d-flex align-items-center mb-2">
                            <h5 className="fw-bold me-auto mb-0">{offer.nombre}</h5>
                            <div className="rounded-2 px-2 text-white fw-bold" style={{ backgroundColor: '#b91010' }}>
                                <small>{`- ${offer.descuento * 100}%`}</small>
                            </div>
                        </div>
                        <p>{offer.descripcion}</p>
                        <hr />
                    </div>
                ))}
                <Button variant="secondary" onClick={handleClose}>Regresar</Button>
            </Modal.Body>
        </Modal>
    )
}

export default Offers