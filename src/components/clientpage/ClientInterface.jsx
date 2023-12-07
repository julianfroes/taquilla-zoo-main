import ClientInformation from './ClientInformation';
import SelectTickets from './SelectTickets';
import { useState } from 'react';

const ClientInterface = () => {

    const [step, setStep] = useState(1)

    const handleNext = () => {
        setStep(step + 1)
    }

    const handlePrev = () => {
        setStep(step - 1)
    }

    const handleDiscount = (sumTotal) => {
        const date = new Date()
        if (date.getDay() === 2) {
            setDiscount(50)
            setTotal(sumTotal * .5)
        } else {
            setTotal(sumTotal)
        }
    }

    const [individual, setIndividual] = useState(0)
    const [individualTotal, setIndividualTotal] = useState(0.00)

    const handleIndividual = (quantity) => {
        setIndividual(quantity)
        var total = 0
        if (quantity >= 4) {
            total = (quantity * 90) * .85
            var dif = (quantity * 90) * .15
            setDiscount(dif)
        } else {
            total = quantity * 90
            setDiscount(0)
        }
        setIndividualTotal(total)
        const sum = total + elderlyTotal + childTotal + studentTotal
        handleDiscount(sum)
    }

    const [elderly, setElderly] = useState(0)
    const [elderlyTotal, setElderlyTotal] = useState(0.00)

    const handleElderly = (quantity) => {
        setElderly(quantity)
        var total = quantity * 60
        setElderlyTotal(total)
        const sum = individualTotal + total + childTotal + studentTotal
        handleDiscount(sum)
    }

    const [child, setChild] = useState(0)
    const [childTotal, setChildTotal] = useState(0.00)

    const handleChild = (quantity) => {
        setChild(quantity)
        var total = quantity * 60
        setChildTotal(total)
        const sum = individualTotal + elderlyTotal + total + studentTotal
        handleDiscount(sum)
    }

    const [student, setStudent] = useState(0)
    const [studentTotal, setStudentTotal] = useState(0.00)

    const handleStudent = (quantity) => {
        setStudent(quantity)
        var total = 0
        if (quantity >= 40) {
            total = (quantity * 70) * .6
            var dif = (quantity * 70) * .4
            setDiscount(dif)
        } else {
            total = quantity * 70
            setDiscount(0)
        }
        setStudentTotal(total)
        const sum = individualTotal + elderlyTotal + childTotal + total
        handleDiscount(sum)
    }

    const [total, setTotal] = useState(0)
    const [discount, setDiscount] = useState(0)

    return (
        <>
            {step === 1 && <SelectTickets
                individual={individual}
                handleIndividual={handleIndividual}
                individualTotal={individualTotal}
                elderly={elderly}
                handleElderly={handleElderly}
                elderlyTotal={elderlyTotal}
                child={child}
                handleChild={handleChild}
                childTotal={childTotal}
                student={student}
                handleStudent={handleStudent}
                studentTotal={studentTotal}
                total={total}
                discount={discount}
                handleNext={handleNext}
            />}
            {step === 2 && <ClientInformation
                individual={individual}
                individualTotal={individualTotal}
                elderly={elderly}
                elderlyTotal={elderlyTotal}
                child={child}
                childTotal={childTotal}
                student={student}
                studentTotal={studentTotal}
                total={total}
                handlePrev={handlePrev}
            />}
        </>
    )
}

export default ClientInterface