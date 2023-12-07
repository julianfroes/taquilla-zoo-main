import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ApiUrls } from '../../tools/ApirUrls';
import { Modal, Button, Table } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom'; // Importa Link de react-router-dom

const Sales = () => {
    const [sales, setSales] = useState([]);
    const urls = useContext(ApiUrls);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();       

    useEffect(() => {
        getSales();
    }, []);

    const getSales = async () => {
        try {
            const res = await axios.get(urls.getSales);
            setSales(res.data);
        } catch (error) {
            console.error('Error fetching sales:', error);
        }
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const renderSalesTable = () => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Precio Total</th>
                        <th>Fecha</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Vendedor ID</th>
                        <th>Cliente ID</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((venta) => (
                        <tr key={venta.id}>
                            <td>{venta.id}</td>
                            <td>{venta.precio_total}</td>
                            <td>{venta.fecha}</td>
                            <td>{venta.email}</td>
                            <td>{venta.celular}</td>
                            <td>{venta.id_vendedor}</td>
                            <td>{venta.id_cliente}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(venta.id)}>
                                    Borrar
                                </Button>
                                {/* Agrega aquí cualquier otra acción que desees */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    };

    const handleDelete = async (ventaId) => {
        try {
            await axios.delete(`${urls.deleteVenta}/${ventaId}`);
            getSales();
        } catch (error) {
            console.error('Error deleting sale:', error);
        }
    };

    return (

        <>
            <div className='div-menu'>
            <Button variant='dark' onClick={() => navigate('/taquilla')}>Regresar</Button>
            </div>

            <div>
                <h1>Lista de Ventas</h1>
                {/* Agrega un Link para el botón de regresar */}

                {renderSalesTable()}

                <Modal show={showModal} onHide={handleClose}>
                    {/* Contenido del Modal, si es necesario */}
                </Modal>
            </div>
        </>
    );
};

export default Sales;
