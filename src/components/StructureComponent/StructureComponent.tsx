import { Fragment, memo } from 'react'

import { Col, Row } from 'react-bootstrap'
import SVG from 'react-inlinesvg'

import TitleH2Intern from 'components/TitleH2Intern'

import { ItemType } from 'types/ItemType'

interface IStructuretProps {
  category: ItemType
}

const StructureComponent: React.FC<IStructuretProps> = ({ category }) => {
  return (
    <div>
      {category?.estruturas?.length >= 1 && (
        <>
          <TitleH2Intern title="Estruturas" />
          <Row className="d-flex flex-wrap">
            {category.estruturas.map(
              (structure: { icone: string; label: string }) => (
                <Col md={4} className="d-flex align-items-center py-4">
                  <SVG
                    src={structure.icone}
                    width={30}
                    fill="#6ebd00"
                    color="#6ebd00"
                    height="auto"
                    title={structure.label}
                    className="me-2"
                  />
                  <p key={structure.label} className="d-inline-flex m-0">
                    {structure.label}
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
export default memo(StructureComponent)
