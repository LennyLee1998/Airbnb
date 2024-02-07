import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon-search'

const HeaderCenter = memo((props) => {
  return (
    <CenterWrapper>
      {/* <div className="search"> */}
        <div className='text'>搜索房源和体验</div>
        <div className='icon-search'>
          <IconSearch/>
        </div>
      {/* </div> */}
    </CenterWrapper>
  )
})

HeaderCenter.propTypes = {}

export default HeaderCenter