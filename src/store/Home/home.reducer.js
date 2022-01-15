import { GET_DATA } from './home.action'

const initialState = {
    info: {
        id: 1,
        name: 'Md Rakibul Hasan',
        jobTile: 'Web Devolopoer & Graphic Designer', 
        profection: 'Web Devolopoer',
        experience: '2 Year',
        district: 'Narsingdi',
        presentAddress: `House-18, Road-06, Block-D, Banasree, Rampura`,
        phone: '01917-000804',
        village: `Chakbogadi`,
        upzilla: 'Monhardi',
        university: `The People's University Of Bangladesh`,
        college: 'Narsingdi Precedency College',
        cgpa: '3.48',
        description: 'I have completed my bachelor degree Computer Science and Engineering (CSE), Now I am trying find best opportunity build my development carrier as a software engineer. And giving my quality output to current development company.',
        yeah: 'You are Welcome to connect with redux'

    }
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            const { getData } = action;
            return {...state, getData}
        
        default:
            return state;
    }

}

export default homeReducer;