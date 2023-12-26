import { createSlice } from '@reduxjs/toolkit'

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        isSaving: false,
        savedProject: '',
        projects: [],
        activeProject: null,
            // activeProject: {
            //     id: 'ABC123',
            //     title: '',
            //     body: '',
            //     date: 1234567, 
            //     languajes: [], // javascript, React, Typescript ...
            //     imageURLs: [], // https://image1.jpg, https://image2.jpg, https://image3.jpg
            // }
    },
    reducers: {
        setSaving: ( state ) => {
            state.isSaving = true;
            state.savedProject = '';
        },
        setActiveProject: ( state, action ) => {
            state.activeProject = action.payload;
            state.savedProject = '';
        },
        closeActiveProject: ( state ) => {
            state.activeProject = null;
        },
    },
})


export const { closeActiveProject, setActiveProject, setSaving } = portfolioSlice.actions

// export default portfolioSlice.reducer
