import { memo } from 'react'

import { Spinner } from 'react-bootstrap'

interface ILoadingProps {
  Loading: boolean
}

const LoadingComponent: React.FC<ILoadingProps> = ({ Loading }) => (
  <>
    {' '}
    {Loading && (
      <div className="py-5">
        <Spinner animation="grow" variant="success" />
      </div>
    )}
  </>
)

export default memo(LoadingComponent)
