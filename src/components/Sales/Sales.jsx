import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ApiUrls } from '../../tools/ApirUrls';
import { Button, Table, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Return from '../../img/arrow.png';
import { CDBIcon } from 'cdbreact';

const Sales = () => {
    const [sales, setSales] = useState([]);
    const urls = useContext(ApiUrls);
    const navigate = useNavigate();

    useEffect(() => {
        getSales()
    }, [])

    const getSales = async () => {
        try {
            const res = await axios.get(urls.getSales);
            setSales(res.data);
            console.log(res.data)
        } catch (error) {
            console.error('Error fetching sales:', error);
        }
    };

    const handleDelete = async (ventaId) => {
        try {
            await axios.delete(`${urls.deleteVenta}/${ventaId}`);
            getSales();
        } catch (error) {
            console.error('Error deleting sale:', error);
        }
    };

    const formatDate = (date) => {
        const dateObj = new Date(date)
        return dateObj.toLocaleDateString()
    }

    return (
        <>
            <Container fluid className='d-flex py-2' style={{ backgroundColor: '#2A2A2A' }}>
                <Button size='lg' variant='light' className='d-flex align-items-center fw-semibold rounded-5 me-2' onClick={() => navigate('/taquilla')}>
                    <img src={Return} alt='Regresar' className='me-2' width={30} />
                    Regresar
                </Button>
            </Container>
            <Container>
                <h1 className='mb-3 mt-3'>Lista de Ventas</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
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
                                <td>{formatDate(venta.fecha)}</td>
                                <td>{venta.email}</td>
                                <td>{venta.celular}</td>
                                <td>{venta.id_vendedor}</td>
                                <td>{venta.id_cliente}</td>
                                <td className='text-center'>
                                    <Button variant="danger" onClick={() => handleDelete(venta.id)}>
                                        <CDBIcon icon='trash' />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Sales;