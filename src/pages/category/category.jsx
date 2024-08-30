import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCategoryById } from '../../reducers/dataList/dataListSlice'
import { ImageApi } from '../../utils/axiosRequest/axiosRequest'
import { CircularProgress, Typography, Box, Grid, Container } from '@mui/material'

const Category = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { data, loading, error } = useSelector((store) => ({
        data: store.dataList.categoryById,
        loading: store.dataList.loading,
        error: store.dataList.error,
    }))

    useEffect(() => {
        dispatch(getCategoryById(id))
    }, [id, dispatch])

    if (loading) {
        return (
            <Box className='flex justify-center items-center min-h-screen'>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Box className='flex justify-center items-center min-h-screen'>
                <Typography variant="h6" color="error">Error: {error}</Typography>
            </Box>
        )
    }

    return (
        <Container className='pt-[150px]'>
            <Typography variant="h4" gutterBottom>
                {data.categoryName}
            </Typography>

            {data?.subCategories?.length ? (
                <Grid container spacing={3}>
                    {data.subCategories.map((el) => (
                        <Grid item xs={12} sm={6} md={4} key={el.id}>
                            <Link to={"/category/" + id + "/" + el.id}>
                            <Box className='border p-4 rounded-md shadow-md'>
                                <Typography variant="h6">{el.subCategoryName}</Typography>
                            </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="body1">No subcategories available</Typography>
            )}

            <Box className='mt-4'>
                <Typography variant="body2">Category ID: {data.id}</Typography>
                <Box className='mt-2'>
                    <img src={ImageApi + data.categoryImage} alt={data.categoryName} className='w-full h-auto rounded-md shadow-md' />
                </Box>
            </Box>
        </Container>
    )
}

export default Category
