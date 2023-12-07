import Panda from '../../img/panda.jpeg';
import Adultos from '../../img/adultos.jpeg';
import Delfines from '../../img/delfines.jpeg';
import Estudiantes from '../../img/estudiantes.jpeg';
import Canguro from '../../img/canguro.png';
import Oferta from '../../img/gran-venta.png';
import Oso from '../../img/bear.png';
import { Button, Col, Container, Form, Row, Toast, ToastContainer } from "react-bootstrap"
import { useState } from 'react';
import Offers from './Offers';
import Animals from './Animals';

const SelectTickets = ({ individual, handleIndividual, individualTotal, elderly, handleElderly, elderlyTotal, child, handleChild, childTotal, student, handleStudent, studentTotal, total, discount, handleNext }) => {

    const [showOffers, setShowOffers] = useState(false)
    const handleShowOffers = () => setShowOffers(true)
    const handleCloseOffers = () => setShowOffers(false)

    const [showAnimals, setShowAnimals] = useState(false)
    const handleShowAnimals = () => setShowAnimals(true)
    const handleCloseAnimals = () => setShowAnimals(false)

    const [showToast, setShowToast] = useState(false)

    const handlePay = () => {
        if (total > 0) {
            handleNext()
        } else {
            setShowToast(true)
        }
    }

    return (
        <Container fluid className='d-flex p-0'>
            <Animals show={showAnimals} handleClose={handleCloseAnimals} />
            <Offers show={showOffers} handleClose={handleCloseOffers} />
            <Container className='mt-3 px-5' style={{ width: '70%' }}>
                <div className='d-flex align-items-center mb-3'>
                    <h1 className='fw-semibold mb-0 me-auto'>Comprar entradas</h1>
                    <Button size='lg' variant='warning' className='d-flex align-items-center rounded-5 me-2' onClick={handleShowAnimals}>
                        <img src={Oso} alt='Oso' className='me-2' width={30} />
                        Ver animales
                    </Button>
                    <Button size='lg' variant='dark' className='d-flex align-items-center rounded-5' onClick={handleShowOffers}>
                        <img src={Oferta} alt='Oferta' className='me-2' width={30} />
                        Ver ofertas
                    </Button>
                </div>
                <h5 className='fw-medium mb-3'>¿Quieres pasar un día único aprendiendo todo sobre los animales?</h5>
                <p>Tu decides la aventura y nosotros la hacemos posible en ZOO</p>
                <Row xs={1} md={1} lg={1} xl={2} xxl={3} className='g-4'>
                    <Col>
                        <div className='ticket-card'>
                            <img src={Panda} alt='Entrada individual' />
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-auto'>Entrada individual</h6>
                                <div className='px-2 py-1 rounded-2' style={{ backgroundColor: '#198754' }}>
                                    <h6 className='mb-0 text-white fw-normal'>Costo: $90</h6>
                                </div>
                            </div>
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-2'>Cantidad</h6>
                                <Form.Control className='me-auto' type='number' size='sm' value={individual} onChange={(e) => handleIndividual(e.target.value)} />
                                <h6 className='mb-0 me-2'>Total: $</h6>
                                <p className='mb-0'>{individualTotal}</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ticket-card'>
                            <img src={Adultos} alt='Entrada adultos mayores' />
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-auto'>Entrada adultos mayores</h6>
                                <div className='px-2 py-1 rounded-2' style={{ backgroundColor: '#198754' }}>
                                    <h6 className='mb-0 text-white fw-normal'>Costo: $60</h6>
                                </div>
                            </div>
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-2'>Cantidad</h6>
                                <Form.Control className='me-auto' type='number' size='sm' value={elderly} onChange={(e) => handleElderly(e.target.value)} />
                                <h6 className='mb-0 me-2'>Total: $</h6>
                                <p className='mb-0'>{elderlyTotal}</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ticket-card'>
                            <img src={Delfines} alt='Entrada infantil' />
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-auto'>Entrada infantil</h6>
                                <div className='px-2 py-1 rounded-2' style={{ backgroundColor: '#198754' }}>
                                    <h6 className='mb-0 text-white fw-normal'>Costo: $60</h6>
                                </div>
                            </div>
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-2'>Cantidad</h6>
                                <Form.Control className='me-auto' type='number' size='sm' value={child} onChange={(e) => handleChild(e.target.value)} />
                                <h6 className='mb-0 me-2'>Total: $</h6>
                                <p className='mb-0'>{childTotal}</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ticket-card'>
                            <img src={Estudiantes} alt='Entrada estudiantes' />
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-auto'>Entrada estudiantil</h6>
                                <div className='px-2 py-1 rounded-2' style={{ backgroundColor: '#198754' }}>
                                    <h6 className='mb-0 text-white fw-normal'>Costo: $70</h6>
                                </div>
                            </div>
                            <div className='mt-2 d-flex align-items-center'>
                                <h6 className='mb-0 me-2'>Cantidad</h6>
                                <Form.Control className='me-auto' type='number' size='sm' value={student} onChange={(e) => handleStudent(e.target.value)} />
                                <h6 className='mb-0 me-2'>Total: $</h6>
                                <p className='mb-0'>{studentTotal}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='shop-sidebar p-0'>
                <div className='d-flex alignt-items-center px-3 pt-3'>
                    <img src={Canguro} alt='Bolsa de compra' width={40} />
                    <h5 className='fw-medium m-0 ms-3 align-self-center'>Bolsa de compra</h5>
                </div>
                <hr />
                <Container className='px-5'>
                    {total > 0 ? (
                        <>
                            {individual > 0 ? (
                                <div className='mb-4'>
                                    <h5>Entradas individuales</h5>
                                    <div className='d-flex align-items-center ps-2'>
                                        <h6 className='mb-0 me-2'>Cantidad:</h6>
                                        <p className='mb-0 me-auto'>{individual}</p>
                                        <h6 className='mb-0 me-2'>Total: $</h6>
                                        <p className='mb-0'>{individualTotal}</p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            {elderly > 0 ? (
                                <div className='mb-4'>
                                    <h5>Entradas adultos mayores</h5>
                                    <div className='d-flex align-items-center ps-2'>
                                        <h6 className='mb-0 me-2'>Cantidad:</h6>
                                        <p className='mb-0 me-auto'>{elderly}</p>
                                        <h6 className='mb-0 me-2'>Total: $</h6>
                                        <p className='mb-0'>{elderlyTotal}</p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            {child > 0 ? (
                                <div className='mb-4'>
                                    <h5>Entradas infantiles</h5>
                                    <div className='d-flex align-items-center ps-2'>
                                        <h6 className='mb-0 me-2'>Cantidad:</h6>
                                        <p className='mb-0 me-auto'>{child}</p>
                                        <h6 className='mb-0 me-2'>Total: $</h6>
                                        <p className='mb-0'>{childTotal}</p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            {student > 0 ? (
                                <div className='mb-4'>
                                    <h5>Entradas estudiantes</h5>
                                    <div className='d-flex align-items-center ps-2'>
                                        <h6 className='mb-0 me-2'>Cantidad:</h6>
                                        <p className='mb-0 me-auto'>{student}</p>
                                        <h6 className='mb-0 me-2'>Total: $</h6>
                                        <p className='mb-0'>{studentTotal}</p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                        </>
                    ) : (
                        <h4 className='text-center my-5' style={{ color: '#474747' }}>No se han seleccionado entradas.</h4>
                    )}
                    <hr />
                    {discount > 0 &&
                        <div className='d-flex justify-content-end align-items-center mb-3' style={{ color: 'red' }}>
                            <h5 className='me-2 mb-0'>Descuento: -$</h5>
                            <p className='mb-0 h5 fw-normal'>{discount}</p>
                        </div>
                    }
                    <div className='d-flex justify-content-end align-items-center mb-3'>
                        <h5 className='me-2 mb-0'>Total: $</h5>
                        <p className='mb-0 h5 fw-normal'>{total}</p>
                    </div>
                </Container>
                <hr className='my-5' />
                <div className='d-flex align-items-end'>
                    <ToastContainer
                        className="p-3"
                        position={'bottom-end'}
                        style={{ zIndex: 1 }}
                    >
                        <Toast autohide animation show={showToast} onClose={() => setShowToast(false)} delay={3000} style={{ backgroundColor: '#630502' }}>
                            <Toast.Header closeButton={true} style={{ backgroundColor: '#990b06' }} closeVariant='white'>
                                <strong className="me-auto fs-5 text-white">Error</strong>
                            </Toast.Header>
                            <Toast.Body className='text-white fs-6'>Debes seleccionar al menos un ticket</Toast.Body>
                        </Toast>
                    </ToastContainer>
                    <Button variant='success' className='ms-auto me-3' onClick={handlePay}>Continuar con la compra</Button>
                </div>
            </Container>
        </Container>
    )
}

export default SelectTickets