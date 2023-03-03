import { Fragment, memo } from 'react'

import { Col, Row } from 'react-bootstrap'
import SVG from 'react-inlinesvg'

import TitleH2Intern from 'components/TitleH2Intern'

import { ItemType } from 'types/ItemType'

interface IRestrictProps {
  category: ItemType
}

const RestrictComponent: React.FC<IRestrictProps> = ({ category }) => {
  return (
    <div>
      {category?.restricoes?.length >= 1 && (
        <>
          <TitleH2Intern title="Restrições" />
          <Row className="d-flex flex-wrap">
            {category.restricoes.map(
              (restriction: { icone: string; label: string }) => (
                <Col md={4} className="d-flex align-items-center py-4">
                  <SVG
                    src={restriction.icone}
                    width={30}
                    fill="#6ebd00"
                    height="auto"
                    title={restriction.label}
                    className="me-2"
                  />
                  <p key={restriction.label} className="d-inline-flex m-0">
                    {restriction.label}
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
export default memo(RestrictComponent)
