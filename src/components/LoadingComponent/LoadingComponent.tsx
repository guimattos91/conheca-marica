import { memo } from 'react'

import { Spinner } from 'react-bootstrap'

interface ILoadingProps {
  Loading: boolean
}

const LoadingComponent: React.FC<ILoadingProps> = ({ Loading }) => (
  <>
    {' '}
    {Loading && (
      <div className="d-flex justify-content-center py-5">
        <Spinner animation="grow" variant="success" className="text-center" />
      </div>
    )}
  </>
)

export default memo(LoadingComponent)
