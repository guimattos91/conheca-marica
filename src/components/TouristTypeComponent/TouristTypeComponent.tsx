import { Fragment, memo } from 'react'

import { Col, Row } from 'react-bootstrap'
import { BsCheckCircle } from 'react-icons/bs'

import TitleH2Intern from 'components/TitleH2Intern'

import { ItemType } from 'types/ItemType'

interface IPaymentProps {
  category: ItemType
}

const TouristTypeComponent: React.FC<IPaymentProps> = ({ category }) => {
  return (
    <div>
      {category?.viajantes?.length >= 1 && (
        <>
          <TitleH2Intern title="Tipos de Viajantes" />
          <Row className="d-flex flex-wrap">
            {category.viajantes.map((traveller: { label: string }) => (
              <Col md={4} className="d-flex align-items-center py-4">
                <BsCheckCircle color="#6ebd00" size={20} className="me-2" />
                <p key={traveller.label} className="d-inline-flex m-0">
                  {traveller.label}
                </p>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  )
}
export default memo(TouristTypeComponent)
