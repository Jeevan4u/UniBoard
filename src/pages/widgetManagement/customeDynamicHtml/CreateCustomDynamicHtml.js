import React, { useState } from 'react'
// import Select from 'react-select/dist/declarations/src/Select'
import CustomeDynamicTop from './CustomDynamicTop'
import CustomeDynamicOption from './CustomDynamicOption'
import CustomeDynamicBody from './CustomDynamicBody'
export default function CreateCustomDynamicHtml() {
  const [dynamicContent, setDynamicContent] = useState()
  const [dynamicContentName, setDynamicContentName] = useState()
  const getContent = (data) => {
    setDynamicContent(
      data.content.map((item) => {
        return item.value
      }),
    )
  }
  const getfieldName = (data) => {
    console.log('data', data)
    setDynamicContentName(data)
  }
  const getDynamicContent = (data) => {
    // console.log('getDynamicContent', data)
  }
  return (
    <div>
      <CustomeDynamicTop getContent={getContent} />
      {dynamicContent && (
        <CustomeDynamicOption
          dynamicContent={dynamicContent}
          getfieldName={getfieldName}
        />
      )}
      {/* {dynamicContentName && (
        <CustomeDynamicBody
          dynamicContentName={dynamicContentName}
          getDynamicContent={getDynamicContent}
        />
      )} */}
    </div>
  )
}
