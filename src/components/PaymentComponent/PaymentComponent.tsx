import { Fragment, memo } from 'react'

import { Col, Row } from 'react-bootstrap'
import { BsCheckCircle } from 'react-icons/bs'

import TitleH2Intern from 'components/TitleH2Intern'

import { ItemType } from 'types/ItemType'

interface IPaymentProps {
  category: ItemType
}

const PaymentComponent: React.FC<IPaymentProps> = ({ category }) => {
  return (
    <div>
      {category?.formas_pagamento?.length >= 1 && (
        <>
          <TitleH2Intern title="Formas de Pagamento" />
          <Row className="d-flex flex-wrap">
            {category.formas_pagamento.map(
              (payment: { icone: string; label: string }) => (
                <Col md={4} className="d-flex align-items-center py-4">
                  <BsCheckCircle color="#6ebd00" size={30} className="me-2" />
                  <p key={payment.label} className="d-inline-flex  m-0">
                    {payment.label}
                  </p>
                </Col>
              ),
            )}
          </Row>
        </>
      )}
    </div>
  )
}
export default memo(PaymentComponent)
