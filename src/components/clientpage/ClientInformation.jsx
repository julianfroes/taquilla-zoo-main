import { useState } from "react"
import ResumenCompra from "../../img/resumen-compra.png"
import UserData from "../../img/user-data.png"
import { Button, Container, Form, Toast, ToastContainer } from "react-bootstrap"
import axios from "axios"
import { useContext } from "react"
import { ApiUrls } from "../../tools/ApirUrls"
import Swal from 'sweetalert2'

const ClientInformation = ({ individual, individualTotal, elderly, elderlyTotal, child, childTotal, student, studentTotal, total, handlePrev }) => {

    const urls = useContext(ApiUrls)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleCreateSale = async () => {
        if ((email.length * phone.length) > 0) {
            const details = []
            if (individual > 0) {
                details.push({
                    cantidad: individual,
                    area: "General",
                    precio_total: individualTotal,
                    tipo_boleto: 1,
                })
            }

            if (elderly > 0) {
                details.push({
                    cantidad: elderly,
                    area: "General",
                    precio_total: elderlyTotal,
                    tipo_boleto: 2,
                })
            }

            if (child > 0) {
                details.push({
                    cantidad: child,
                    area: "General",
                    precio_total: childTotal,
                    tipo_boleto: 3,
                })
            }

            if (student > 0) {
                details.push({
                    cantidad: student,
                    area: "General",
                    precio_total: studentTotal,
                    tipo_boleto: 4,
                })
            }

            const dateObject = new Date()
            const date = `${dateObject.getFullYear()}-${dateObject.getMonth()}-${dateObject.getDate()}`

            const dataSale = {
                precio_total: total,
                fecha: date,
                email: email,
                celular: phone,
                id_vendedor: 0,
                id_cliente: 0,
                detalles: details,
            }

            console.log(urls.createSale)
            console.log(dataSale)
            const res = await axios.post(urls.createSale, dataSale)
            console.log(res.data)
            if (res.data.ventaId > 0) {
                Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "Pedido realizado con exitosamente",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload()
                    }
                })
            } else {
                setToastMessage('Error al hacer la compra')
                setShowToast(true)
            }
        } else {
            setToastMessage('Debes llenar todos los campos')
            setShowToast(true)
        }
    }

    return (
        <Container fluid className='d-flex p-0'>
            <Container className='mt-3 px-5' style={{ width: '70%' }}>
                <div className="d-flex align-items-center mb-3">
                    <img src={UserData} width={50} alt="User data" />
                    <h1 className='fw-semibold ms-3 mb-0'>Datos del comprador</h1>
                </div>
                <hr />
                <h5 className='fw-medium mb-3'>Ingresa tus datos para continuar con la compra.</h5>
                <div className="px-5 py-4 rounded-4" style={{ backgroundColor: '#F0F0F0' }}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email" className="fw-semibold">Correo</Form.Label>
                            <Form.Control type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="phone" className="fw-semibold">Número celular</Form.Label>
                            <Form.Control type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </Form.Group>
                    </Form>
                </div>
            </Container>
            <Container className='shop-sidebar p-0'>
                <div className='d-flex alignt-items-center px-3 pt-3'>
                    <img src={ResumenCompra} alt='Resumen de compra' width={40} />
                    <h5 className='fw-medium m-0 ms-3 align-self-center'>Bolsa de compra</h5>
                </div>
                <hr />
                <Container className='px-5'>
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
                    <hr />
                    <div className='d-flex justify-content-end align-items-center mb-3'>
                        <h5 className='me-2 mb-0'>Total: $</h5>
                        <p className='mb-0 h5 fw-normal'>{total}</p>
                    </div>
                </Container>
                <hr className='my-5' />
                <div className='d-flex align-items-end'>
                    <Button variant='success' className='ms-auto me-3' onClick={handleCreateSale}>Realizar pedido</Button>
                </div>
            </Container>
            <ToastContainer
                className="p-3"
                position={'bottom-end'}
                style={{ zIndex: 1 }}
            >
                <Toast autohide animation show={showToast} onClose={() => setShowToast(false)} delay={3000} style={{ backgroundColor: '#630502' }}>
                    <Toast.Header closeButton={true} style={{ backgroundColor: '#990b06' }} closeVariant='white'>
                        <strong className="me-auto fs-5 text-white">Error</strong>
                    </Toast.Header>
                    <Toast.Body className='text-white fs-6'>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    )
}

export default ClientInformation