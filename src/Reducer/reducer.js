const initialState = [
    {
      
    }
  ]
  let val = {}
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'DATA':
        return { ...state, data: action.payload }
      case 'CHART':
        return { ...state, chart: action.payload }
      case 'CHARTINFO':
        return { ...state, chartinfo: action.payload }
      case 'DROPDOWN':
        return { ...state, dropdown: action.payload }
   
  
      default:
        return state
    }}