import React, { useState } from 'react';

const Resume = ({ ticketInfo: propTicketInfo }) => {
  const [ticketInfo, setTicketInfo] = useState(propTicketInfo);

  if (!ticketInfo) {
 
    return null; 
  }

  
  const { email, phone, total, value, individual, child, elderly, student } = ticketInfo;

  console.log('Valores de las propiedades en Resume.js:', {
    email,
    phone,
    total,
    value,
    individual,
    child,
    elderly,
    student,
  });

  return (
    <div>
      <h2>Resumen de la Compra</h2>
      <p>Email: {email}</p>
      <p>Teléfono: {phone}</p>
      <p>Total a Pagar: ${total}</p>
      <p>Cantidad con la que se Pagó: ${value}</p>
      <p>Entradas Individuales: {individual}</p>
      <p>Entradas Infantiles: {child}</p>
      <p>Entradas Adultos Mayores: {elderly}</p>
      <p>Entradas Estudiantiles: {student}</p>
    </div>
  );
};

export default Resume;
