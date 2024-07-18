import { IComponent } from '@/types/index.types'
import classNames from 'classnames'
import React, { FC } from 'react'

const H3: FC<IComponent> = ({ children }) => {
  return (
    <h3 className={classNames('text-xl', 'text-text')}>{children}</h3>
  )
}

export default H3