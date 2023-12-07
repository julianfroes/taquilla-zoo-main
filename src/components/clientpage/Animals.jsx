import { Button, Modal } from "react-bootstrap"
import { ApiUrls } from "../../tools/ApirUrls"
import { useState } from "react"
import { useContext } from "react"
import axios from "axios"
import { useEffect } from "react"
import { CDBIcon } from "cdbreact"

const Animals = ({ show, handleClose }) => {

    const [animals, setAnimals] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getAnimals()
    })

    const getAnimals = async () => {
        const res = await axios.get(urls.getAnimals)
        setAnimals(res.data)
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <CDBIcon icon="hippo" size="2x" className="me-3" />
                <Modal.Title>Animales</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {animals.map((animal) => (
                    animal.name !== null && (
                        <div key={animal.id}>
                            <div className="d-flex align-items-center mb-3 px-3">
                                <h4 className="mb-0 fw-bold">{animal.name}</h4>
                                <h4 className="mb-0 fw-semibold mx-3">-</h4>
                                <h4 className="mb-0 fw-normal">{animal.pname}</h4>
                            </div>
                            <hr />
                        </div>
                    )
                ))}
                <Button variant="secondary" onClick={handleClose}>Regresar</Button>
            </Modal.Body>
        </Modal>
    )
}

export default Animals