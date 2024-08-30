import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSubCategoryById } from '../../reducers/dataList/dataListSlice'

const SubCategory = () => {

    const { subId } = useParams()

    const data = useSelector((store) => store.dataList.subCategoryById)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSubCategoryById(subId))
    }, [])


  return (
    <div className='pt-[150px]'>


        <h1>{data.subCategoryName}</h1>
        <p>{data.id}</p>


    </div>
  )
}

export default SubCategory